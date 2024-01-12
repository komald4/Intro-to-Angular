import { Component } from '@angular/core';
import { FormsModule, FormGroup, FormControl, ReactiveFormsModule, Validators, FormArray } from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  isSpecial = false;
  form = new FormGroup({
    firstName: new FormControl('Komal', [Validators.required]),
    lastName: new FormControl('Dindiyal'),
    pet: new FormControl(''),
    age: new FormControl(''),
    hobbies:new FormGroup({
      coding:new FormControl(false),
      travelling:new FormControl(false),
      reading:new FormControl(false)
    })
  });
//get is a property, not a function
//accessor; trying to access something from this property
  get coding():FormControl{
    if(this.form.get('hobbies')){
      return (this.form.get('hobbies') as FormGroup).get('coding') as FormControl
    }
    return new FormControl('')
  }

  get travelling():FormControl{
       if(this.form.get('hobbies')){
      return (this.form.get('hobbies') as FormGroup).get('travelling') as FormControl
    }
    return new FormControl('')
  }

  get reading():FormControl{
    if(this.form.get('hobbies')){
      return (this.form.get('hobbies') as FormGroup).get('reading') as FormControl
    }
    return new FormControl('')
  }

  toggle(){
    this.isSpecial=!this.isSpecial
  };

  submit(){
    
    console.log(this.form)
    console.log(this.form.value)
  }

  fillSubmit(){
    this.form.setValue({
      firstName: "Tom",
      lastName: "Harry",
      pet: '',
      age: '',
      hobbies:{
        reading:false,
        coding:false,
        travelling:false
      }
    })
  }
}

//form group
//patch value -- does not have to update every value
//set value -- have to provide every value the form has