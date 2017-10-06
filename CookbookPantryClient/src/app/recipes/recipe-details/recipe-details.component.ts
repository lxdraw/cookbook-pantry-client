import { Recipe } from '../../../model/Recipe';
import { RecipeService } from '../recipe.service';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit, OnDestroy {
  recipe: Recipe;
  sub: any;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
      const id = Number.parseInt(params['dbId']);
      this.recipeService.get(id).subscribe(r => this.recipe = r);
   });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoRecipesList() {
      let link = ['/recipes'];
      this.router.navigate(link);
  }
}
