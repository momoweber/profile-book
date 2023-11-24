import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRowComponent } from "../profile-row/profile-row.component";

@Component({
    selector: 'app-proposals',
    standalone: true,
    templateUrl: './proposals.component.html',
    styleUrl: './proposals.component.scss',
    imports: [CommonModule, ProfileRowComponent]
})
export class ProposalsComponent {

    names = ['Marius', 'Franziska', 'Josephine', 'Patrick'];
    texts = ['2 Jahre alt', 'Gräbt gerne Löscher', 'Spielt gerne', 'hamster-Freak'];
    images = ['assets/img/card/5.jpg', 'assets/img/card/6.jpg', 'assets/img/card/7.jpg', 'assets/img/card/8.jpg'];

}
