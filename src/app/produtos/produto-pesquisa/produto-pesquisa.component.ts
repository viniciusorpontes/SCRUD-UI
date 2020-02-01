import { ProdutoService, ProdutoFiltro } from './../produto.service';
import { LazyLoadEvent } from 'primeng/api/public_api';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto-pesquisa',
  templateUrl: './produto-pesquisa.component.html',
  styleUrls: ['./produto-pesquisa.component.css']
})
export class ProdutoPesquisaComponent implements OnInit {

  totalRegistros = 0;
  filtro = new ProdutoFiltro();
  produtos = [];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.produtoService.pesquisar(this.filtro)
    .then(resultado => {
      this.totalRegistros = resultado.total;
      this.produtos = resultado.produtos;
    });
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  excluir(produto: any) {
    this.produtoService.excluir(produto.id).then(() =>this.pesquisar());
  }

}
