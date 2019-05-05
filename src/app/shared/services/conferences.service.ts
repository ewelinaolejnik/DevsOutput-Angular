import { City } from '../models/city.model';
import { Country } from '../models/country.model';

export class ConferencesService {
    conferences = [
        {
            id: 4,
            name: 'Test Conference 4',
            city: new City(1, 'Warsaw', 1),
            country: new Country(1, 'Poland'),
            dateFrom: new Date(2019, 8, 10),
            dateTo: new Date(2019, 8, 10)
      }
    ]
}
