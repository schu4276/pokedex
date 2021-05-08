import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../items/item';

@Component({
  selector: 'app-items-card',
  templateUrl: './items-card.component.html',
  styleUrls: ['./items-card.component.scss']
})
export class ItemsCardComponent implements OnInit {
  @Input() item: Item;

  constructor() { }

  ngOnInit(): void {
  }


}
