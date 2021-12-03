import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MaterialModules} from '../material.module';
import {Routes, RouterModule} from "@angular/router";

//Components
import {AcceuilComponent} from './acceuil/acceuil.component';
import {TestComponent} from './test/test.component';
import {RescuersListComponent} from './rescuers-list/rescuers-list.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ShipsListComponent} from './ships-list/ships-list.component';
import {SavedPeopleListComponent} from './saved-people-list/saved-people-list.component';
import {MatPaginatorIntl} from "@angular/material/paginator";
import {WhoAreWeComponent} from './who-are-we/who-are-we.component';
import {NewsPaperComponent} from './news-paper/news-paper.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {CrudRescuerComponent} from './crud-rescuer/crud-rescuer.component';
import {CrudRescuesComponent} from './crud-rescues/crud-rescues.component';


//Others
import {authService} from "./auth/auth.service";
import {getFrenchPaginatorIntl} from "./utils/french-paginator-intl";
import {registerLocaleData} from "@angular/common";
registerLocaleData(localeFr, 'fr');

const routes: Routes = [
  {path: '', component: AcceuilComponent},
  {path: 'test', component: TestComponent},
  {path: 'rescuers', component: RescuersListComponent},
  {path: 'ships', component: ShipsListComponent},
  {path: 'saved-people', component: SavedPeopleListComponent},
  {path: 'who-are-we', component: WhoAreWeComponent},
  {path: 'news-paper', component: NewsPaperComponent},

  {path: 'crud-rescuer', component: CrudRescuerComponent, canActivate: [authService]},
  {path: 'crud-rescues', component: CrudRescuesComponent, canActivate: [authService]},
  {path: '**', redirectTo: ''}
]

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    TestComponent,
    RescuersListComponent,
    ShipsListComponent,
    SavedPeopleListComponent,
    WhoAreWeComponent,
    NewsPaperComponent,
    LoginFormComponent,
    CrudRescuerComponent,
    CrudRescuesComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModules,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
