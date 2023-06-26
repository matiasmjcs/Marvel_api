import { Injectable } from '@angular/core';
import { ICoin } from '../models/Icoins';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private favoritesCoins: Array<ICoin> = [];
  private _favoritesCoins: BehaviorSubject<Array<ICoin>> = new BehaviorSubject<
    Array<ICoin>
  >([]);
  constructor() {}
  addFavorite(favorite: ICoin) {
    if (!this.favoritesCoins.find((f) => f.id === favorite.id)) {
      this.favoritesCoins.push(favorite);
      this._favoritesCoins.next(this.favoritesCoins);
    }
  }

  get getFavorite() {
    return this._favoritesCoins.asObservable();
  }

  removeFavorite(favorite: ICoin) {
    this.favoritesCoins = this.favoritesCoins.filter(
      (f) => f.id !== favorite.id
    );
    this._favoritesCoins.next(this.favoritesCoins);
  }

  isFavoriteCharacter(favorite: ICoin) {
    return this.favoritesCoins.find((f) => f.id === favorite.id)
      ? true
      : false;
  }
}
