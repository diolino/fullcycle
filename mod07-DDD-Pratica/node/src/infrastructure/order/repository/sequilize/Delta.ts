import OrderItemModel from "./order-item.model";

export default class Order {
  private _added: OrderItemModel[];
  private _changed: OrderItemModel[];
  private _deleted: OrderItemModel[];
  

  constructor(added: OrderItemModel[], changed: OrderItemModel[], deleted: OrderItemModel[]) {
    this._added = added;
    this._changed = changed;
    this._deleted = deleted;    
  }

  get added(): OrderItemModel[] {
    return this._added;
  }

  get changed(): OrderItemModel[] {
    return this._changed;
  }

  get deleted(): OrderItemModel[] {
    return this._deleted;
  }
 }
