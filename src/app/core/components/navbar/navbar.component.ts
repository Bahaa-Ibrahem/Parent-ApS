import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TranslationService } from '../../services/translation/translation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {
  collaped = false;
  currentLang = '';

  constructor(private translationService: TranslationService) { }

  ngOnInit(): void {

    this.translationService.currentLanguage$.subscribe(currentLanguage => this.currentLang = currentLanguage);
  }

  closeMenu() {
    if (innerWidth <= 1280) {
      this.collaped = false;
    }
  }

  changeLanguage() {
    this.translationService.changeLanguage();
  }

  logout() {
    localStorage.clear();
  }
}