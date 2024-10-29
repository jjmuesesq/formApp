import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';

const rtx5090 = {
  name: 'RTX5090',
  price: 2500,
  inStorage: 6
};

@Component({
  templateUrl: './basic-page.component.html',
  styles: ``
})
export class BasicPageComponent implements OnInit {

  constructor( private fb: FormBuilder ){}

  ngOnInit(): void {
    //this.myForm.reset( rtx5090 );
  }

  /*public myForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(0),
    inStorage: new FormControl(0),
  })*/

  // formulario con builder
  public myForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.minLength(3)]], //validaciones(1 o varias en un arreglo)
    price: [0, [ Validators.required, Validators.min(0)]],
    inStorage: [0, [ Validators.required, Validators.min(0)]],
  })

  onSave():void {
    if ( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();//dispara las validaciones al postear el formulario
      return;
    }
    console.log(this.myForm.value);
    this.myForm.reset({ name:'', price: 0, inStorage: 0 });
  }

}
