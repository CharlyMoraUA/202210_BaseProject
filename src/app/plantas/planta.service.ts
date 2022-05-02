import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Planta } from './planta';

@Injectable({
  providedIn: 'root'
})
export class PlantaService {

  private apiUrl: string = environment.baseUrl
  
  constructor(private http: HttpClient) { }

  getPlants(): Observable<Planta[]>{
    return this.http.get<Planta[]>(this.apiUrl)
  }
}
