import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibComponent } from './lib.component';
import { LibService } from './lib.service';

@NgModule({
  imports: [CommonModule],
  declarations: [LibComponent],
  providers: [LibService],
  exports: [LibComponent]
})
export class LibModule {
  // TODO: is forRoot needed?
  // public static forRoot(): ModuleWithProviders {
  //   return {
  //     ngModule: LibModule,
  //     providers: [LibService]
  //   };
  // }
}
