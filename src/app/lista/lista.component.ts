import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  contatti = [
  {nome:"Anna",cognome:"Ciao"},
  {nome:"Chiara",cognome:"Hallo"},
  {nome:"alessia",cognome:"Hola"}];
  constructor() { }

  ngOnInit() {
  }

}
