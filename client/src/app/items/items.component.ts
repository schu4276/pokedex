import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  items: any[]=[];
  public itemName: string;
  public filteredItems: any[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getItems()
    .subscribe((response: any) => {
      response.results.forEach(result=>{
        this.dataService.getItemDetails(result.name)
        .subscribe((detailResponse: any) =>
        this.items.push(detailResponse));
        this.updateFilter();
      });
    });
  }

  public updateFilter(){
    this.filteredItems = this.dataService.filterItems( this.items,
       {name: this.itemName});
  }


}
