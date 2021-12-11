import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../shared/categories.service';
import { Category } from '../../shared/category.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.categories = this.categoriesService.getCategories();
  }

}
