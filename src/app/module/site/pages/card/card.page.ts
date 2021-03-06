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
  }

  /*public toDataURL(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      const reader = new FileReader();
      reader.onloadend = function () {
        callback(reader.result);
      }
      reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
  }

  this.toDataURL('/assets/lollopic-qrcode.png', function (dataUrl) {
    console.log(dataUrl);
  });*/

}
