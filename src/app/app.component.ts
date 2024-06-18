import { NgFor } from "@angular/common";
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { TagInputModule } from 'ngx-chips';
import { UserService } from "./user.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FontAwesomeModule,
    MatSliderModule,
    NgFor,
    FormsModule,
    TagInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  userForm = new FormGroup({
    username: new FormControl(''),
    nickname: new FormControl(''),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    position: new FormControl(''),
    nationality: new FormControl(''),
    telephonenumber: new FormControl(''),
    startingDate: new FormControl(new Date()),
    address: new FormControl(''),
    subdistrict: new FormControl(''),
    district: new FormControl(''),
    province: new FormControl(''),
    postalcode: new FormControl(''),
    facebook: new FormControl(''),
    line: new FormControl(''),
    instagram: new FormControl(''),
    education: new FormControl([]),
    experience: new FormControl([]),
    skills: new FormControl([]),
    interests: new FormControl([]),
    guild: new FormControl([])
  });

  userId: string = 'sent128';

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    if (this.userId) {
      this.userService.getUser(this.userId).subscribe(
        user => this.userForm.patchValue(user),
        error => console.error(error)
      );
    }
  }
  
  title = 'test';
  faCamera = faCamera;
  disabled = false;
  max = 10;
  min = 1;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 1;
  interestsItems = ['Song', 'Anime'];
  guildItems = ['k-pop', 't-pop'];

  onSubmit(): void {
    this.userService.updateUser(this.userId, this.userForm.value).subscribe(
      () => {
        alert('User updated successfully');
        this.userForm.reset();
        this.userService.getUser(this.userId).subscribe(
          user => this.userForm.patchValue(user),
          error => console.error(error)
        );
      },
      error => console.error(error)
    );
  }
}
