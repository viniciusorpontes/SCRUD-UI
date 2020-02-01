import { Cidade } from './../model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class CidadeFiltro {
  nome: string;
  pagina = 0;
  itensPorPagina = 6;
}

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  constructor(private http: HttpClient) { }

  cidadesUrl = 'http://localhost:8080/cidades';

  pesquisar(filtro: CidadeFiltro): Promise<any> {
    let params = new HttpParams({
      fromObject: {
        page: filtro.pagina.toString(),
        size: filtro.itensPorPagina.toString()
      }
    });

    if (filtro.nome) {
      params = params.append('nome', filtro.nome);
    }

    return this.http.get<any>(`${this.cidadesUrl}`, { params })
      .toPromise()
      .then(response => {
        const cidades = response.content;

        const resultado = {
          cidades,
          total: response.totalElements
        }

        return resultado;
      });
  }

  adicionar(cidade: Cidade): Promise<Cidade> {
    return this.http.post<Cidade>(this.cidadesUrl, cidade).toPromise();
  }

  atualizar(cidade: Cidade): Promise<Cidade> {
    return this.http.put<Cidade>(`${this.cidadesUrl}/${cidade.id}`, cidade).toPromise();
  }

  excluir(id: number): Promise<void> {
    return this.http.delete(`${this.cidadesUrl}/${id}`).toPromise().then(() => null);
  }

  buscarPorId(id: number): Promise<Cidade> {
    return this.http.get<Cidade>(`${this.cidadesUrl}/${id}`).toPromise();
  }

  listarTodas(): Promise<Cidade[]> {
    return this.http.get<Cidade[]>(`${this.cidadesUrl}/todos`).toPromise();
  }
}
