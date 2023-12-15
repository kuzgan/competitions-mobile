import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-leader-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leader-board.component.html',
  styleUrl: './leader-board.component.css'
})
export class LeaderBoardComponent {
  @Input() profilePictureUrl: string = '';
  @Input() income: number = 0;
  @Input() percentageIncome: string = '';
  @Input() userName: string = '';
  @Input() verified: boolean = false;
  @Input() alerts: number = 0;
  @Input() winRate: string = '';
  @Input() yield: string = '';
  @Input() place: number = 1;

  isIncome(): boolean {
    return this.income > 0;
  }
}
