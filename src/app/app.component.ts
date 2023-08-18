import { Component, OnInit, Renderer2 } from '@angular/core';
import { LoadingService } from './core/services/loading/loading.service';
import { TranslationService } from './core/services/translation/translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  show = false;

  constructor(private loading: LoadingService, private render: Renderer2) { }

  ngOnInit(): void {
    this.render.setAttribute(document.body, 'dir', 'ltr');
    this.render.addClass(document.body, 'ltr');

    // this.render.removeClass(document.body, 'rtl');

    this.loading.isLoading.subscribe(isLoading => {
      setTimeout(() => {
        this.show = isLoading;
      });
    });
  }
}
