import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { Pokemon } from '../pokemon-card/pokemon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  pokeUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  getPokemon(){
    return this.http.get(this.pokeUrl+`?limit=300`);
  }

  getPokemonDetails(name: string){
    return this.http.get(this.pokeUrl+`/${name}`);
  }

  getPokemonByName(name: string): Observable<Pokemon>{
    return this.http.get<Pokemon>(this.pokeUrl+'/'+name);
  }

}
