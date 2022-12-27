import EventHandlerInterface from "../../../@shared/event/event-handler.interface";
import CustomerCreatedEvent from "../customer-created.event";

export default class SendConsoleLog2WhenCustomerIsCreated
  implements EventHandlerInterface<CustomerCreatedEvent>
{
  handle(event: CustomerCreatedEvent): void {
    console.log(`Esse é o SEGUNDO console.log do evento: CustomerCreated`); //poderia enviar, por exemplo, para o RabbitMq
  }
}
