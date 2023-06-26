import { Injectable } from '@angular/core';
import { ICoin } from '../models/Icoins';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoingeckoService {
  constructor(private http: HttpClient) {}

  async getCoins(): Promise<Observable<ICoin[]>> {
    return this.http.get<ICoin[]>(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    );
  }
}
