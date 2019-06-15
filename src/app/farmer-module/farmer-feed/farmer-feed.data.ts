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
  id: string;
  marketPrice: number;
  labelKey: string;
  visible?: boolean;
  image: string;
  price: number;
  label: string;
  type: number;
  constructor(
    id: string,
    marketPrice: number,
    labelKey: string,
    image: string,
    price: number,
    label: string,
    type: number,
    visible?: boolean
  ) {
    this.id = id;
    this.marketPrice = marketPrice;
    this.labelKey = labelKey;
    this.label = label;
    this.image = image;
    this.price = price;
    this.type = type;
    this.visible = visible;
  }
}

export interface IAddedItem {
  vegetable: IVegetables;
  price: number;
  quantity: number;
}

export class AddedItem implements IAddedItem {
  vegetable: Vegetables;
  price: number;
  quantity: number;
  constructor(vegetable: Vegetables, price: number, quantity: number) {
    this.vegetable = vegetable;
    this.price = price;
    this.quantity = quantity;
  }
}
