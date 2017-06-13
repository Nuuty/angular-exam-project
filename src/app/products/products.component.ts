import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(title: Title, meta: Meta) {
    title.setTitle('GamesKey Produkter');
    meta.addTags([
      { name: 'author', content: 'Niels Odgaard' },
      { name: 'keywords', content: 'gamekeys, games, pc games, products, catalog' },
      { name: 'description', content: 'GamesKey product catalog' }
    ])
  }
  ngOnInit() {
  }
}
