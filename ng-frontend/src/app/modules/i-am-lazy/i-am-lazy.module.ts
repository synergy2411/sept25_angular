import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyComponent } from './components/lazy/lazy.component';

const LAZY_ROUTE: Routes = [
  {
    path: '', // http://localhost:4200/lazy
    component: LazyComponent,
  },
];

@NgModule({
  declarations: [LazyComponent],
  imports: [CommonModule, RouterModule.forChild(LAZY_ROUTE)],
})
export class IAmLazyModule {}
