import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// PUBLIC_INTERFACE
export interface Recipe {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  isFavorite: boolean;
  [key: string]: any;
}

// PUBLIC_INTERFACE
@Injectable({ providedIn: 'root' })
export class RecipeService {
  private http = inject(HttpClient);
  private apiUrl = '/api/recipes'; // adjust this to match backend route

  // PUBLIC_INTERFACE
  getRecipes(query?: string): Observable<Recipe[]> {
    let url = this.apiUrl;
    if (query) {
      url += `?q=${encodeURIComponent(query)}`;
    }
    return this.http.get<Recipe[]>(url);
  }

  // PUBLIC_INTERFACE
  getRecipe(id: string): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.apiUrl}/${id}`);
  }

  // PUBLIC_INTERFACE
  addFavorite(recipeId: string): Observable<any> {
    return this.http.post(`/api/favorites`, { recipeId });
  }

  // PUBLIC_INTERFACE
  removeFavorite(recipeId: string): Observable<any> {
    return this.http.delete(`/api/favorites/${recipeId}`);
  }

  // PUBLIC_INTERFACE
  getFavorites(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`/api/favorites`);
  }
}
