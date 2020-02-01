import { FormControl } from '@angular/forms';
import { CidadeService } from './../../cidades/cidade.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from './../cliente.service';
import { Cliente } from './../../model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.component.html',
  styleUrls: ['./cliente-cadastro.component.css']
})
export class ClienteCadastroComponent implements OnInit {

  cliente = new Cliente();

  cidades: any[];
  cidadeSelecionada: number;

  constructor(private cidadeService: CidadeService,
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    if (id) {
      this.carregarCliente(id);
    }

    this.carregarCidades();
  }

  carregarCliente(id : number) {
    this.clienteService.buscarPorId(id).then(cliente => {
      this.cliente = cliente;
    })
  }

  carregarCidades() {
    this.cidadeService.listarTodas().then(lista => {
      this.cidades = lista.map(cid => ({ label: cid.nome, value: cid.id }));
      console.log(this.cidades);
    })
  }

  get editando() {
    return Boolean(this.cliente.id);
  }

  salvar(form : FormControl) {
    if (this.editando) {
      this.atualizarCliente(form);
    } else {
      this.adicionarCliente(form);
    }
  }

  adicionarCliente(form: FormControl) {
    this.clienteService.adicionar(this.cliente).then(clienteAdicionado => {
      this.router.navigate(['/clientes']);
    })
  }

  atualizarCliente(form: FormControl) {
    this.clienteService.atualizar(this.cliente).then(cliente => {
      this.router.navigate(['/clientes']);
    })
  }
}
