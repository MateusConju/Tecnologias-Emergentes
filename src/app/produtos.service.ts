import { Injectable } from '@angular/core';
import { Produto } from './produto';
import { Carrinho } from './carrinho';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from './categoria';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  public carrinho: Carrinho = new Carrinho();
  public produtosUrl = 'api/produtos';
  public categoriasUrl = 'api/categorias';

  constructor(
    public httpClient: HttpClient
  ) { }

  getCarrinho(): Carrinho {
    return this.carrinho;
  }

  get produtos(): Observable<Produto[]> {
    return this.httpClient.get<Produto[]>(this.produtosUrl);
  }

  getProduto(id: number): Observable<Produto> {
    const url = `${this.produtosUrl}/${id}`;
    return this.httpClient.get<Produto>(url);
  }

  get categorias(): Observable<Categoria[]> {
    return this.httpClient.get<Categoria[]>(this.categoriasUrl);
  }

  addItem(produto: Produto, quantidade: number): void {
    this.carrinho.addItem(produto, quantidade);
  }
}
