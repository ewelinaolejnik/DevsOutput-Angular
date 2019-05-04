import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SampleFormComponent } from './sample-form/sample-form.component';
import { ConferenceFilterComponent } from './conference-filter/conference-filter.component';
import { ConferenceItemComponent } from './conference-list/conference-item/conference-item.component';
import { ConferenceListComponent } from './conference-list/conference-list.component';
import { ConferencesService } from './shared/services/conferences.service';
import { FilterConferencesPipe } from './shared/filter-conferences.pipe';
import { CitiesService } from './shared/services/cities.service';
import { CountriesService } from './shared/services/countries.service';

@NgModule({
  declarations: [
    AppComponent,
    SampleFormComponent,
    ConferenceFilterComponent,
    ConferenceItemComponent,
    ConferenceListComponent,
    FilterConferencesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ConferencesService, CitiesService, CountriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
