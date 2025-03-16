import { Component } from '@angular/core';
import { StatusComponent } from './status/status.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StatusComponent, CommonModule],
  template: `
    <app-status></app-status>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}