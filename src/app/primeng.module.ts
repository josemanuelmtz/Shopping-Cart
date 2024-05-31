import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from 'primeng/toolbar';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { TooltipModule } from 'primeng/tooltip';
import { MenuModule } from 'primeng/menu';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';

// Módulos PrimeNg
const modPrime: any = [];

const modulosPrimeNG: any = [
  AvatarModule,
  ButtonModule,
  MenubarModule,
  ToolbarModule,
  TooltipModule, 
  MenuModule,
  CardModule,
  InputTextModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    modPrime,
    modulosPrimeNG
  ],
  exports:[
    modPrime,
    modulosPrimeNG
  ]
})
export class PrimengModule { }
