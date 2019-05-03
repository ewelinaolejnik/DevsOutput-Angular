import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConferenceSearchCriteria } from '../shared/models/conference-search-criteria.model';


@Component({
  selector: 'app-conference-filter',
  templateUrl: './conference-filter.component.html'
})
export class ConferenceFilterComponent {
  @Output('conferencesFilter') conferencesFilterEmitter = new EventEmitter();

  onConferencesFilter(formResult: NgForm) {
    this.conferencesFilterEmitter.emit(formResult.value as ConferenceSearchCriteria);
  }

}
