import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  pokeUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  getPokemon(){
    return this.http.get(this.pokeUrl+`?limit=10`);
  }

  getPokemonDetails(name: string){
    return this.http.get(this.pokeUrl+`/${name}`);
  }
}
