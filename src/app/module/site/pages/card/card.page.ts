import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: 'card.page.html',
  styleUrls: ['card.page.scss'],
})
export class CardPage implements OnInit {

  public is_info_open: boolean;

  constructor() {
    this.is_info_open = false;
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

  public info_open_and_close(is_open: boolean|undefined = undefined): void {
    is_open = (is_open === undefined ? !this.is_info_open : is_open);
    this.is_info_open = is_open;
  }

}
