import { City } from '../models/city.model';

export class CitiesService {
  cities: City[] = [new City(1, 'Warsaw', 1), new City(2, 'Lodz', 1),
  new City(3, 'London', 2), new City(4, 'Manchester', 2),
  new City(5, 'Berlin', 3), new City(5, 'Munich', 3)]
}
