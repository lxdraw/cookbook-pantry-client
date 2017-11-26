import { Recipe } from '../../model/recipe';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RecipeService {
    private baseUrl = 'http://localhost:8080/cookbookpantry/recipes';
    constructor( private http: HttpClient ) { }

    private static getHeaders() {
        const headers = new HttpHeaders();
        headers.append( 'Accept', 'application/json' );
        return headers;
    }

    getRecipes(): Observable<Array<Recipe>> {
      return this.http.get<Array<Recipe>>(`${this.baseUrl}`, {headers: RecipeService.getHeaders()});
    }

    get( dbId: number ): Observable<Recipe> {
      return this.http.get<Recipe>(`${this.baseUrl}/${dbId}`, {headers: RecipeService.getHeaders()});
    }

}
