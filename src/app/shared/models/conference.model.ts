import { City } from './city.model';
import { Country } from './country.model';

export class Conference {
  public id: number;
  public name: string;
  public city: City;
  public country: Country;
  public dateFrom: Date;
  public dateTo?: Date;
}
