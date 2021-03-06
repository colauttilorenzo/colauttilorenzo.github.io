// ---------------- libraries ---------------
import { Injectable } from '@angular/core';
// ---------------- libraries ---------------

import { env } from 'src/environments/environment';
import { ApplicationInfo } from 'src/app/class/model/application-info';


@Injectable()
export abstract class ServiceBase {

    public readonly ENVIRONMENT: ApplicationInfo = env;

    constructor() {

    }
    

}