import { Categoria } from './../model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class CategoriaFiltro {
  nome: string;
  pagina = 0;
  itensPorPagina = 7;
}

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  categoriasUrl = 'http://localhost:8080/categorias';

  pesquisar(filtro: CategoriaFiltro): Promise<any> {
    let params = new HttpParams({
      fromObject: {
        page: filtro.pagina.toString(),
        size: filtro.itensPorPagina.toString()
      }
    });

    if (filtro.nome) {
      params = params.append('nome', filtro.nome);
    }

    return this.http.get<any>(`${this.categoriasUrl}`, { params })
      .toPromise()
      .then(response => {
        const categorias = response.content;

        const resultado = {
          categorias,
          total: response.totalElements
        }

        return resultado;
      });
  }

  adicionar(categoria: Categoria): Promise<Categoria> {
    return this.http.post<Categoria>(this.categoriasUrl, categoria).toPromise();
  }

  atualizar(categoria: Categoria) : Promise<Categoria> {
    return this.http.put<Categoria>(`${this.categoriasUrl}/${categoria.id}`, categoria).toPromise();
  }

  excluir(id: number): Promise<void> {
    return this.http.delete(`${this.categoriasUrl}/${id}`).toPromise().then(() => null);
  }

  buscarPorId(id : number) : Promise<Categoria> {
    return this.http.get<Categoria>(`${this.categoriasUrl}/${id}`).toPromise();
  }

  listarTodas() : Promise<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.categoriasUrl}/todas`).toPromise();
  }
}
