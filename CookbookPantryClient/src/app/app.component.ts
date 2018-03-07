import { Component, OnInit } from '@angular/core';
// import { Recipe } from './model/Recipe';
import { RecipeService } from './recipes/recipe-list/recipe.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {IngredientService} from "./recipes/recipe-details/ingredient.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
   providers: [RecipeService, IngredientService]
})
export class AppComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }
}
