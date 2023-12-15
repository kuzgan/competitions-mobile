import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CreateCompetitionComponent } from './create-competition/create-competition.component';
import { CompetitionsComponent } from './competitions/competitions.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    StatusBarComponent,
    TopBarComponent,
    CreateCompetitionComponent,
    CompetitionsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'competitions-mobile';
}
