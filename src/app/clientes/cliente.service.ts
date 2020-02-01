import { Cliente } from './../model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class ClienteFiltro {
  nome: string;
  pagina = 0;
  itensPorPagina = 8;
}

@Injectable({
  providedIn: 'root'
})

export class ClienteService {

  constructor(private http : HttpClient) { } 

  clientesUrl = 'http://localhost:8080/clientes';

  pesquisar(filtro: ClienteFiltro): Promise<any> {
    let params = new HttpParams({
      fromObject: {
        page: filtro.pagina.toString(),
        size: filtro.itensPorPagina.toString()
      }
    });

    if (filtro.nome) {
      params = params.append('nome', filtro.nome);
    }

    return this.http.get<any>(`${this.clientesUrl}`, { params })
      .toPromise()
      .then(response => {
        const clientes = response.content;

        const resultado = {
          clientes,
          total: response.totalElements
        }

        return resultado;
      });
  }

  adicionar(cliente: Cliente): Promise<Cliente> {
    return this.http.post<Cliente>(this.clientesUrl, cliente).toPromise();
  }

  atualizar(cliente: Cliente) : Promise<Cliente> {
    return this.http.put<Cliente>(`${this.clientesUrl}/${cliente.id}`, cliente).toPromise();
  }

  excluir(id: number): Promise<void> {
    return this.http.delete(`${this.clientesUrl}/${id}`).toPromise().then(() => null);
  }

  buscarPorId(id : number) : Promise<Cliente> {
    return this.http.get<Cliente>(`${this.clientesUrl}/${id}`).toPromise();
  }

  listarTodas(): Promise<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.clientesUrl}/todos`).toPromise();
}
}
