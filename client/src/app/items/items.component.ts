import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  items: any[]=[];
  filteredItems: any[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(){
    this.dataService.getItems()
    .subscribe((response: any) => {
      response.results.forEach(result=>{
       this.items.push(result.name);
      });
    });

  }


}
