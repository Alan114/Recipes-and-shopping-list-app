import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Smoked Salmon Crostini',
      'Smoked salmon crostini are elegant, salty, sweet, herbaceous and fresh.',
      'https://www.thespruceeats.com/thmb/nwp0nq_P6l7KX0jBkrFwWrH37ik=/1000x1000/smart/filters:no_upscale()/salmoncrostini2-5a94346deb97de00377a535c.jpg'
    ),
    new Recipe(
      'Smoked Salmon Crostini',
      'Smoked salmon crostini are elegant, salty, sweet, herbaceous and fresh.',
      'https://www.thespruceeats.com/thmb/nwp0nq_P6l7KX0jBkrFwWrH37ik=/1000x1000/smart/filters:no_upscale()/salmoncrostini2-5a94346deb97de00377a535c.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
