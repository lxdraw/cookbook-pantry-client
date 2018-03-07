import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Ingredient} from '../../model/Ingredient';

@Injectable()
export class IngredientService {
  private baseUrl = 'http://localhost:8080/cookbookpantry/recipes';

  constructor(private http: HttpClient) {
  }

  private static getHeaders() {
    const headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    return headers;
  }

  getIngredients(recipeId: number): Observable<Array<Ingredient>> {
    return this.http.get<Array<Ingredient>>(`${this.baseUrl}/${recipeId}/ingredients`, {headers: IngredientService.getHeaders()});
  }
}
