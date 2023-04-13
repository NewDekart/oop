interface PumpPlungerConstructorParams {
    square: number;
    stroke: number;
}

export class PumpPlunger {
    protected _square: number;
    protected _stroke: number;

    constructor({square, stroke}: PumpPlungerConstructorParams) {
        this._square = square;
        this._stroke = stroke;
    }

    get square() {
        return this._square;
    }

    get stroke() {
        return this._stroke;
    }
}
