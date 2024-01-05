import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AppButtonComponent } from './components/app-button/app-button.component';
import { AppBiodataComponent } from './components/app-biodata/app-biodata.component';
import { FormComponent } from './components/form/form/form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AppButtonComponent, AppBiodataComponent, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'App';
  disabled = false;
}
