import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecipeListComponent} from './recipe/recipe-list/recipe-list.component';
import {RecipeDetailsComponent} from './recipe/recipe-list/recipe-details/recipe-details.component';

const routes: Routes = [
  {
    path: 'recipes',
    component: RecipeListComponent
  },
  {
    path: 'recipes/:dbId',
    component: RecipeDetailsComponent
  },
  {
      path: '',
      redirectTo: 'recipes',
      pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  
export class AppRoutingModule { }
