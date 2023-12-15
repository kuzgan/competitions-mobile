import { Component } from '@angular/core';
import { ParticipantsComponent } from '../participants/participants.component';

@Component({
  selector: 'app-competition-tab',
  standalone: true,
  imports: [ParticipantsComponent],
  templateUrl: './competition-tab.component.html',
  styleUrl: './competition-tab.component.css'
})
export class CompetitionTabComponent {

}
