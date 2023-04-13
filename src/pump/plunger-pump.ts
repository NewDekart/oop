import { CommonPump, CommonPumpConstructorParams } from "./common-pump";
import { PumpPlunger } from "./components/plunger";

interface PlungerPumpConstructorParams extends CommonPumpConstructorParams {
    H: number;
    plunger: PumpPlunger;
}

const DELIMETER = 60;

export class PlungerPump extends CommonPump {
    protected H: number;
    protected plunger: PumpPlunger;

    constructor ({H, plunger, body,
        innerPipe,
        outerPipe,
        engine, shaft}: PlungerPumpConstructorParams) {

        super({body, innerPipe, outerPipe, engine, shaft});

        this.H = H;
        this.plunger = plunger;
    }

    protected calculateV(): number {
        return (this.plunger.square * this.plunger.stroke * this.shaft.frequency) / DELIMETER;
    }

    public getV() {
        return this.calculateV();
    }
}
