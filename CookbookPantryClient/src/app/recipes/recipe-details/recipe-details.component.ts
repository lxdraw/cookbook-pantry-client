import {Recipe} from '../../model/Recipe';
import {RecipeService} from '../recipe-list/recipe.service';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: Recipe;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = Number.parseInt(params['dbId']);
      this.recipeService.get(id).subscribe(r => this.recipe = r);
    });
  }
}
