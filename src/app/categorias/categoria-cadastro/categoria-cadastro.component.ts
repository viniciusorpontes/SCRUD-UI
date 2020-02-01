import { Categoria } from './../../model';
import { CategoriaService } from './../categoria.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categoria-cadastro',
  templateUrl: './categoria-cadastro.component.html',
  styleUrls: ['./categoria-cadastro.component.css']
})
export class CategoriaCadastroComponent implements OnInit {

  categoria = new Categoria();

  constructor(private categoriaService: CategoriaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const idcategoria = this.route.snapshot.params['id'];

    if (idcategoria) {
      this.carregarCategoria(idcategoria);
    }
  }

  carregarCategoria(id : number) {
    this.categoriaService.buscarPorId(id).then(categoria => {
      this.categoria = categoria;
    })
  }

  get editando() {
    return Boolean(this.categoria.id);
  }

  salvar(form : FormControl){
    if (this.editando) {
      this.atualizarCategoria(form);
    } else {
      this.adicionarCategoria(form);
    }
  }

  adicionarCategoria(form: FormControl) {
    this.categoriaService.adicionar(this.categoria).then(categoriaAdicionada => {
      this.router.navigate(['/categorias']);
    })
  }

  atualizarCategoria(form: FormControl) {
    this.categoriaService.atualizar(this.categoria).then(categoria => {
      this.router.navigate(['/categorias']);
    })
  }

}
