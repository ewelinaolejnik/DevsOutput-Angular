import { Country } from '../models/country.model';

export class CountriesService {
  countries: Country[] = [new Country(1, 'Poland'), new Country(2, 'UK'), new Country(3, 'Germany')];
}
