import { Component } from '@angular/core';
import {CommonModule } from "@angular/common";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hola Mundosss Angular';
  enabled: boolean = false;

  courses: string[] = ['Angular', 'React' , 'SpringBoot']


  setEnabled(): void{
    this.enabled = this.enabled? false : true;
    console.log('Hemos hecho click en setEnabled ');
  }
}
