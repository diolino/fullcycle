import SendConsoleLog1WhenCustomerIsCreated from "./handler/send_console_log1_when_customer_is_created.handler1.mensagem";
import SendConsoleLog2WhenCustomerIsCreated from "./handler/send_console_log2_when_customer_is_created.handler2.mensagem";
import CustomerCreatedEvent from "./customer-created.event";
import EventDispatcher from "../../@shared/event/event-dispatcher";
import SendConsoleLogWhenCustomerAdressIsChanged from "./handler/send_console_log_when_customer_address_is_changed.handler.mensagem";
import CustomerAddressChangedEvent from "./customer-adress_changed.event";
import Customer from "../entity/customer";
import Address from "../value-object/address";

describe("Customer Domain events tests", () => {

  it("should register two customer event handlers", () => {
    const eventDispatcher = new EventDispatcher();

    const createdEventHandler1 = new SendConsoleLog1WhenCustomerIsCreated();
    const createdEventHandler2 = new SendConsoleLog2WhenCustomerIsCreated();
    const addressChangedEventHandler = new SendConsoleLogWhenCustomerAdressIsChanged();

    eventDispatcher.register("CustomerCreatedEvent", createdEventHandler1);
    eventDispatcher.register("CustomerCreatedEvent", createdEventHandler2);
    eventDispatcher.register("CustomerAddressChangedEvent", addressChangedEventHandler);

    expect(
      eventDispatcher.getEventHandlers["CustomerCreatedEvent"]
    ).toBeDefined();

    expect(
      eventDispatcher.getEventHandlers["CustomerAddressChangedEvent"]
    ).toBeDefined();


    expect(eventDispatcher.getEventHandlers["CustomerCreatedEvent"].length).toBe(
      2
    );

    expect(eventDispatcher.getEventHandlers["CustomerAddressChangedEvent"].length).toBe(
      1
    );

    expect(
      eventDispatcher.getEventHandlers["CustomerCreatedEvent"][0]
    ).toMatchObject(createdEventHandler1);

    expect(
      eventDispatcher.getEventHandlers["CustomerCreatedEvent"][1]
    ).toMatchObject(createdEventHandler2);

    expect(
      eventDispatcher.getEventHandlers["CustomerAddressChangedEvent"][0]
    ).toMatchObject(addressChangedEventHandler);

  });

  it("should unregister three customer event handler", () => {
    const eventDispatcher = new EventDispatcher();

    const createdEventHandler1 = new SendConsoleLog1WhenCustomerIsCreated();
    const createdEventHandler2 = new SendConsoleLog2WhenCustomerIsCreated();
    const addressChangedEventHandler = new SendConsoleLogWhenCustomerAdressIsChanged();

    eventDispatcher.register("CustomerCreatedEvent", createdEventHandler1);
    eventDispatcher.register("CustomerCreatedEvent", createdEventHandler2);
    eventDispatcher.register("CustomerAddressChangedEvent", addressChangedEventHandler);

    expect(
      eventDispatcher.getEventHandlers["CustomerCreatedEvent"]
    ).toBeDefined();

    expect(
      eventDispatcher.getEventHandlers["CustomerAddressChangedEvent"]
    ).toBeDefined();


    expect(eventDispatcher.getEventHandlers["CustomerCreatedEvent"].length).toBe(
      2
    );

    expect(eventDispatcher.getEventHandlers["CustomerAddressChangedEvent"].length).toBe(
      1
    );

    expect(
      eventDispatcher.getEventHandlers["CustomerCreatedEvent"][0]
    ).toMatchObject(createdEventHandler1);

    expect(
      eventDispatcher.getEventHandlers["CustomerCreatedEvent"][1]
    ).toMatchObject(createdEventHandler2);

    expect(
      eventDispatcher.getEventHandlers["CustomerAddressChangedEvent"][0]
    ).toMatchObject(addressChangedEventHandler);


    eventDispatcher.unregister("CustomerCreatedEvent", createdEventHandler1);
    eventDispatcher.unregister("CustomerCreatedEvent", createdEventHandler2);
    eventDispatcher.unregister("CustomerAddressChangedEvent", addressChangedEventHandler);

    expect(
      eventDispatcher.getEventHandlers["CustomerCreatedEvent"]
    ).toBeDefined();
    expect(eventDispatcher.getEventHandlers["CustomerCreatedEvent"].length).toBe(
      0
    );
    
    expect(
      eventDispatcher.getEventHandlers["CustomerAddressChangedEvent"]
    ).toBeDefined();
    expect(eventDispatcher.getEventHandlers["CustomerAddressChangedEvent"].length).toBe(
      0
    );


  });
  
  it("should unregister all customer event handlers", () => {
    const eventDispatcher = new EventDispatcher();

    const createdEventHandler1 = new SendConsoleLog1WhenCustomerIsCreated();
    const createdEventHandler2 = new SendConsoleLog2WhenCustomerIsCreated();
    const addressChangedEventHandler = new SendConsoleLogWhenCustomerAdressIsChanged();

    eventDispatcher.register("CustomerCreatedEvent", createdEventHandler1);
    eventDispatcher.register("CustomerCreatedEvent", createdEventHandler2);
    eventDispatcher.register("CustomerAddressChangedEvent", addressChangedEventHandler);

    expect(
      eventDispatcher.getEventHandlers["CustomerCreatedEvent"]
    ).toBeDefined();

    expect(
      eventDispatcher.getEventHandlers["CustomerAddressChangedEvent"]
    ).toBeDefined();


    expect(eventDispatcher.getEventHandlers["CustomerCreatedEvent"].length).toBe(
      2
    );

    expect(eventDispatcher.getEventHandlers["CustomerAddressChangedEvent"].length).toBe(
      1
    );

    expect(
      eventDispatcher.getEventHandlers["CustomerCreatedEvent"][0]
    ).toMatchObject(createdEventHandler1);

    expect(
      eventDispatcher.getEventHandlers["CustomerCreatedEvent"][1]
    ).toMatchObject(createdEventHandler2);

    expect(
      eventDispatcher.getEventHandlers["CustomerAddressChangedEvent"][0]
    ).toMatchObject(addressChangedEventHandler);

    eventDispatcher.unregisterAll();

    expect(
      eventDispatcher.getEventHandlers["CustomerCreatedEvent"]
    ).toBeUndefined();

    expect(
      eventDispatcher.getEventHandlers["CustomerAddressChangedEvent"]
    ).toBeUndefined();

  });

  it("should notify all event handlers", () => {
    const eventDispatcher = new EventDispatcher();

    const createdEventHandler1 = new SendConsoleLog1WhenCustomerIsCreated();
    const createdEventHandler2 = new SendConsoleLog2WhenCustomerIsCreated();
    const addressChangedEventHandler = new SendConsoleLogWhenCustomerAdressIsChanged();

    eventDispatcher.register("CustomerCreatedEvent", createdEventHandler1);
    eventDispatcher.register("CustomerCreatedEvent", createdEventHandler2);
    eventDispatcher.register("CustomerAddressChangedEvent", addressChangedEventHandler);

    const spyCreatedEventHandler1 = jest.spyOn(createdEventHandler1, "handle");//espia se o método de "handle" do "eventHandler1" foi chamado 
    const spyCreatedEventHandler2 = jest.spyOn(createdEventHandler2, "handle");//espia se o método de "handle" do "eventHandler2" foi chamado 
    const spyAddressChangedEventHandler3 = jest.spyOn(addressChangedEventHandler, "handle");//espia se o método de "handle" do "eventHandler2" foi chamado 

    expect(
      eventDispatcher.getEventHandlers["CustomerCreatedEvent"]
    ).toBeDefined();

    expect(
      eventDispatcher.getEventHandlers["CustomerAddressChangedEvent"]
    ).toBeDefined();


    expect(eventDispatcher.getEventHandlers["CustomerCreatedEvent"].length).toBe(
      2
    );

    expect(eventDispatcher.getEventHandlers["CustomerAddressChangedEvent"].length).toBe(
      1
    );

    expect(
      eventDispatcher.getEventHandlers["CustomerCreatedEvent"][0]
    ).toMatchObject(createdEventHandler1);

    expect(
      eventDispatcher.getEventHandlers["CustomerCreatedEvent"][1]
    ).toMatchObject(createdEventHandler2);

    expect(
      eventDispatcher.getEventHandlers["CustomerAddressChangedEvent"][0]
    ).toMatchObject(addressChangedEventHandler);

    const customerCreatedEvent = new CustomerCreatedEvent({
      name: "CustomerCreatedEvent",
      id: "a1d3",
      endereco: "Rua das margaridas, número 51"
    });

    var customer = new Customer("id123", "Chica da Silva");
    var address = new Address("Rua das flores", 123, "7000000", "Brasília");
    customer.changeAddress(address);

    const customerAdressChangedEvent = new CustomerAddressChangedEvent(customer);

    eventDispatcher.notify(customerCreatedEvent);
    eventDispatcher.notify(customerAdressChangedEvent);

    expect(spyCreatedEventHandler1).toHaveBeenCalled();
    expect(spyCreatedEventHandler2).toHaveBeenCalled();
    expect(spyAddressChangedEventHandler3).toHaveBeenCalled();
  });
});
