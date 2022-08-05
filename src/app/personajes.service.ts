import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  baseURL: string;

  constructor(private httpClient: HttpClient) { 
    this.baseURL = 'https://rickandmortyapi.com/api/character';
  }

  getAll(num:number = 1): Promise<any[]> {
    return this.httpClient.get<any[]>(`${this.baseURL}?page=${num}`).toPromise();
  }

  
}
