interface RotorConstructorParams {
    e: number;
    R: number;
    S: number;
    b: number;
    z: number;
}

export class PumpRotor {
    protected _e: number;
    protected _R: number;
    protected _S: number;
    protected _b: number;
    protected _z: number;

    constructor({e, R, b, z, S}: RotorConstructorParams) {
        this._e = e;
        this._R = R;
        this._S = S;
        this._b = b;
        this._z = z;
    }

    get e () {
        return this._e;
    }

    get R () {
        return this._R;
    }

    get S () {
        return this._S;
    }

    get b () {
        return this._b;
    }

    get z () {
        return this._z;
    }
}
