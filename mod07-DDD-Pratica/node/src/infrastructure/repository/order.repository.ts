import { Sequelize } from "sequelize-typescript";
import Order from "../../domain/entity/order";
import OrderItem from "../../domain/entity/order_item";
import OrderRepositoryInterface from "../../domain/repository/order-repository.interface";
import CustomerModel from "../db/sequelize/model/customer.model";
import OrderItemModel from "../db/sequelize/model/order-item.model";
import OrderModel from "../db/sequelize/model/order.model";
import ProductModel from "../db/sequelize/model/product.model";
import Delta from "./Delta"

export default class OrderRepository implements OrderRepositoryInterface{
 
  async find(id: string): Promise<Order> {
    const orderModel = await OrderModel.findOne({ where: { id }, include: [OrderItemModel]});
    const orderItens = orderModel.items.map((orderItemModel) =>
    new OrderItem(orderItemModel.id, orderItemModel.name,orderItemModel.price,orderItemModel.product_id,orderItemModel.quantity));
    return new Order(orderModel.id, orderModel.customer_id, orderItens);
  }

  async findAll(): Promise<Order[]> {
    const orderModels = await OrderModel.findAll({include: [OrderItemModel]});
    return orderModels.map((orderModel) =>
      new Order(orderModel.id, orderModel.customer_id, 
        orderModel.items.map((orderItemModel) =>
          new OrderItem(orderItemModel.id, orderItemModel.name,orderItemModel.price,orderItemModel.product_id,orderItemModel.quantity)
        )
      )
    );
  }

  async create(entity: Order): Promise<void> {
    await OrderModel.create(
      {
        id: entity.id,
        customer_id: entity.customerId,
        total: entity.total(),
        items: entity.items.map((item) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          product_id: item.productId,
          quantity: item.quantity,
        })),
      },
      {
        include: [{ model: OrderItemModel }],
      }
    );
  }


  async update(entity: Order): Promise<void> {
    
     // Fetch Order
    const orderModel = await OrderModel.findOne(
      { 
        where: { id: entity.id },
        include: [OrderItemModel],
      },     
    );
    if (!orderModel) {
      throw new Error("Order not found");
    }

    // Get deltas
    const ordersItemFromBd = orderModel.items.map((orderItemModel) =>
    new OrderItemModel(
      { id: orderItemModel.id, 
        product_id: orderItemModel.product_id,
        quantity: orderItemModel.quantity, 
        name: orderItemModel.name, 
        price: orderItemModel.price,
        order_id: entity.id,
        order: orderModel
      }
    )
  );
    const ordersItemFromRequest = entity.items.map((orderItem) =>
      new OrderItemModel(
        { id: orderItem.id, 
          product_id: orderItem.productId, 
          quantity: orderItem.quantity, 
          name: orderItem.name, 
          price: orderItem.price,
          order_id: entity.id,
          order: orderModel
        }
      )
    );

    const itemsDelta = this.getDelta(ordersItemFromBd, ordersItemFromRequest);   

    // Update OrderItens    
    await Promise.all([
      itemsDelta.added.map(async item => {
        item.save();
        //orderModel.$create('item', item);
      }),
      itemsDelta.changed.map(async itemData => {
        const item = orderModel.items.find(_item => _item.id === itemData.id);
        item.update(itemData);
      }),
      itemsDelta.deleted.map(async item => {
        item.destroy();
      }),
      orderModel.update(
        {
          total: entity.total(),          
        },
        {
          where: {
            id: orderModel.id,
          },
        }),
      ]);     
}

getDelta(source: Array<OrderItemModel>, updated: Array<OrderItemModel>): Delta {

    let added = updated.filter(updatedItem => source.find(sourceItem => sourceItem.id === updatedItem.id) === undefined);
    let changed = source.filter(sourceItem => updated.find(updatedItem => updatedItem.id === sourceItem.id) !== undefined);
    let deleted = source.filter(sourceItem => updated.find(updatedItem => updatedItem.id === sourceItem.id) === undefined);


  const delta = new Delta (added, changed, deleted);

  return delta;
}

}
