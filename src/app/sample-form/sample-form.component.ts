import { Component, OnInit } from '@angular/core';
import { City } from '../shared/models/city.model';
import { NgForm } from '@angular/forms';
import { CitiesService } from '../shared/services/cities.service';
import { CountriesService } from '../shared/services/countries.service';
import { Country } from '../shared/models/country.model';

@Component({
  selector: 'app-sample-form',
  templateUrl: './sample-form.component.html'
})
export class SampleFormComponent implements OnInit {

  countries: Country[];
  cities: City[];
  selectedCities: City[];

  constructor(private citiesService: CitiesService, private countriesService: CountriesService) {
    this.countries = countriesService.countries;
    this.cities = citiesService.cities;
  }

  ngOnInit() {}

  onFormSubmitted(formResult: NgForm) {
    const user = formResult.value;
    console.log(user);
  }

  onCountrySelected(countryId: number) {
    this.selectedCities = this.cities.filter((item: City) => {
      return item.countryId == countryId
    });
  }

}
