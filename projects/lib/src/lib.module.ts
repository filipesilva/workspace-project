import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LibComponent } from './lib.component';
import { LibService } from './lib.service';


@NgModule({
  imports: [CommonModule],
  declarations: [LibComponent],
  providers: [LibService],
  exports: [LibComponent]
})
export class LibModule { }
