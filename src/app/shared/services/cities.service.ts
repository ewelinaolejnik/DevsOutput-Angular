import { City } from '../models/city.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CitiesService {
  constructor(private http: HttpClient) {
    this.http = http;
  }

  getAll() {
    return this.http.get<City[]>('http://localhost:5050/cities');
  }
}
