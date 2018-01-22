import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { RouterLink } from '@angular/router';
import { CATEGORIES } from '../mock-categories';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoriesComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

}
