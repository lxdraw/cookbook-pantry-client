import { Recipe } from '../model/Recipe';
import { RecipeService } from './recipe.service';
import { Component, OnInit } from '@angular/core';

@Component( {
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
} )
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [];
    selectedRecipe: Recipe;

    constructor( private recipeService: RecipeService ) { }

    ngOnInit() {
        this.recipeService.getRecipes().subscribe( r => this.recipes = r );
    }

    selectRecipe( recipe ) {
        console.log("Selected Recipe: " + recipe.dbId);
        this.selectedRecipe = recipe;
    }
}
