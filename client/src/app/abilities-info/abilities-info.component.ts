import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Ability } from '../abilities-list/ability';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-abilities-info',
  templateUrl: './abilities-info.component.html',
  styleUrls: ['./abilities-info.component.scss']
})
export class AbilitiesInfoComponent implements OnInit {
  name: string;
  ability: any;
  getAbilitySub: Subscription;
  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((pmap)=>{
      this.name = pmap.get('name');
      if(this.getAbilitySub){
        this.getAbilitySub.unsubscribe();
      }
      this.getAbilitySub = this.dataService.getAbilityInfo(this.name)
      .subscribe(ability =>  this.ability = ability);

    });
  }



}
