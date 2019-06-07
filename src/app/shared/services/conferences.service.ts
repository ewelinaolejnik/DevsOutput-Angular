import { City } from '../models/city.model';
import { Country } from '../models/country.model';

export class ConferencesService {
  conferences = [
    {
      id: 1,
      name: 'Test Conference 1',
      city: new City(1, 'Warsaw', 1),
      country: new Country(1, 'Poland'),
      dateFrom: new Date(2019, 8, 10),
      dateTo: new Date(2019, 8, 10)
    },
    {
      id: 2,
      name: 'Test Conference 2',
      city: new City(3, 'London', 2),
      country: new Country(1, 'UK'),
      dateFrom: new Date(2019, 9, 10),
      dateTo: null
    }
  ];
}
