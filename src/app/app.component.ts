import { SocialAppService } from './shared/services/socail_app.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare var window: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private _socialAppService: SocialAppService,
    public route: ActivatedRoute,
  ) { }
  ngOnInit() {

  }

}
