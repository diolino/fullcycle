import Customer from "../../../customer/entity/customer";
import EventHandlerInterface from "../../../@shared/event/event-handler.interface";
import CustomerAddressChangedEvent from "../customer-adress_changed.event";
import CustomerCreatedEvent from "../customer-created.event";

export default class SendConsoleLogWhenCustomerAdressIsChanged
  implements EventHandlerInterface<CustomerAddressChangedEvent>
{
  handle(event: CustomerAddressChangedEvent): void {
    const customer = event.eventData as Customer;


    //const nome = event.eventData.nome;
    //const endereco = event.eventData.endereco;
    //console.log(`Endereço do cliente: {id}, {nome} alterado para: {endereco}`); //poderia enviar, por exemplo, para o RabbitMq
    console.log(`Endereço do cliente alterado: ${customer.id}, ${customer.name} alterado para 
      ${customer.Address._street}, ${customer.Address._number}, ${customer.Address._city},${customer.Address._zip}`); //poderia enviar, por exemplo, para o RabbitMq
  }
}
