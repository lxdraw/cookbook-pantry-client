import { Recipe } from '../model/Recipe';
import { RecipeService } from '../recipe-list/recipe.service';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit, OnDestroy {
  recipe: Recipe;
  sub: any;

  constructor(private _location: Location, private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = Number.parseInt(params['dbId']);
      this.recipe = this.recipeService.get(id);
   });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoRecipesList() {
    this._location.back();
  }
}
