import { HttpClientModule } from '@angular/common/http';
import { SocialAppService } from './services/socail_app.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
})
export class SharedModule { }
