interface ShaftConstructorParams {
    frequency: number;
}

export class Shaft {
    protected _frequency: number;

    constructor({frequency}: ShaftConstructorParams) {
        this._frequency = frequency;
    }

    get frequency () {
        return this._frequency;
    }
}
