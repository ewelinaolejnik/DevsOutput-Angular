import { Pipe, PipeTransform } from '@angular/core';
import { Conference } from './models/conference.model';

@Pipe({ name: 'filterConferences'})
export class FilterConferencesPipe implements PipeTransform {
  transform(value: Conference[], searchCriteria: { name: string }) {
    if (!searchCriteria) {
      return value;
    }
    return value.filter(v => v.name.includes(searchCriteria.name));
  }

}
