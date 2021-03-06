import { Component, OnInit } from '@angular/core';

import { ApplicationService } from 'src/app/service/application-service';
import { ApplicationInfo } from 'src/app/class/model/application-info';

@Component({
  selector: 'app-card',
  templateUrl: 'card.page.html',
  styleUrls: ['card.page.scss'],
})
export class CardPage implements OnInit {

  public is_info_open: boolean;
  public app: ApplicationInfo;

  constructor(private _app: ApplicationService) {
    this.is_info_open = false;
    this._app.get.subscribe((data: ApplicationInfo) => {
      this.app = data;
    });
  }

  ngOnInit() {
  }

  public info_open_and_close(is_open: boolean | undefined = undefined): void {
    is_open = (is_open === undefined ? !this.is_info_open : is_open);
    this.is_info_open = is_open;
  }

}
