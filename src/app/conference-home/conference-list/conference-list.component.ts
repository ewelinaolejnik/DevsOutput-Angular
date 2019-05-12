import { Component, Input } from '@angular/core';
import { ConferencesService } from '../../shared/services/conferences.service';
import { Conference } from '../../shared/models/conference.model';
import { ConferenceSearchCriteria } from '../../shared/models/conference-search-criteria.model';

@Component({
  templateUrl: './conference-list.component.html',
  selector: 'app-conference-list'
})
export class ConferenceListComponent {
  conferences: Conference[];
  @Input() searchCriteria: ConferenceSearchCriteria;

  constructor(private conferencesService: ConferencesService) {
    this.conferences = conferencesService.conferences;
  }
}
