import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isMenuOpen = false;

  // ouvrir/fermer menu burger
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // fermer menu au clic sur un lien
  closeMenu() {
    this.isMenuOpen = false;
  }
}
