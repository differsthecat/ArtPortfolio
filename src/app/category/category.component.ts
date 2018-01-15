import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CATEGORIES } from '../mock-categories';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoriesComponent implements OnInit {

  categories = CATEGORIES;
  
  constructor() { }

  ngOnInit() {
  }

}
