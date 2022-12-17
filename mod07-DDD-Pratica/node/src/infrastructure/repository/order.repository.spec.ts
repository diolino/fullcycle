import { Sequelize } from "sequelize-typescript";
import Order from "../../domain/entity/order";
import OrderItem from "../../domain/entity/order_item";
import Customer from "../../domain/entity/customer";
import Address from "../../domain/entity/address";
import Product from "../../domain/entity/product";
import CustomerModel from "../db/sequelize/model/customer.model";
import CustomerRepository from "./customer.repository";
import ProductModel from "../db/sequelize/model/product.model";
import ProductRepository from "./product.repository";
import OrderItemModel from "../db/sequelize/model/order-item.model";
import OrderModel from "../db/sequelize/model/order.model";
import OrderRepository from "./order.repository";
import {v4 as uuidv4} from 'uuid';

describe("Order repository test", () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: "test.sql",
      logging: false,
      sync: { force: true },
    });

    await sequelize.addModels([
      CustomerModel,
      OrderModel,
      OrderItemModel,
      ProductModel,
    ]);
    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });

  it("should create a new order", async () => {
    const customerRepository = new CustomerRepository();
    const customer = new Customer(uuidv4(), "Customer 1");
    const address = new Address("Street 1", 1, "Zipcode 1", "City 1");
    customer.changeAddress(address);
    await customerRepository.create(customer);

    const productRepository = new ProductRepository();
    const product = new Product(uuidv4(), "Product 1", 10);
    await productRepository.create(product);

    const ordemItem = new OrderItem(
      uuidv4(),
      product.name,
      product.price,
      product.id,
      2
    );

    const order = new Order(uuidv4(), customer.id, [ordemItem]);

    const orderRepository = new OrderRepository();
    await orderRepository.create(order);

    const orderModel = await OrderModel.findOne({
      where: { id: order.id },
      include: ["items"],
    });

    expect(orderModel.toJSON()).toStrictEqual({
      id: order.id,
      customer_id: customer.id,
      total: order.total(),
      items: [
        {
          id: ordemItem.id,
          name: ordemItem.name,
          price: ordemItem.price,
          quantity: ordemItem.quantity,
          order_id: order.id,
          product_id: product.id,
        },
      ],
    });
  });

  it("should update an order", async () => {

    //Create customer
    const customerRepository = new CustomerRepository();
    const customer = new Customer(uuidv4(), "Customer 1");
    const address = new Address("Street 1", 1, "Zipcode 1", "City 1");
    customer.changeAddress(address);
    await customerRepository.create(customer);

    //create product
    const productRepository = new ProductRepository();
    const product = new Product(uuidv4(), "Product 1", 10);
    await productRepository.create(product);

    //create OrderItem
    const ordemItem = new OrderItem(
      uuidv4(),
      product.name,
      product.price,
      product.id,
      2
    );

    //Create order
    const order = new Order(uuidv4(), customer.id, [ordemItem]);

    const orderRepository = new OrderRepository();  
    //orderRepository._sequelize=sequelize;
    
    await orderRepository.create(order);

    const orderModel = await OrderModel.findOne({
      where: { id: order.id },
      include: ["items"],
    });

    expect(orderModel.toJSON()).toStrictEqual({
      id: order.id,
      customer_id: customer.id,
      total: order.total(),
      items: [
        {
          id: ordemItem.id,
          name: ordemItem.name,
          price: ordemItem.price,
          quantity: ordemItem.quantity,
          order_id: order.id,
          product_id: product.id,
        },
      ],
    });

    ordemItem.quantity = ordemItem.quantity * 2;
   
    order.items =  [ordemItem];
    expect(order.total()).toBe(40);
    //order.customerId = "13";
    //sequelize.transaction();
    await orderRepository.update(order);



    let orderModelUpdated = await OrderModel.findOne({
      where: { id: orderModel.id }/*,
      include: ["items"],*/
    });

    expect(orderModelUpdated.total).toBe(order.total());
    /*por algum motivo quando coloco o total dentro do "toStrictEqual" o teste não passa, mesmo não apresentando onde está o erro. 
    Separando a verificação em outra linha passa.*/
    expect(orderModelUpdated.toJSON()).toStrictEqual({      
      customer_id: customer.id,
      id: order.id,      
      items: [
        {
          id: ordemItem.id,
          name: ordemItem.name,
          price: ordemItem.price,
          quantity: ordemItem.quantity,
          order_id: order.id,
          product_id: product.id,
        },
      ],
      total: order.total(),
    });
    //(await sequelize.transaction()).commit();
  });

});


