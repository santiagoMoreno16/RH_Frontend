import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss'],
})
export class BenefitsComponent implements OnInit {

  public categories = [
    { title: 'Restaurantes', image: 'assets/categories/restaurant' },
    { title: 'Estética y Salud', image: 'assets/categories/esthetics' },
    { title: 'Accesorios Dama', image: 'assets/categories/ladies_accessories' },
    { title: 'Accesorios Caballero', image: 'assets/categories/men_accessories', },
    { title: 'Artículos Bebé', image: 'assets/categories/baby_items' },
    { title: 'Gift Card', image: 'assets/categories/gift_card' },
    { title: 'Planes Pareja', image: 'assets/categories/plans_couple' },
    { title: 'Plan Familia', image: 'assets/categories/family_plan' },
    { title: 'Mascotas', image: 'assets/categories/pets' },
    { title: 'Pasadías', image: 'assets/categories/passages' },
  ];

  constructor() {}

  ngOnInit() {}
}
