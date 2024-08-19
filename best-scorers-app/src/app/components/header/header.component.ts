import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ CommonModule],
  providers: [Router],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  constructor(private router: Router) { }

  toggleMenu() {
    
    const navList = document.getElementById('nav-list-of-header-items');
    
    if(!navList) {
      return;
    }

    let isNavOpen = navList.classList.contains('open');

    if(isNavOpen)
    {
      navList.classList.remove('open');
    }
    else
    {
      navList.classList.toggle('open');
      navList.style.transition = 'width 1s';
    }
  
  }

  closeMenuIfIsOpen() {
    const navList = document.getElementById('nav-list-of-header-items');

    if(!navList) {
      return;
    }

    navList.classList.remove('open');
    navList.style.transition = 'width 2s';
  }

  goToBestPlayers() {
    this.router.navigate(['/bestPlayers']);
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

}
