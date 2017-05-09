import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
  private lng: number;
  private lat: number;
  private url: string;
  constructor(private http: Http) {}

  getNinjas(lat: number, lng: number) {
    this.url = `http://localhost:4000/api/ninjas/?lng=${lng}&lat=${lat}`;
    return this.http.get(this.url).map((res) => res.json());
  }

  getData() {
    return [
      {
        name: 'Lloyd',
        rank: 'black belt',
        available: true
      },
      {
        name: 'Olivia',
        rank: 'yellow belt',
        available: true
      },
      {
        name: 'Soyoung',
        rank: 'blue belt',
        available: true
      }
    ];
  }
}
