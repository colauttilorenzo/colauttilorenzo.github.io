// ---------------- libraries ---------------
// ---------------- libraries ---------------

import { ModelBase } from "src/app/class/base/model-base";
import { IAuthenticationToken } from 'src/app/class/interface/i-authentication-token';
import { User } from "src/app/class/model/user";

export class AuthenticationToken extends ModelBase implements IAuthenticationToken {
    public isLogged: boolean;
    public id?: string;
    public expired?: Date;
    public user?: User;

    constructor() {
        super();

        this.isLogged = false;
    }
}