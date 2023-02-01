import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Componente1Component } from './componente1/componente1.component';
import { Componente2Component } from './componente2/componente2.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Componente1Component,
    Componente2Component
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[
    Componente1Component,
    Componente2Component
  ]
})
export class PrincipalModule { }
