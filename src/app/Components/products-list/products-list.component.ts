import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Domain/iproduct';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  data: IProduct[] = [
    {'title': 'Disque externe USB', 'unitPrice': 150, 'quantity': 2},
    {'title': 'Souris optique', 'unitPrice': 10.5, 'quantity': 5},
    {'title': 'Ecran LED 21pouces', 'unitPrice': 650, 'quantity': 1},
  ];

  constructor() { }

  ngOnInit() {
  }

}
