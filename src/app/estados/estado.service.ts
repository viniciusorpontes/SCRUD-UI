import { Estado } from './../model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class EstadoFiltro {
  nome: string;
  pagina = 0;
  itensPorPagina = 7;
}

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  constructor(private http: HttpClient) { } 

  estadosUrl = 'http://localhost:8080/estados';

  pesquisar(filtro: EstadoFiltro): Promise<any> {
    let params = new HttpParams({
      fromObject: {
        page: filtro.pagina.toString(),
        size: filtro.itensPorPagina.toString()
      }
    });

    if (filtro.nome) {
      params = params.append('nome', filtro.nome);
    }

    return this.http.get<any>(`${this.estadosUrl}`, { params })
      .toPromise()
      .then(response => {
        const estados = response.content;

        const resultado = {
          estados,
          total: response.totalElements
        }

        return resultado;
      });
  }

  adicionar(estado: Estado): Promise<Estado> {
    return this.http.post<Estado>(this.estadosUrl, estado).toPromise();
  }

  atualizar(estado: Estado) : Promise<Estado> {
    return this.http.put<Estado>(`${this.estadosUrl}/${estado.id}`, estado).toPromise();
  }

  excluir(id: number): Promise<void> {
    return this.http.delete(`${this.estadosUrl}/${id}`).toPromise().then(() => null);
  }

  buscarPorId(id : number) : Promise<Estado> {
    return this.http.get<Estado>(`${this.estadosUrl}/${id}`).toPromise();
  }

  listarTodas() : Promise<Estado[]> {
    return this.http.get<Estado[]>(`${this.estadosUrl}/todos`).toPromise();
  }
}
