import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MD5 } from 'crypto-js';
import { environment } from 'src/environments/environment.development';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isLoading: boolean = true;
  title = 'proyecto-01';
  data: any;
  name!: string;

  constructor(private http: HttpClient, public router: Router) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    const publicKey = environment.publicKey;
    const privateKey = environment.privateKey;
    const ts = '1';
    const hash = MD5(ts + privateKey + publicKey);

    const url = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
    this.http.get(url).subscribe({
      next: (data: any) => {
        this.data = data.data.results;
        this.isLoading = false;
      },
      error: (error) => {
        console.error(error);
        this.isLoading = false;
      },
    });
  }

  saludar():void {
    console.log('holaaa')
  }
}
