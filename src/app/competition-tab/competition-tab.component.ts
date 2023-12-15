import { Component,  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticipantsComponent } from '../participants/participants.component';

@Component({
  selector: 'app-competition-tab',
  standalone: true,
  imports: [
    ParticipantsComponent,
    CommonModule,
  ],
  templateUrl: './competition-tab.component.html',
  styleUrl: './competition-tab.component.css'
})
export class CompetitionTabComponent {
  tooLateToJoin: (isTooLate: boolean) => boolean = (isTooLate) => {
    return isTooLate;
  }


}
