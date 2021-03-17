import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Pokemon } from '../pokemon-card/pokemon';
import { DataService } from '../services/data.service';
import {MatButtonModule} from '@angular/material/button';
import { ArrayDataSource } from '@angular/cdk/collections';


@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.scss']
})
export class PokemonInfoComponent implements OnInit, OnDestroy {


  pokemon: any;
  name: string;
  getPokemonSub: Subscription;

  constructor(private dataService: DataService, private route: ActivatedRoute,) { }

    ngOnInit(): void {
      // We subscribe to the parameter map here so we'll be notified whenever
      // that changes (i.e., when the URL changes) so this component will update
      // to display the newly requested Pokemon.
      this.route.paramMap.subscribe((pmap) => {
        this.name = pmap.get('name');
        if (this.getPokemonSub) {
          this.getPokemonSub.unsubscribe();
        }
        this.getPokemonSub = this.dataService.getPokemonDetails(this.name).subscribe(pokemon => this.pokemon = pokemon);
      });
    }

    getType(pokemon) {
      return this.pokemon.types[0].type.name[0] + this.pokemon.types[0].type.name.substring(1);
    }
    getAbilities(){
      const abilities: any =[];
      // eslint-disable-next-line @typescript-eslint/prefer-for-of
      for(let i=0; i< this.pokemon.abilities.length; i++){
        abilities.push(this.pokemon.abilities[i].ability.name);
      }
      return abilities;
    }
    getForms(){
      const forms: any =[];
      const formArray = this.pokemon.forms;
      for(const form of formArray ){
        forms.push(form.name);
      }
      return forms;
    }
    getStats(){
      const statMap = new Map();
      const statArray = this.pokemon.stats;
      for(const stat of statArray ){
        statMap.set(stat.stat.name, stat.base_stat);
      }
      return statMap;
    }

    upper(word: string) {
      return word[0].toUpperCase()+word.substring(1);
    }

    ngOnDestroy(): void {
      if (this.getPokemonSub) {
        this.getPokemonSub.unsubscribe();
      }

  }

}
