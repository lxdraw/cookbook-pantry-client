import { Recipe } from '../model/recipe'
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RecipeService {
    private baseUrl = 'http://localhost:8080/cookbookpantry/recipes';
    constructor( private http: Http ) { }

    getRecipes(): Observable<Recipe[]> {
        let recipes = this.http.get( `${this.baseUrl}`, { headers: this.getHeaders() } ).map( mapRecipes );
        return recipes;
    }

    get( dbId: number ): Observable<Recipe> {
        let recipes = this.http.get( `${this.baseUrl}/${dbId}`, { headers: this.getHeaders() } ).map( mapRecipe );
        return recipes;
    }

    private getHeaders() {
        let headers = new Headers();
        headers.append( 'Accept', 'application/json' );
        return headers;
    }
}

function mapRecipes( response: Response ): Recipe[] {
    return response.json().map( toRecipe );
}

function mapRecipe( response: Response ): Recipe {
    return toRecipe( response.json() );
}

function toRecipe( r: any ): Recipe {
    let recipe = <Recipe>( {
        dbId: r.dbId,
        description: r.description,
        name: r.name,
    } );
    return recipe;
}
