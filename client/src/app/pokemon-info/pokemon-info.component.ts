import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Pokemon } from '../pokemon-card/pokemon';
import { DataService } from '../services/data.service';
import {MatButtonModule} from '@angular/material/button';

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

    upper(word: string) {
      return word[0].toUpperCase()+word.substring(1);
    }

    ngOnDestroy(): void {
      if (this.getPokemonSub) {
        this.getPokemonSub.unsubscribe();
      }

  }

}
