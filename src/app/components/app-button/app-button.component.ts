import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './app-button.component.html',
  styleUrl: './app-button.component.css'
})
export class AppButtonComponent {
  @Input() label: string;
  @Input() disabled: boolean = false;
  //component life cycle
  constructor() {
    console.log("Constructor got called")
    this.label = ''
  }
  //initialize component
  ngOnInit() {
    console.log("ngOnInit")
    console.log(this.disabled)
  }
  PressMe(button: number){
    console.log(`${button} Clicked`)
  }
  blur(){
    console.log("Blur")
  }

}
