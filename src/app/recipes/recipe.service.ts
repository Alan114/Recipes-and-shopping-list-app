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
    new Recipe(
      'Spaghetti sauce mix',
      'Make your own delicious and easy Spaghetti Sauce Mix to store in your pantry for fresh tasting sauce...',
      'https://www.thespruceeats.com/thmb/2Xjv9wEbjXQu2bNLUGOmd4RcwDM=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/175408128-58add6bf3df78c345bdefabc.jpg',
      [
        new Ingredient('Onion', 1),
        new Ingredient('Dried parsley flakes', 1),
        new Ingredient('Cornstarch', 1),
        new Ingredient('Salt', 1),
      ]
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

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
