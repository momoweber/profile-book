import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendService } from '../friend.service';

@Component({
  selector: 'app-profile-row',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-row.component.html',
  styleUrl: './profile-row.component.scss'
})
export class ProfileRowComponent {
  @Input() name = 'Frederick';
  @Input() img = 'assets/img/card/1.jpg';
  @Input() description = '3 Jahre alt';
  @Input() canFollow = true;

  constructor(public fs: FriendService) {    
  }
}
