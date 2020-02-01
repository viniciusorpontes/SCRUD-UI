import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EstadoService } from './../estado.service';
import { Estado } from './../../model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estado-cadastro',
  templateUrl: './estado-cadastro.component.html',
  styleUrls: ['./estado-cadastro.component.css']
})
export class EstadoCadastroComponent implements OnInit {

  estado = new Estado();

  constructor(private estadoService: EstadoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const idestado = this.route.snapshot.params['id'];

    if (idestado) {
      this.carregarEstado(idestado);
    }
  }

  carregarEstado(id : number) {
    this.estadoService.buscarPorId(id).then(estado => {
      this.estado = estado;
    })
  }

  get editando() {
    return Boolean(this.estado.id);
  }

  salvar(form : FormControl){
    if (this.editando) {
      this.atualizarEstado(form);
    } else {
      this.adicionarEstado(form);
    }
  }

  adicionarEstado(form: FormControl) {
    this.estadoService.adicionar(this.estado).then(estadoAdicionado => {
      this.router.navigate(['/estados']);
    })
  }

  atualizarEstado(form: FormControl) {
    this.estadoService.atualizar(this.estado).then(estado => {
      this.router.navigate(['/estados']);
    })
  }


}
