import { DropdownModule } from 'primeng/dropdown';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientePesquisaComponent } from './cliente-pesquisa/cliente-pesquisa.component';
import { ClienteCadastroComponent } from './cliente-cadastro/cliente-cadastro.component';

@NgModule({
  declarations: [ClientePesquisaComponent, ClienteCadastroComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    DropdownModule
  ]
})
export class ClientesModule { }
