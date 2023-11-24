import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FriendService {
  names = [];
  texts = [];
  images = [];

  constructor() { }

  // addFriend('Peter', 'Hallo', 'assets/img/crad/1.jpg')
  addFriends(name:string, text:string, image:string) {
    this.names.push(name);
    this.texts.push(text);
    this.images.push(image);
  }
}
