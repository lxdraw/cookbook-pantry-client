import { Component, OnInit } from '@angular/core';
import { Recipe } from './model/Recipe';
import { RecipeService } from './recipe-list/recipe.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
   providers: [RecipeService]
})
export class AppComponent implements OnInit {
  title = 'CookbookPantry';
  appStatus = true;
  recipes: Recipe[]
  constructor() {
  }

  ngOnInit(): void {
  }
}
