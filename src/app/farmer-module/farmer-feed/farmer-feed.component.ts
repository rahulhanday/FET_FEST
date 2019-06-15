import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  IVegetables,
  Vegetables,
  IAddedItem,
  AddedItem
} from './farmer-feed.data';
import { FarmerFeedService } from './farmer-feed.service';

@Component({
  selector: 'app-farmer-feed',
  templateUrl: './farmer-feed.component.html',
  styleUrls: ['./farmer-feed.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FarmerFeedComponent implements OnInit {
  vegetables: Array<IVegetables>;
  vegModel: IVegetables;
  price: number;
  quantity: number;
  addedVeg: Array<IAddedItem>;

  /**
   * Creates an instance of farmer feed component.
   */
  constructor(private farmerFeedService: FarmerFeedService) {
    this.vegModel = new Vegetables(
      null,
      null,
      'label_select_vegetable',
      null,
      null,
      'Select Vegetable',
      null,
      true
    );
    this.addedVeg = [];
  }

  /**
   * on init
   */
  ngOnInit() {
    // this.farmerFeedService.getVegetables()
    this.vegetables = [
      {
        id: 'p1',
        label: 'Tomato',
        labelKey: 'label_tomato',
        type: 1,
        price: 27,
        marketPrice: 35,
        image: '../../assets/images/tomato.jpg'
      },
      {
        id: 'p2',
        label: 'Potato',
        labelKey: 'label_potato',
        type: 1,
        price: 18,
        marketPrice: 23,
        image: '../../assets/images/potato.jpg'
      },
      {
        id: 'p3',
        label: 'Onion',
        labelKey: 'label_onion',
        type: 1,
        price: 20,
        marketPrice: 30,
        image: '../../assets/images/onion.jpg'
      },
      {
        id: 'p4',
        label: 'Apple',
        labelKey: 'label_apple',
        type: 2,
        price: 105,
        marketPrice: 140,
        image: '../../assets/images/apple.jpg'
      },
      {
        id: 'p4',
        label: 'Mango - Alphanso',
        labelKey: 'label_mango_alphanso',
        type: 2,
        price: 145,
        marketPrice: 180,
        image: '../../assets/images/mango.jpg'
      }
    ];
  }

  /**
   * Shows hide veg
   */
  showHideVeg(veg: IVegetables, ident: boolean) {
    this.vegetables.map(vegetable => {
      if (vegetable.id === veg.id) {
        vegetable.visible = ident;
      }
    });
  }

  /**
   * Selects vegetable
   */
  selectVegetable(veg: IVegetables) {
    this.vegModel = veg;
  }

  /**
   * Resets farmer feed component
   */
  reset() {
    this.price = null;
    this.quantity = null;
    this.vegModel = new Vegetables(
      null,
      null,
      'label_select_vegetable',
      null,
      null,
      'Select Vegetable',
      null,
      true
    );
  }

  /**
   * Adds vegetable
   */
  addVegetable() {
    const item: IAddedItem = new AddedItem(
      this.vegModel,
      this.price * this.quantity,
      this.quantity
    );
    this.addedVeg.push(item);
    this.showHideVeg(this.vegModel, false);
    this.reset();
  }

  /**
   * Removes item
   */
  removeItem(index: number) {
    const item = this.addedVeg[index].vegetable;
    this.showHideVeg(item, true);
    this.addedVeg.splice(index, 1);
  }
}
