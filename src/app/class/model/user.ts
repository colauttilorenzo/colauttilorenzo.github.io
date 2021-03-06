// ---------------- libraries ---------------
// ---------------- libraries ---------------

import { ModelBase } from "src/app/class/base/model-base";
import { IUser } from "src/app/class/interface/i-user";


export class User extends ModelBase implements IUser {
    public id!: string;
    public mail!: string;
    public password!: string;
    public firstname!: string;
    public secondname!: string;

    constructor(obj: any = {}) {
        super();
        this.builder(obj);
    }

    public get isempty(): boolean {
        return (typeof(this.id) !== 'undefined' && this.id !== '') === false;
    }
}