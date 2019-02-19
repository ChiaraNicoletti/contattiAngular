import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  myForm: FormGroup;
   constructor() {
     this.myForm = new FormGroup({
       Nome: new FormControl(),
       Cognome: new FormControl(),
       citta: new FormControl(),
       data: new FormControl()
     });
   }
  ngOnInit() {
   }
 }
