import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConferenceSearchCriteria } from '../shared/models/conference-search-criteria.model';
import { Country } from '../shared/models/country.model';
import { City } from '../shared/models/city.model';
import { CitiesService } from '../shared/services/cities.service';
import { CountriesService } from '../shared/services/countries.service';


@Component({
  selector: 'app-conference-filter',
  templateUrl: './conference-filter.component.html'
})
export class ConferenceFilterComponent {
  @Output('conferencesFilter') conferencesFilterEmitter = new EventEmitter();
  countries: Country[];
  cities: City[];
  selectedCities: City[];

  constructor(private citiesService: CitiesService, private countriesService: CountriesService) {
    this.countries = countriesService.countries;
    this.cities = citiesService.cities;
  }

  onConferencesFilter(formResult: NgForm) {
    this.conferencesFilterEmitter.emit(formResult.value as ConferenceSearchCriteria);
  }

  onCountrySelected(countryId: number) {
    this.selectedCities = this.cities.filter((item: City) => {
      return item.countryId == countryId;
    });
  }

}
