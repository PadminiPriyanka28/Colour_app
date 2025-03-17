import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent {
  message: string = '';

  working(): void {
    this.message = 'Yes, I am working!';
  }

  dead(): void {
    this.message = 'No, am not working!';
  }
}
