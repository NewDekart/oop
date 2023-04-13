import { CommonPump, CommonPumpConstructorParams } from "./common-pump";
import { PumpRotor } from "./components/rotor";
import { PI } from "./constants";

interface RotorPumpConstructorParams extends CommonPumpConstructorParams {
    H: number;
    rotor: PumpRotor;
}

export class RotorPump extends CommonPump {
    protected H: number;
    protected rotor: PumpRotor;

    constructor ({H, rotor, body,
        innerPipe,
        outerPipe,
        engine, shaft}: RotorPumpConstructorParams) {

        super({body, innerPipe, outerPipe, engine, shaft});

        this.H = H;
        this.rotor = rotor;
    }

    protected calculateV(): number {
        return 2 * this.rotor.e * (2 * PI * this.rotor.R - this.rotor.z * this.rotor.S) * this.rotor.b * this.shaft.frequency;
    }

    public getV() {
        return this.calculateV();
    }
}
