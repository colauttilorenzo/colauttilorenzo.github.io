export class ModelBase extends Object {

    protected constructor(object: any = undefined) {
        super();
        if (object !== undefined && object !== null) {
            this.builder(object);
        }
    }

    public builder<T extends ModelBase>(obj: any): void {
        obj && Object.assign(this, obj);
    }

    public get isempty(): boolean {
        return Object.keys(this).length === 0;
    }

}