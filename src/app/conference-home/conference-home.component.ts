import { Component, OnInit } from '@angular/core';
import { ConferenceSearchCriteria } from '../shared/models/conference-search-criteria.model';

@Component({
  selector: 'app-conference-home',
  templateUrl: './conference-home.component.html'
})
export class ConferenceHomeComponent implements OnInit {

  conferenceSearchCriteria: ConferenceSearchCriteria;

  onSearchCriteriaGet(searchCriteria: ConferenceSearchCriteria) {
    this.conferenceSearchCriteria = searchCriteria;
  }

  ngOnInit() {
  }

}
