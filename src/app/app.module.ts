import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SampleFormComponent } from './sample-form/sample-form.component';
import { ConferenceFilterComponent } from './conference-home/conference-filter/conference-filter.component';
import { ConferenceItemComponent } from './conference-home/conference-list/conference-item/conference-item.component';
import { ConferenceListComponent } from './conference-home/conference-list/conference-list.component';
import { ConferencesService } from './shared/services/conferences.service';
import { FilterConferencesPipe } from './shared/filter-conferences.pipe';
import { CitiesService } from './shared/services/cities.service';
import { CountriesService } from './shared/services/countries.service';
import { RouterModule, Routes } from '@angular/router';
import { ConferenceHomeComponent } from './conference-home/conference-home.component';

const routes: Routes = [
  { path: '', redirectTo: '/template-driven-form', pathMatch: 'full' },
  {
    path: 'template-driven-form', component: SampleFormComponent
  },
  { path: 'components-communication', component: ConferenceHomeComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    SampleFormComponent,
    ConferenceFilterComponent,
    ConferenceItemComponent,
    ConferenceListComponent,
    ConferenceHomeComponent,
    FilterConferencesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ConferencesService, CitiesService, CountriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
