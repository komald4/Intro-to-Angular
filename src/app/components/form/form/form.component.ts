import { Component } from '@angular/core';
import { FormsModule, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  form = new FormGroup({
    firstName: new FormControl('Komal', [Validators.required]),
    lastName: new FormControl('Dindiyal'),
  });

  submit(){
    console.log(this.form)
    console.log(this.form.value)
  }

  fillSubmit(){
    this.form.setValue({
      firstName: "Tom",
      lastName: "Harry"
    })
  }
}

//form group
//patch value -- does not have to update every value
//set value -- have to provide every value the form has