import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { MyCardComponent } from "./my-card/my-card.component";
import { ProposalsComponent } from "./proposals/proposals.component";
import { FriendboxComponent } from "./friendbox/friendbox.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, HeaderComponent, MyCardComponent, ProposalsComponent, FriendboxComponent]
})
export class AppComponent {

  postTexts = [
    'Hallo, mein Name ist Fredi. Ich bin hier, um neue Freunde zu finden!',
    'Hallo zusammen. Freut mich, dass ihr hier seid!',
    'Hey, mein Name ist Susanne. Ich bin 2 Jahre alt.',
    'Ich esse gerne Kekse.'
  ];
  postImages = [
    'assets/img/card/1.jpg',
    'assets/img/card/2.jpg',
    'assets/img/card/3.jpg',
    'assets/img/card/4.jpg'
  ];

  title = 'new-project';
}
