import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  standalone: false,
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes:Recipe[] = [
    new Recipe('1','Test Recipe 1','This is a test recipe 1','https://www.seriouseats.com/thmb/o3IRwMl1OMCZi9SG_4OXXhMXrR8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/20240418-SEA-Lemon-Tart-AmandaSuarez-hero2-5808e7667177400486366bedc6c4323b.jpg', ['Ingredient 1', 'Ingredient 2']),
    new Recipe('2','Test Recipe 2','This is a test recipe 2','https://www.seriouseats.com/thmb/o3IRwMl1OMCZi9SG_4OXXhMXrR8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/20240418-SEA-Lemon-Tart-AmandaSuarez-hero2-5808e7667177400486366bedc6c4323b.jpg', ['Ingredient 3', 'Ingredient 4']),
    new Recipe('3','Test Recipe 3','This is a test recipe 3','https://www.seriouseats.com/thmb/o3IRwMl1OMCZi9SG_4OXXhMXrR8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/20240418-SEA-Lemon-Tart-AmandaSuarez-hero2-5808e7667177400486366bedc6c4323b.jpg', ['Ingredient 5', 'Ingredient 6'])
  ];

  constructor() {}
}
