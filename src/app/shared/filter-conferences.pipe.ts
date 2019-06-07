import { Pipe, PipeTransform } from '@angular/core';
import { Conference } from './models/conference.model';
import { ConferenceSearchCriteria } from './models/conference-search-criteria.model';

@Pipe({ name: 'filterConferences'})
export class FilterConferencesPipe implements PipeTransform {
  transform(value: Conference[], searchCriteria: ConferenceSearchCriteria) {
    if (!searchCriteria) {
      return value;
    }

    if (searchCriteria.name) {
      value = value.filter(v => v.name.includes(searchCriteria.name));
    }
    if (searchCriteria.countryId) {
      value = value.filter(v => v.country.id === searchCriteria.countryId);
    }
    if (searchCriteria.cityId) {
      value = value.filter(v => v.city.id === searchCriteria.cityId);
    }

    return value;
  }

}
