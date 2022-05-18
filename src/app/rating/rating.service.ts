import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private httpClient:HttpClient) { }
  apiURL=environment.apiURL+'rating';

  rate(peliculaId:number, puntuacion:number){

    return this.httpClient.post(this.apiURL,{peliculaId,puntuacion});
  }
}
