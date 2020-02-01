import { LazyLoadEvent } from 'primeng/api/public_api';
import { CidadeFiltro, CidadeService } from './../cidade.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cidade-pesquisa',
  templateUrl: './cidade-pesquisa.component.html',
  styleUrls: ['./cidade-pesquisa.component.css']
})
export class CidadePesquisaComponent implements OnInit {

  totalRegistros = 0;
  filtro = new CidadeFiltro();
  cidades = [];

  constructor(private cidadeService : CidadeService) { } 

  ngOnInit() {
    this.pesquisar();
    console.log(this.cidades);
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.cidadeService.pesquisar(this.filtro)
    .then(resultado => {
      this.totalRegistros = resultado.total;
      this.cidades = resultado.cidades;
    });
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  excluir(produto: any) {
    this.cidadeService.excluir(produto.id).then(() =>this.pesquisar());
  }

}
