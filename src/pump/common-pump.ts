import { PumpBody } from "./components/body";
import { PumpBranchPipe } from "./components/branch-pipe";
import { PumpEngine } from "./components/engine";
import { Shaft } from "./components/shaft";
import { G } from "./constants";

export interface CommonPumpConstructorParams {
    body: PumpBody;
    innerPipe: PumpBranchPipe;
    outerPipe: PumpBranchPipe;
    engine: PumpEngine;
    shaft: Shaft;
}

export abstract class CommonPump {
    protected body: PumpBody;
    protected innerPipe: PumpBranchPipe;
    protected outerPipe: PumpBranchPipe;
    protected engine: PumpEngine;
    protected shaft: Shaft;

    protected abstract H: number;

    constructor({
        body,
        innerPipe,
        outerPipe,
        engine,
        shaft
    }: CommonPumpConstructorParams) {
        this.body = body;
        this.engine = engine;
        this.innerPipe = innerPipe;
        this.outerPipe = outerPipe;
        this.shaft = shaft;
    }

    protected abstract calculateV(): number;

    public getUsableN ({liquidDestiny}: {liquidDestiny: number}) {
        return this.calculateV() * liquidDestiny * G * this.H;
    }
}
