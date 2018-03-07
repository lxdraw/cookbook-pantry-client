import {Component, OnInit} from '@angular/core';
import {Ingredient} from "../../../model/Ingredient";
import {IngredientService} from "../ingredient.service";
import {ActivatedRoute} from "@angular/router";
import {isUndefined} from "util";

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit {
  private ingredients: Array<Ingredient>;
  private ingredientsExist = true;

  constructor(private ingredientService: IngredientService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        const recipeId = Number.parseInt(params['dbId']);

        this.ingredientService.getIngredients(recipeId).subscribe((i: Array<Ingredient>) => {
          this.ingredients = i;
          if (this.ingredients.length > 0) {
            this.ingredientsExist = false;
            console.log(this.ingredientsExist);
          }
        });
      }
    );
  }

}
