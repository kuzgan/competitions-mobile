import { Component } from '@angular/core';
import { CompetitionTabComponent } from '../competition-tab/competition-tab.component';

@Component({
  selector: 'app-competitions',
  standalone: true,
  imports: [CompetitionTabComponent],
  templateUrl: './competitions.component.html',
  styleUrl: './competitions.component.css'
})
export class CompetitionsComponent {

}
