import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  IVegetables,
  Vegetables,
  IAddedItem,
  AddedItem
} from './farmer-feed.data';
import { FarmerFeedService } from './farmer-feed.service';
import { IContext } from 'src/app/shared-module/shared.model';

@Component({
  selector: 'app-farmer-feed',
  templateUrl: './farmer-feed.component.html',
  styleUrls: ['./farmer-feed.component.scss'],
  providers: [FarmerFeedService],
  encapsulation: ViewEncapsulation.None
})
export class FarmerFeedComponent implements OnInit {
  vegetables: Array<IVegetables>;
  vegModel: IVegetables;
  price: number;
  quantity: number;
  addedVeg: Array<IAddedItem>;
  farmerCity: IContext;
  farmerModel;

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
    this.farmerFeedService
      .getVegetables()
      .subscribe((data: Array<IVegetables>) => {
        this.vegetables = data;
        this.vegetables.map(veg => {
          veg.visible = true;
        });
      });

    this.farmerCity = this.farmerFeedService.getCity();
    if (this.farmerCity) {
      this.farmerModel = this.farmerCity.cityToSell[0];
    }
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
      this.price,
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
