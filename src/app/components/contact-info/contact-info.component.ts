import { ContactInfoService } from './../../shared/services/contact-info.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {
  contactForm: FormGroup;
  constructor(private _fb: FormBuilder, private _contactService: ContactInfoService) { }
  contacts = [];
  ngOnInit() {
    this.getContacts();
    this.contactForm = this._fb.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.required]
    });
  }
  storeData(formValue) {
    console.log(formValue);
    this._contactService.saveInfo(formValue).subscribe(
      (response) => {
        this.contacts.push(response['contact']);
        this.contactForm.reset();
      },
      (error) => {
        console.log(error);
      });
  }
  getContacts() {
    this._contactService.contacts().subscribe(
      (response) => {
        this.contacts = response['contacts'];
      },
      (error) => {
        console.log(error);
      });
  }
}
