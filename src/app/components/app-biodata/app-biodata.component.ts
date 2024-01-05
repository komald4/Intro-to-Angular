import { Component } from '@angular/core';

@Component({
  selector: 'app-biodata',
  standalone: true,
  imports: [],
  templateUrl: './app-biodata.component.html',
  styleUrl: './app-biodata.component.css'
})
export class AppBiodataComponent {
  name = "Komal";
  email = "komal@gmail.com";
  age = "30";

  Save(){
    this.name=`--${this.name}`
    this.email=`--${this.email}`
    this.age=`--${this.age}`
  }
}
