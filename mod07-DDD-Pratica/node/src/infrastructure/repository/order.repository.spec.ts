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
    const product1 = new Product(uuidv4(), "Product 1", 10);
    await productRepository.create(product1);

    //create OrderItem
    const ordemItem1 = new OrderItem(
      uuidv4(),
      product1.name,
      product1.price,
      product1.id,
      2
    );

    //Create order
    const order = new Order(uuidv4(), customer.id, [ordemItem1]);

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
          id: ordemItem1.id,
          name: ordemItem1.name,
          price: ordemItem1.price,
          quantity: ordemItem1.quantity,
          order_id: order.id,
          product_id: product1.id,
        },
      ],
    });

    ordemItem1.quantity = ordemItem1.quantity * 2;
   
    order.items =  [ordemItem1];
    expect(order.total()).toBe(40);
    //order.customerId = "13";
    //sequelize.transaction();
    await orderRepository.update(order);



    let orderModelUpdated = await OrderModel.findOne({
      where: { id: orderModel.id },
      include: ["items"],
    });

    expect(orderModelUpdated.total).toBe(40);
    expect(orderModelUpdated.items.length).toBe(1);
    
    //create new product
    
    const product2 = new Product(uuidv4(), "Product 2", 20);
    await productRepository.create(product2);

    //create new OrderItem
    const ordemItem2 = new OrderItem(
      uuidv4(),
      product2.name,
      product2.price,
      product2.id,
      3
    );

    order.items = [ordemItem1, ordemItem2];
    
    await orderRepository.update(order);

    let orderModelUpdatedAgain = await OrderModel.findOne({
      where: { id: orderModel.id },
      include: ["items"],
    });

    expect(orderModelUpdatedAgain.total).toBe(4*10+3*20);
    expect(orderModelUpdatedAgain.items.length).toBe(2);

    //remove an Iten
    order.items = [ordemItem2];    
    
    await orderRepository.update(order);

    let orderModelUpdatedOneMoreTime = await OrderModel.findOne({
      where: { id: orderModel.id },
      include: ["items"],
    });

    expect(orderModelUpdatedOneMoreTime.total).toBe(3*20);
    expect(orderModelUpdatedOneMoreTime.items.length).toBe(1);
  
  });

  it("should find all orders", async () => {
    const customerRepository = new CustomerRepository();
    const orderRepository = new OrderRepository();
    const productRepository = new ProductRepository();

    const customer = new Customer(uuidv4(), "Customer 1");
    const address = new Address("Street 1", 1, "Zipcode 1", "City 1");
    customer.changeAddress(address);
    await customerRepository.create(customer);
    
    const product = new Product(uuidv4(), "Product 1", 10);
    await productRepository.create(product);
    //Order 1
    const ordemItem1 = new OrderItem(
      uuidv4(),
      product.name,
      product.price,
      product.id,
      2
    );
    const order1 = new Order(uuidv4(), customer.id, [ordemItem1]);  
    await orderRepository.create(order1);
    //Order 2
    const ordemItem2 = new OrderItem(
      uuidv4(),
      product.name,
      product.price,
      product.id,
      2
    );
    const order2 = new Order(uuidv4(), customer.id, [ordemItem2]);    
    await orderRepository.create(order2);

    const foundOrders = await orderRepository.findAll();
    const orders = [order1, order2];

    expect(orders).toEqual(foundOrders);    

    
  });

});


