import { Injectable } from '@angular/core';
import { Recipe } from '../model/recipe'

const RECIPES: Recipe[] = [
         {dbId: 1, name: 'Grilled Corn on the Cob', description: 'Peachs n cream sweet corn roasted on the grill'},
         {dbId: 2, name: 'Taco Pizza', description: 'Pizza that tastes like a taco'}
];

@Injectable()
export class RecipeService {

  constructor() { }

  getRecipes(): Recipe[] {
      return [
           {dbId: 1, name: 'Grilled Corn on the Cob', description: 'Peachs n cream sweet corn roasted on the grill'},
           {dbId: 2, name: 'Taco Pizza', description: 'Pizza that tastes like a taco'}
      ]
  }

  get(dbId: number): Recipe {
    return RECIPES.find(p => p.dbId === dbId);
  }
}
