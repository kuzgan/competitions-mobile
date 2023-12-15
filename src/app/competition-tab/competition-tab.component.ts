import { Component,  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticipantsComponent } from '../participants/participants.component';
import { LeaderBoardComponent } from '../leader-board/leader-board.component';

@Component({
  selector: 'app-competition-tab',
  standalone: true,
  imports: [
    CommonModule,
    ParticipantsComponent,
    LeaderBoardComponent,
  ],
  templateUrl: './competition-tab.component.html',
  styleUrl: './competition-tab.component.css'
})
export class CompetitionTabComponent {
  userTag: string = "@rog13k"
  gameTag: string = "@xBits prize"

  tooLateToJoin: (isTooLate: boolean) => boolean = (isTooLate) => {
    return isTooLate;
  }


}
