import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-my-card',
  standalone: true,
  imports: [CommonModule,MatIconModule],
  templateUrl: './my-card.component.html',
  styleUrl: './my-card.component.scss'
})
export class MyCardComponent {
  @Input() text: string = '';
  @Input() img: string = '';

}
