import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import 'src/app/class/extension/string';
import { ApplicationInfo } from 'src/app/class/model/application-info';
import { ApplicationService } from 'src/app/service/application-service';

import { env } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  public app: ApplicationInfo;

  constructor(private _title: Title, private _app: ApplicationService) { 
    this._app.get.subscribe((data: ApplicationInfo) => {
      this.app = data;
      this._title.setTitle('${title} - ${short_description}'.formatUnicorn({ title: this.app.title, short_description: this.app.short_description }));
    });
  }

  ngOnInit(): void {
    console.log('%cATTENZIONE! 🤌', 'color: #e53e3e; font-size: 3em;');
    console.log('%cTu non dovresti essere qua. Ma tranquillo non sono arrabbiato con te ed anche se hai osato sfidarmi, all\'interno della variabile window potresti trovare una funzione che ti aiuterà a trasformare le tue immagini preferite in una stringa base64. 😲', 'color: rgba(255, 255, 102, 1); font-size: 1.5em;');

    //funzione ninja nascosta in window per trasformare le immagini
    //(prese con una chiamata ajax) in base64.
    //ma... ssssssht non ditelo a nessuno 👀
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
    };
  }
}
