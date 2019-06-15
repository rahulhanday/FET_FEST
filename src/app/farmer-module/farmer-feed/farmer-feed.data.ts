export interface IVegetables {
  id: string;
  marketPrice: number;
  labelKey: string;
  visible?: boolean;
  image: string;
  price: number;
  label: string;
  type: number;
}

export class Vegetables implements IVegetables {
  constructor(
    id: string,
    marketPrice: number,
    labelKey: string,
    image: string,
    price: number,
    label: string,
    type: number,
    visible?: boolean
  ) {}
}

export interface IAddedItem {
  vegetable: Vegetables;
  price: number;
  quantity: number;
}

export class AddedItem implements AddedItem {
  vegetable: Vegetables;
  price: number;
  quantity: number;
  constructor(vegetable: Vegetables, price: number, quantity: number) {
    this.vegetable = vegetable;
    this.price = price;
    this.quantity = quantity;
  }
}
