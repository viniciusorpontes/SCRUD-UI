import { LazyLoadEvent } from 'primeng/api/public_api';
import { ClienteFiltro, ClienteService } from './../cliente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-pesquisa',
  templateUrl: './cliente-pesquisa.component.html',
  styleUrls: ['./cliente-pesquisa.component.css']
})
export class ClientePesquisaComponent implements OnInit {

  totalRegistros = 0;
  filtro = new ClienteFiltro();
  clientes = [];

  constructor(private clienteService : ClienteService) { } 

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.clienteService.pesquisar(this.filtro)
    .then(resultado => {
      this.totalRegistros = resultado.total;
      this.clientes = resultado.clientes;
    });
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  excluir(cliente: any) {
    this.clienteService.excluir(cliente.id).then(() =>this.pesquisar());
  }

}
