import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CidadeService } from './../cidade.service';
import { EstadoService } from './../../estados/estado.service';
import { Cidade } from './../../model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cidade-cadastro',
  templateUrl: './cidade-cadastro.component.html',
  styleUrls: ['./cidade-cadastro.component.css']
})
export class CidadeCadastroComponent implements OnInit {

  cidade = new Cidade();

  estados: any[];
  estadoSelecionado: number;

  constructor(private estadoService: EstadoService,
    private cidadeService: CidadeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    if (id) {
      this.carregarCidade(id);
    }

    this.carregarEstados();
  }

  carregarCidade(id : number) {
    this.cidadeService.buscarPorId(id).then(cidade => {
      this.cidade = cidade;
    })
  }

  carregarEstados() {
    this.estadoService.listarTodas().then(lista => {
      this.estados = lista.map(est => ({ label: est.nome, value: est.id }));
      console.log(this.estados);
    })
  }

  get editando() {
    return Boolean(this.cidade.id); 
  }

  salvar(form : FormControl) {
    if (this.editando) {
      this.atualizarCidade(form);
    } else {
      this.adicionarCidade(form);
    }
  }

  adicionarCidade(form: FormControl) {
    this.cidadeService.adicionar(this.cidade).then(CidadeAdicionada => {
      this.router.navigate(['/cidades']);
    })
  }

  atualizarCidade(form: FormControl) {
    this.cidadeService.atualizar(this.cidade).then(cidade => {
      this.router.navigate(['/cidades']);
    })
  }
  
}