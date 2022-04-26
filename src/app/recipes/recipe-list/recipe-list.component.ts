import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Smoked Salmon Crostini',
      'Smoked salmon crostini are elegant, salty, sweet, herbaceous and fresh.',
      'https://www.thespruceeats.com/thmb/xGhFPqofj4REUfz47v-pUez4LCY=/1394x784/smart/filters:no_upscale()/salmoncrostini2-5a94346deb97de00377a535c.jpg'
    ),
    new Recipe(
      'Strawberry Shortcake',
      'Dazzle your tongue with strawberry shortcake made from lightly sweetened biscuits and fresh strawberries.',
      'https://www.thespruceeats.com/thmb/Fu_L3kpDn2LRdHiURemlcWnMsJ4=/4000x3000/smart/filters:no_upscale()/24-5b3f8572c9e77c00378cff46.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
