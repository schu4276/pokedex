import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] =[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getPokemon()
    .subscribe((response: any) => {
      response.results.forEach(result=>{
        this.dataService.getPokemonDetails(result.name)
        .subscribe((detailResponse: any) =>
        this.pokemons.push(detailResponse));
      });
    });
    console.log(this.pokemons);
  }

}
