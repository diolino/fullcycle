import OrderItem from "../entity/order_item";
import Order from "../entity/order";
import OrderService from "./order.service";
import Customer from "../../customer/entity/customer";

describe ("Order service unit test", () => {

  it ("should place an order",() => {

    const customer = new Customer("1", "Customer 1");

    const item1 = new OrderItem("i1", "Item 1", 10, "p1", 1);

    const order = OrderService.placeOrder(customer, [item1]);

    expect(customer.rewardPoints).toBe(5);
    expect(order.total()).toBe(10);
    
    
});



    it ("should get total of all orders",() => {
        const item1 = new OrderItem("i1", "Item 1", 100, "p1", 1);
        const item2 = new OrderItem("i1", "Item 1", 200, "p2", 2);

        const order = new Order("01", "c1", [item1]);
        const order2 = new Order("02", "c1", [item2]);

        const total = OrderService.total([order, order2]);

        expect(total).toBe(500);
  });
});