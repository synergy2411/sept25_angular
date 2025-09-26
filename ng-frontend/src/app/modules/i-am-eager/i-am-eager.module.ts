import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EagerComponent } from './components/eager/eager.component';

@NgModule({
  declarations: [EagerComponent],
  imports: [CommonModule],
  exports: [EagerComponent],
})
export class IAmEagerModule {}
