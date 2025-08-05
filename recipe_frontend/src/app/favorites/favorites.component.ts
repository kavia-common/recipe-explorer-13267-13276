import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.service';

@Component({
  selector: 'app-favorites',
  standalone: true,
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favorites: Recipe[] = [];
  loading = false;
  error?: string;

  ngOnInit(): void {
    this.fetchFavorites();
  }

  // PUBLIC_INTERFACE
  fetchFavorites() {
    this.loading = true;
    // stub for linter-clean dummy method
  }

  // PUBLIC_INTERFACE
  removeFavorite() {
    // stub for linter-clean dummy method
  }
}
