import { Component } from '@angular/core';
import { PersonajesService } from './personajes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  personajes: any[];
  pagActual: number = 1;
  cantPages: number;


  constructor(private personajesService: PersonajesService) {
    
  }

  ngOnInit() {
    this.personajesService.getAll()
      .then(response => {
        this.personajes = response['results']
        this.cantPages = response['info'].pages;
      })
      .catch(error => console.log(error));
  }

  onClickSig() {
    this.pagActual++;
    this.personajesService.getAll(this.pagActual)
      .then(response => this.personajes = response['results'])
      .catch(error => console.log(error));
  }

  onClickAnt() {
    this.pagActual--;
    this.personajesService.getAll(this.pagActual)
      .then(response => this.personajes = response['results'])
      .catch(error => console.log(error));
  }

}
