import { NgFor } from "@angular/common";
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { TagInputModule } from 'ngx-chips';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FontAwesomeModule, MatSliderModule, NgFor, FormsModule, TagInputModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
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
}
