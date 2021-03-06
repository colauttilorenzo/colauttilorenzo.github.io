// ---------------- libraries ---------------
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// ---------------- libraries ---------------

import 'src/app/class/extension/object';
import { ApplicationInfo } from 'src/app/class/model/application-info';
import { HttpServiceBase } from 'src/app/service/base/http-service-base';
import { StorageService } from 'src/app/service/storage-service';


@Injectable()
export class ApplicationService extends HttpServiceBase {

    private readonly CONST_STORAGE_KEY: string = 'data';

    private _data: BehaviorSubject<ApplicationInfo>;
    public data: Observable<ApplicationInfo>;

    constructor(http: HttpClient, private store: StorageService) {
        super(http);

        const localdata = Object.cast(this.ENVIRONMENT, ApplicationInfo);

        this._data = new BehaviorSubject<ApplicationInfo>(localdata);
        this.data = this._data.asObservable();
    }

    private set set(value: ApplicationInfo) {
        this._data.next(value);
        this.store.save(this.CONST_STORAGE_KEY, value);
    }   

    public get get(): Observable<ApplicationInfo> {
        const result: Observable<ApplicationInfo> = this.data;
        return result;
    }

}