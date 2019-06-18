import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Conference } from '../models/conference.model';
import { ConferenceSearchCriteria } from '../models/conference-search-criteria.model';
import { Observable } from 'rxjs';


@Injectable()
export class ConferencesService {

  constructor(private http: HttpClient) {
    this.http = http;
  }

  getAll(pageNumber, pageSize, searchCriteria: ConferenceSearchCriteria): Observable<{ conferences: Conference[], count: number }> {
    let url = `http://localhost:5050/conferences?page=${pageNumber}&pageSize=${pageSize}`;
    if (searchCriteria) {
      if (searchCriteria.name) {
        url += `&name=${searchCriteria.name}`;
      }
      if (searchCriteria.cityId) {
        url += `&cityId=${searchCriteria.cityId}`;
      }
      if (searchCriteria.countryId) {
        url += `&countryId=${searchCriteria.countryId}`;
      }
    }
    return this.http.get<any>(url)
      .pipe(map(result => {
        const conferences = result.rows.map(conference => {
          conference.country = conference.city.country;
          delete conference.city.country;
          return conference;
        });
        return { conferences, count: result.count };
      }));
  }
}
