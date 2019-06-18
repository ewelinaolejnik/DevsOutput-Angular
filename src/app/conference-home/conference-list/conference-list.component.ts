import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ConferencesService } from '../../shared/services/conferences.service';
import { Conference } from '../../shared/models/conference.model';
import { ConferenceSearchCriteria } from '../../shared/models/conference-search-criteria.model';


@Component({
  templateUrl: './conference-list.component.html',
  selector: 'app-conference-list'
})
export class ConferenceListComponent implements OnInit, OnChanges {
  conferences: Conference[];
  pageNumbers: number[];
  pageSize = 2;
  @Input() searchCriteria: ConferenceSearchCriteria;

  ngOnChanges(changes: SimpleChanges) {
    const searchCriteria = changes.searchCriteria;
    if (searchCriteria) {
      this.conferencesService.getAll(1, this.pageSize, this.searchCriteria)
        .subscribe((result) => {
          this.conferences = result.conferences;
          this.pageNumbers = this.createPageNumberArray(this.pageSize, result.count);
        });
    }
  }

  ngOnInit() {
    this.conferencesService.getAll(1, this.pageSize, null)
      .subscribe((result) => {
        this.conferences = result.conferences;
        this.pageNumbers = this.createPageNumberArray(this.pageSize, result.count);
      });
  }

  constructor(private conferencesService: ConferencesService) {
    this.conferencesService = conferencesService;
  }


  onPageClicked(pageNumber: number) {
    this.conferencesService.getAll(pageNumber, this.pageSize, this.searchCriteria)
      .subscribe((result) => {
        this.conferences = result.conferences;
        this.pageNumbers = this.createPageNumberArray(this.pageSize, result.count);
      });
  }

  private createPageNumberArray(pageSize: number, collectionLength: number): any[] {
    const pageNumbers = [];
    const pagesCount = (collectionLength / pageSize) + (collectionLength % pageSize === 0 ? 0 : 1);
    for (let index = 1; index <= pagesCount; index++) {
      pageNumbers.push(index);
    }

    return pageNumbers;
  }
}
