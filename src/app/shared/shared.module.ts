import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './sub-modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgSelectModule } from '@ng-select/ng-select';

import { ClickOutSideDirective } from './directives/clickOutSide/click-out-side.directive';
import { RtlDirective } from './directives/rtl/rtl.directive';
import { SpecificLanguageValidatiorDirective } from './directives/validators/specific-language-validator/specific-language-validatior.directive';

import { ValidationHandlerPipe } from './pipes/validation-handler.pipe';

import { EmptyScreenComponent } from './components/empty-screen/empty-screen.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
    ValidationHandlerPipe,
    ClickOutSideDirective,
    RtlDirective,
    SpecificLanguageValidatiorDirective,
    LoadingComponent,
    EmptyScreenComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NgSelectModule,
    MaterialModule
  ],
  exports: [
    LoadingComponent,
    EmptyScreenComponent,
    ValidationHandlerPipe,
    ClickOutSideDirective,
    RtlDirective,
    SpecificLanguageValidatiorDirective,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule,
    TranslateModule,
    MaterialModule
  ]
})
export class SharedModule { }
