import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    HeaderComponent],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  constructor() { }

}
