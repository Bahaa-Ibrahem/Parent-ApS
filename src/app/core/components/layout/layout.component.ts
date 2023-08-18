import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../../services/translation/translation.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  currentLang = '';
  constructor(private translationService: TranslationService) { }

  ngOnInit(): void { 
    this.translationService.currentLanguage$.subscribe(currentLanguage => this.currentLang = currentLanguage);
  }

}
