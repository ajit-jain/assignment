import { ContactInfoService } from './shared/services/contact-info.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SocialAppService } from 'src/app/shared/services/socail_app.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LinkedInLoginComponent } from './components/linked-in-login/linked-in-login.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormulaCalComponent } from './components/formula-cal/formula-cal.component';
const routes = [
  { path: 'linkedIn-login', component: LinkedInLoginComponent },
  { path: 'contact-info', component: ContactInfoComponent },
  { path: 'formula-calculator', component: FormulaCalComponent }


];
@NgModule({
  declarations: [
    AppComponent,
    LinkedInLoginComponent,
    ContactInfoComponent,
    FormulaCalComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [SocialAppService, ContactInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
