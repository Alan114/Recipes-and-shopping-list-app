import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Smoked Salmon Crostini',
      'Smoked salmon crostini are elegant, salty, sweet, herbaceous and fresh.',
      'https://www.thespruceeats.com/thmb/xGhFPqofj4REUfz47v-pUez4LCY=/1394x784/smart/filters:no_upscale()/salmoncrostini2-5a94346deb97de00377a535c.jpg',
      [new Ingredient('Salmon filet', 1), new Ingredient('French baguette', 1)]
    ),
    new Recipe(
      'Strawberry Shortcake',
      'Dazzle your tongue with strawberry shortcake made from lightly sweetened biscuits and fresh strawberries.',
      'https://www.thespruceeats.com/thmb/Fu_L3kpDn2LRdHiURemlcWnMsJ4=/4000x3000/smart/filters:no_upscale()/24-5b3f8572c9e77c00378cff46.jpg',
      [new Ingredient('Strawberries', 6), new Ingredient('Whipping cream', 1)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }
}
