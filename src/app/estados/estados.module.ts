import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadoPesquisaComponent } from './estado-pesquisa/estado-pesquisa.component';
import { EstadoCadastroComponent } from './estado-cadastro/estado-cadastro.component';



@NgModule({
  declarations: [EstadoPesquisaComponent, EstadoCadastroComponent],
  exports: [
    EstadoPesquisaComponent
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
export class EstadosModule { }
