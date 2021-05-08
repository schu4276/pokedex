import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Item } from '../items/item';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-items-detail',
  templateUrl: './items-detail.component.html',
  styleUrls: ['./items-detail.component.scss']
})
export class ItemsDetailComponent implements OnInit {

  item: any;
  name: string;
  getItemSub: Subscription;
  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((pmap) => {
      this.name = pmap.get('name');
      if (this.getItemSub) {
        this.getItemSub.unsubscribe();
      }
      this.getItemSub = this.dataService.getItemDetails(this.name).subscribe(item => this.item = item);
    });
  }

}
