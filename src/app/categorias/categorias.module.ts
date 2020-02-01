import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaPesquisaComponent } from './categoria-pesquisa/categoria-pesquisa.component';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CategoriaCadastroComponent } from './categoria-cadastro/categoria-cadastro.component';

@NgModule({
  declarations: [CategoriaPesquisaComponent, CategoriaCadastroComponent],
  exports: [
    CategoriaPesquisaComponent
  ],
  imports: [
    CommonModule, 
    RouterModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule
  ]
})
export class CategoriasModule { }
