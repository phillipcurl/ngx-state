import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { APP_SERVICES } from './services';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ...APP_SERVICES
  ],
  exports: []
})
export class NgxStateModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxStateModule
    };
  }

}