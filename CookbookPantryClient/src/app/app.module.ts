import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { AppRoutingModule } from './app-routing.module'

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
