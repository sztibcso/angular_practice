import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegComponent } from './pages/reg/reg.component';
import { ProfileDataComponent } from './pages/profile-data/profile-data.component';
import { DatasComponent } from './pages/datas/datas.component';
import { GotQuotesComponent } from './pages/got-quotes/got-quotes.component';
import { CardComponent } from './components/card/card.component';
import { LoginComponent } from './pages/login/login.component';
import { RegCompComponent } from './components/reg-comp/reg-comp.component';
import { TableComponent } from './components/table/table.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderingComponent } from './components/headering/headering.component';

@NgModule({
  declarations: [
    AppComponent,
    RegComponent,
    ProfileDataComponent,
    DatasComponent,
    GotQuotesComponent,
    CardComponent,
    LoginComponent,
    RegCompComponent,
    TableComponent,
    MainPageComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HeaderingComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
