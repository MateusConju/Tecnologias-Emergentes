import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const produtos = [
      { id: 1, nome: 'Maça', valor: 5.9953, img: 'assets/img/maca.jpeg' },
      { id: 2, nome: 'Uva', valor: 12.00, img: 'assets/img/uva.jpeg' },
      { id: 3, nome: 'Morango', valor: 8.90, img: 'assets/img/morango.jpeg' },
      { id: 4, nome: 'Acerola', valor: 3.85, img: 'assets/img/acerola.jpeg' },
      { id: 5, nome: 'Manga', valor: 4.45, img: 'assets/img/manga.jpeg' },
      { id: 6, nome: 'Abacate', valor: 7.005, img: 'assets/img/abacate.jpeg' },
      { id: 7, nome: 'Melão', valor: 4.00, img: 'assets/img/melao.jpeg' },
      { id: 8, nome: 'Melancia', valor: 11.90, img: 'assets/img/melancia.jpeg' },
      { id: 9, nome: 'Abacaxi', valor: 7.99, img: 'assets/img/abacaxi.jpeg' },
      { id: 10, nome: 'Amora', valor: 2.65, img: 'assets/img/amora.jpeg' },
      { id: 11, nome: 'Pepino', valor: 4.40, img: 'assets/img/pepino.jpeg' },
      { id: 12, nome: 'Quiabo', valor: 7.80, img: 'assets/img/quiabo.jpeg' },
      { id: 13, nome: 'Abobora', valor: 14.00, img: 'assets/img/abobora.jpeg' },
      { id: 14, nome: 'Beringela', valor: 9.00, img: 'assets/img/beringela.jpeg' },
      { id: 15, nome: 'Tomate', valor: 3.85, img: 'assets/img/tomate.jpeg' },
      { id: 16, nome: 'Nabo', valor: 3.35, img: 'assets/img/nabo.jpeg' },
      { id: 17, nome: 'Beterraba', valor: 5.55, img: 'assets/img/beterraba.jpeg' },
      { id: 18, nome: 'Jiló', valor: 3.00, img: 'assets/img/jilo.jpeg' },
      { id: 19, nome: 'Inhame', valor: 4.50, img: 'assets/img/inhame.jpeg' },
      { id: 20, nome: 'Milho verde', valor: 6.00, img: 'assets/img/milho.jpeg' },
      { id: 21, nome: 'Alface', valor: 8.00, img: 'assets/img/alface.jpeg' },
      { id: 22, nome: 'Cenoura', valor: 4.80, img: 'assets/img/cenoura.jpeg' },
      { id: 23, nome: 'Alho-Poro', valor: 2.99, img: 'assets/img/alho.jpeg' },
      { id: 24, nome: 'Acelga', valor: 4.89, img: 'assets/img/acelga.jpeg' },
      { id: 25, nome: 'Coentro', valor: 2.79, img: 'assets/img/coentro.jpeg' },
      { id: 26, nome: 'Escarola', valor: 5.65, img: 'assets/img/escarola.jpeg' },
      { id: 27, nome: 'Rúcula', valor: 5.55, img: 'assets/img/rucula.jpeg' },
      { id: 28, nome: 'Salsa', valor: 2.10, img: 'assets/img/salsa.jpeg' },
      { id: 29, nome: 'Batata', valor: 4.55, img: 'assets/img/batata.jpeg' },
      { id: 30, nome: 'Brocolis', valor: 3.55, img: 'assets/img/brocolis.jpeg' },
      { id: 31, nome: 'Desinfetante', valor: 6.00, img: 'assets/img/desinfetante.jpeg' },
      { id: 32, nome: 'Detergente', valor: 5.00, img: 'assets/img/detergente.jpeg' },
      { id: 33, nome: 'Sabão em pó', valor: 14.99, img: 'assets/img/po.jpeg' },
      { id: 34, nome: 'Amaciante', valor: 7.89, img: 'assets/img/amaciante.jpeg' },
      { id: 35, nome: 'Água Sanitaria', valor: 17.00, img: 'assets/img/sanitaria.jpeg' },
      { id: 36, nome: 'Sabonete', valor: 2.55, img: 'assets/img/sabonete.jpeg' },
      { id: 37, nome: 'Shampoo', valor: 4.50, img: 'assets/img/shampoo.jpeg' },
      { id: 38, nome: 'Sabão em pedra', valor: 5.50, img: 'assets/img/pedra.jpeg' },
      { id: 39, nome: 'Escova de Dente', valor: 6.00, img: 'assets/img/escova.jpeg' },
      { id: 40, nome: 'Pasta de Dente', valor: 3.10, img: 'assets/img/pasta.jpeg' },
      { id: 41, nome: 'Coca Cola', valor: 7.99, img: 'assets/img/coca.jpeg' },
      { id: 42, nome: 'Sprite', valor: 6.90, img: 'assets/img/sprite.jpeg' },
      { id: 43, nome: 'Fanta Laranja', valor: 7.10, img: 'assets/img/fanta-l.jpeg' },
      { id: 44, nome: 'Guaraná', valor: 6.50, img: 'assets/img/guarana.jpeg' },
      { id: 45, nome: 'Skol', valor: 3.85, img: 'assets/img/skol.jpeg' },
      { id: 46, nome: 'Brahma', valor: 3.95, img: 'assets/img/brahma.jpeg' },
      { id: 47, nome: 'Fanta Uva', valor: 7.10, img: 'assets/img/fanta-u.jpeg' },
      { id: 48, nome: 'Fanta Guaraná', valor: 7.10, img: 'assets/img/fanta-g.jpeg' },
      { id: 49, nome: 'Dolly Guaraná', valor: 6.10, img: 'assets/img/dolly.jpeg' },
      { id: 50, nome: 'Kuat', valor: 7.50, img: 'assets/img/kuat.jpeg' },
      { id: 51, nome: 'Linguiça', valor: 9.99, img: 'assets/img/linguica.jpeg' },
      { id: 52, nome: 'Salsicha', valor: 12.00, img: 'assets/img/salsicha.jpeg' },
      { id: 53, nome: 'Mortadela', valor: 8.25, img: 'assets/img/mortadela.jpeg' },
      { id: 54, nome: 'Peito de Perú', valor: 15.10, img: 'assets/img/peru.jpeg' },
      { id: 55, nome: 'Salame', valor: 4.50, img: 'assets/img/salame.jpeg' },
      { id: 56, nome: 'Presunto', valor: 6.00, img: 'assets/img/presunto.jpeg' },
      { id: 57, nome: 'Queijo Mussarela', valor: 9.00, img: 'assets/img/mussarela.jpeg' },
      { id: 58, nome: 'Queijo Prato', valor: 13.60, img: 'assets/img/prato.jpeg' },
      { id: 59, nome: 'Queijo Branco', valor: 14.20, img: 'assets/img/branco.jpeg' },
      { id: 60, nome: 'Queijo Catupiry', valor: 8.70, img: 'assets/img/catupiry.jpeg' },
      { id: 61, nome: 'Pringles', valor: 4.10, img: 'assets/img/pringles.jpeg' },
      { id: 62, nome: 'Fandangos', valor: 7.50, img: 'assets/img/fandangos.jpeg' },
      { id: 63, nome: 'Cheetos', valor: 8.00, img: 'assets/img/cheetos.jpeg' },
      { id: 64, nome: 'Cebolitos', valor: 6.20, img: 'assets/img/cebolitos.jpeg' },
      { id: 65, nome: 'Ruffles', valor: 8.00, img: 'assets/img/ruffles.jpeg' },
      { id: 66, nome: 'Doritos', valor: 9.90, img: 'assets/img/doritos.jpeg' },
      { id: 67, nome: 'Lays', valor: 7.60, img: 'assets/img/lays.jpeg' },
      { id: 68, nome: 'Baconzitos', valor: 6.85, img: 'assets/img/baconzitos.jpeg' },
      { id: 69, nome: 'Torcida', valor: 3.85, img: 'assets/img/torcida.jpeg' },
      { id: 70, nome: 'Lobits', valor: 2.99, img: 'assets/img/lobits.jpeg' },
      { id: 71, nome: 'Negresco', valor: 2.85, img: 'assets/img/negresco.png' },
      { id: 72, nome: 'Bono', valor: 3.10, img: 'assets/img/bono.jpeg' },
      { id: 73, nome: 'Mousse', valor: 3.15, img: 'assets/img/mousse.png' },
      { id: 74, nome: 'Passatempo', valor: 2.95, img: 'assets/img/passatempo.jpeg' },
      { id: 75, nome: 'Maizena', valor: 5.40, img: 'assets/img/maizena.jpeg' },
      { id: 76, nome: 'Oreo', valor: 4.00, img: 'assets/img/oreo.jpeg' },
      { id: 77, nome: 'Tortinhas', valor: 5.55, img: 'assets/img/tortinhas.jpeg' },
      { id: 78, nome: 'Toddy', valor: 4.45, img: 'assets/img/toddy.jpeg' },
      { id: 79, nome: 'Panco', valor: 6.00, img: 'assets/img/panco.jpeg' },
      { id: 80, nome: 'Pullman', valor: 5.50, img: 'assets/img/pullman.jpeg' },
      { id: 81, nome: 'Seven Boys', valor: 6.75, img: 'assets/img/seven.jpeg' },
      { id: 82, nome: 'Visconti', valor: 8.50, img: 'assets/img/visconti.jpeg' },
      { id: 83, nome: 'Wickbold', valor: 9.25, img: 'assets/img/wickbold.jpeg' },
      { id: 84, nome: 'Grão Lev', valor: 7.55, img: 'assets/img/lev.jpeg' },
      { id: 85, nome: 'Chocotone', valor: 15.50, img: 'assets/img/chocotone.jpeg' },
      { id: 86, nome: 'Panetone', valor: 12.50, img: 'assets/img/panetone.jpeg' },
      { id: 87, nome: 'Caixa de Bombom Nestle', valor: 8.95, img: 'assets/img/nestle.jpeg' },
      { id: 88, nome: 'Caixa de Bombom Lacta', valor: 7.65, img: 'assets/img/lacta.jpeg' },
      { id: 89, nome: 'Caixa de Bombom Garoto', valor: 6.55, img: 'assets/img/garoto.jpeg' },
      { id: 90, nome: 'Margarina Qually', valor: 5.00, img: 'assets/img/naqually.jpeg' },
      { id: 91, nome: 'Manteiga Qually', valor: 4.85, img: 'assets/img/gaqually.jpeg' },
      { id: 92, nome: 'Margarina Vigor', valor: 4.95, img: 'assets/img/navigor.jpeg' },
      { id: 93, nome: 'Margarina Claybom', valor: 5.10, img: 'assets/img/claybom.jpeg' },
      { id: 94, nome: 'Margarina Doriana', valor: 4.80, img: 'assets/img/doriana.jpeg' },
      { id: 95, nome: 'Requeijão Vigor', valor: 6.15, img: 'assets/img/jaovigor.jpeg' },
      { id: 96, nome: 'Requeijão Polenguinho', valor: 7.35, img: 'assets/img/polenguinho.jpeg' },
      { id: 97, nome: 'Ovos brancos', valor: 3.65, img: 'assets/img/ovob.jpeg' },
      { id: 98, nome: 'Ovos Vermelhos', valor: 3.55, img: 'assets/img/ovov.jpeg' },
      { id: 99, nome: 'Pizza de mussarela', valor: 16.25, img: 'assets/img/pizzam.jpeg' },
      { id: 100, nome: 'Pizza de Frango com Catupiry', valor: 18.45, img: 'assets/img/pizzaf.jpeg' },

    ];
    const categorias = [
      { nome: 'Frutas' },
      { nome: 'Verduras' },
      { nome: 'Legumes' },
      { nome: 'Limpeza' },
      { nome: 'Bebidas' },
      { nome: 'Frios' },
      { nome: 'Salgadinhos' },
      { nome: 'Bolachas' },
      { nome: 'Pães' },
      { nome: 'Outros' },
    ];
    return { produtos, categorias };
  }

  genId(produtos: Produto[]): number {
    return produtos.length > 0 ? Math.max(...produtos.map(produto => produto.id)) + 1 : 1;
  }
}
