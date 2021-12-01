import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService } from '../produtos.service';
import { Produto } from '../produto';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {

  public produto: Produto = new Produto();
  public quantidade = 1;

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public service: ProdutosService,
  ) { }

  ngOnInit() {
    this.getProduto();
  }

  getProduto(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getProduto(id)
      .subscribe(produto => this.produto = produto);
  }

  addItem(): void {
    this.service.addItem(this.produto, this.quantidade);
    this.router.navigate(['./carrinho']);
  }

  voltar(): void {
    this.router.navigate(['./main']);
  }
}
