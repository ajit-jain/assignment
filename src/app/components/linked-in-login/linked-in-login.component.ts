import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SocialAppService } from 'src/app/shared/services/socail_app.service';

@Component({
  selector: 'app-linked-in-login',
  templateUrl: './linked-in-login.component.html',
  styleUrls: ['./linked-in-login.component.css']
})
export class LinkedInLoginComponent implements OnInit {
  data: any = [];
  constructor(private _socialAppService: SocialAppService,
    public route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      console.log(params);
      if (params['code']) {
        this.getLinkedInUser(params['code']);
      }
    });
  }

  redirectToSocialLogin() {
    const link = this._socialAppService.getLinkedInLink();
    window.location.href = link;
  }
  getLinkedInUser(code) {
    this._socialAppService.getLinkedInUser(code).subscribe((user) => {
      console.log(user['data']);
      let data = [];
      for(let key in user['data']){
        data.push([key,user['data'][key]]);
      }
      this.data = data;
    }, (error) => {
      console.log('error', error);
    });
  }
}
