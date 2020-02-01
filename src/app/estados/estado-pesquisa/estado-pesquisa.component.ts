import { EstadoFiltro, EstadoService } from './../estado.service';
import { Component, OnInit } from '@angular/core'
import { LazyLoadEvent } from 'primeng/api/public_api';

@Component({
  selector: 'app-estado-pesquisa',
  templateUrl: './estado-pesquisa.component.html',
  styleUrls: ['./estado-pesquisa.component.css']
})
export class EstadoPesquisaComponent implements OnInit {

  totalRegistros = 0;
  filtro = new EstadoFiltro();
  estados = [];

  constructor(private estadoService : EstadoService) { } 

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.estadoService.pesquisar(this.filtro)
    .then(resultado => {
      this.totalRegistros = resultado.total;
      this.estados = resultado.estados;
    });
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  excluir(estado: any) {
    this.estadoService.excluir(estado.id).then(() =>this.pesquisar());
  }


}
