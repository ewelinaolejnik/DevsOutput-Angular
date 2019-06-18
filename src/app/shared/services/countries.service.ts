import { Country } from '../models/country.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CountriesService {
  constructor(private http: HttpClient) {
    this.http = http;
  }

  getAll() {
    return this.http.get<Country[]>('http://localhost:5050/countries');
  }
}
