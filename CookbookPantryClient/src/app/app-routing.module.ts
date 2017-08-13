import {Routes, RouterModule} from '@angular/router';
import {RecipeListComponent} from './recipe-list/recipe-list.component';
import {RecipeDetailsComponent} from './recipe-details/recipe-details.component';

const routes: Routes = [
  {
    path: 'recipes',
    component: RecipeListComponent
  },
  {
    path: '',
    redirectTo: 'recipes',
    pathMatch: 'full'
  },
  {
    path: 'recipes/:dbId',
    component: RecipeDetailsComponent
  }
];

export const appRouterModule = RouterModule.forRoot(routes);
