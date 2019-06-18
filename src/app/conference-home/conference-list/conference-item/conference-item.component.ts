import { Component, Input } from '@angular/core';
import { Conference } from 'src/app/shared/models/conference.model';

@Component({
    templateUrl: './conference-item.component.html',
    selector: 'app-conference-item'
})
export class ConferenceItemComponent {
  @Input() conference: Conference;

}
