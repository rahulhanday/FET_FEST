import { Component, OnInit } from '@angular/core';
import { IVegetables } from './farmer-feed.data';
import { FarmerFeedService } from './farmer-feed.service';

@Component({
  selector: 'app-farmer-feed',
  templateUrl: './farmer-feed.component.html',
  styleUrls: ['./farmer-feed.component.scss']
})
export class FarmerFeedComponent implements OnInit {
  vegetables: Array<IVegetables>;
  vegModel: IVegetables;
  price: number;
  quantity: number;
  constructor(private farmerFeedService: FarmerFeedService) {}

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
}
