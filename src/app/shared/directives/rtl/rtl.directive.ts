import {Directive, ElementRef, Renderer2} from '@angular/core';
import { TranslationService } from 'src/app/core/services/translation/translation.service';

@Directive({
  selector: '[setRtl]'
})
export class RtlDirective {

  constructor(private renderer: Renderer2, private translation: TranslationService) {
    this.switchClassBasedOnLanguage();
  }

  /*Switch rtl class based on the chosen language from Translation Service*/
  switchClassBasedOnLanguage() {
    this.translation.currentLanguage$.subscribe(lang => {
      if (lang === 'ar') {
        this.renderer.setAttribute(document.body, 'dir', 'rtl');
        this.renderer.addClass(document.body, 'rtl');
        this.renderer.removeClass(document.body, 'ltr');

      } else {
        this.renderer.setAttribute(document.body, 'dir', 'ltr');
        this.renderer.addClass(document.body, 'ltr');
        this.renderer.removeClass(document.body, 'rtl');

      }
    });
  }
}
