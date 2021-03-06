import '../extension/object'
import { IApplicationInfo } from '../interface/i-application-info';
import { ModelBase } from '../base/model-base';

export class ApplicationInfo extends ModelBase implements IApplicationInfo {
  constructor(environment: ApplicationInfo|undefined = undefined) {
      super(environment);
  }

  public production: boolean = false;
  public title?: string;
  public description?: string;
  public short_description?: string;
  public version?: string;
  public keydatastorage: string = 'key';
  public server_api: string = 'localhost';
}