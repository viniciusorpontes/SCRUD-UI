import { Produto } from './../../model';
import { CategoriaService } from './../../categorias/categoria.service';
import { ProdutoService } from './../produto.service';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto-cadastro',
  templateUrl: './produto-cadastro.component.html',
  styleUrls: ['./produto-cadastro.component.css']
})
export class ProdutoCadastroComponent implements OnInit {

  produto = new Produto();

  categorias: any[];
  categoriaSelecionada: number;

  constructor(private categoriaService: CategoriaService,
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    if (id) {
      this.carregarProduto(id);
    }

    this.carregarCategorias();
  }

  carregarProduto(id : number) {
    this.produtoService.buscarPorId(id).then(produto => {
      this.produto = produto;
    })
  }

  carregarCategorias() {
    this.categoriaService.listarTodas().then(lista => {
      this.categorias = lista.map(cat => ({ label: cat.nome, value: cat.id }));
      console.log(this.categorias);
    })
  }

  get editando() {
    return Boolean(this.produto.id);
  }

  salvar(form : FormControl) {
    if (this.editando) {
      this.atualizarProduto(form);
    } else {
      this.adicionarProduto(form);
    }
  }

  adicionarProduto(form: FormControl) {
    this.produtoService.adicionar(this.produto).then(produtoAdicionado => {
      this.router.navigate(['/produtos']);
    })
  }

  atualizarProduto(form: FormControl) {
    this.produtoService.atualizar(this.produto).then(produto => {
      this.router.navigate(['/produtos']);
    })
  }
  
}
