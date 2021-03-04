import { stringify } from "@angular/compiler/src/util";
import { Url } from "url";

export interface Pokemon {
  name: string;
  sprites: Url;
  types: Types[];
}

class Types{
  type: Type;
  name: string;

}

class Type{
  name: string;
}

