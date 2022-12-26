import EventHandlerInterface from "../../@shared/event-handler.interface";
import CustomerCreatedEvent from "../customer-created.event";

export default class SendConsoleLog1WhenCustomerIsCreated
  implements EventHandlerInterface<CustomerCreatedEvent>
{
  handle(event: CustomerCreatedEvent): void {
    console.log(`Esse é o PRIMEIRO console.log do evento: CustomerCreated`); //poderia enviar, por exemplo, para o RabbitMq
  }
}
