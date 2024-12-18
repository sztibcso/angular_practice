import { Component, NgModule } from '@angular/core';
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
import { MatPseudoCheckbox } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { ButtonForgottComponent } from './components/button-forgott/button-forgott.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DinputComponent } from './components/dinput/dinput.component';
import { ButtonForAllComponent } from './components/button-for-all/button-for-all.component';
import { FloatLabelModule } from 'primeng/floatlabel';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { CardsPageComponent } from './pages/cards-page/cards-page.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'reg', component: RegComponent},
  {path: 'cards-page', component: CardsPageComponent},
  {path: 'profile-data', component: ProfileDataComponent},
  {path: 'datas', component: DatasComponent},
  {path: 'got-quotes', component: GotQuotesComponent},
];

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
    MainPageComponent,
    PageNotFoundComponent,
    CardsPageComponent,
  ],
  imports: [
    BrowserModule,
    HeaderingComponent,
    MatPseudoCheckbox,
    MatButtonModule,
    ButtonForgottComponent,
    DinputComponent,
    TableComponent,
    ButtonForAllComponent,
    FloatLabelModule,
    MatCardModule,
    MatGridListModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
