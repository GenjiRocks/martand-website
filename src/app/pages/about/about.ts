import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CORE_VALUES, MILESTONES, WHO_WE_ADVISE } from '../../data/martand-data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class AboutComponent {
  readonly values = CORE_VALUES;
  readonly milestones = MILESTONES;
  readonly whoWeAdvise = WHO_WE_ADVISE;
}
