import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: 'card.page.html',
  styleUrls: ['card.page.scss'],
})
export class CardPage implements OnInit {

  constructor() {

  }

  ngOnInit() {
    window['getb64'] = function (url) {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        const reader = new FileReader();
        reader.onloadend = function () {
          console.log(reader.result);
        }
        reader.readAsDataURL(xhr.response);
      };
      xhr.open('GET', url);
      xhr.responseType = 'blob';
      xhr.send();
    }
  }

}
