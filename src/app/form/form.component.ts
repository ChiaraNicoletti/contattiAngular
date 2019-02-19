import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  mioForm: FormGroup;
   ngOnInit(): void {
     this.mioForm = new FormGroup({
       'name': new FormControl('', [
        Validators.required,
        Validators.minLength(2)]),
       'cognome': new FormControl('',
       [Validators.required,
          Validators.minLength(2)]),
       'citta': new FormControl('',
       [Validators.required,
          Validators.minLength(2)]),
        'email':new FormControl('',
        [Validators.required, Validators.email]),
     });
   }
   get name() { return this.mioForm.get('name'); }
   get cognome() { return this.mioForm.get('cognome'); }
   get citta() { return this.mioForm.get('citta'); }
   get email() { return this.mioForm.get('email'); }

   print() {
     console.log(this.mioForm.value); }

 }
