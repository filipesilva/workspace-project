import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibComponent } from './lib.component';
import { LibService } from './lib.service';

@NgModule({
  imports: [CommonModule],
  declarations: [LibComponent],
  exports: [LibComponent]
})
export class LibModule { }
