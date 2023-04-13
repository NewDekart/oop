import { PlungerPump } from "./pump/plunger-pump";
import { PumpBody } from "./pump/components/body";
import { PumpBranchPipe } from "./pump/components/branch-pipe";
import { PumpEngine } from "./pump/components/engine";
import { MaterialType } from "./pump/type";
import { Shaft } from "./pump/components/shaft";
import { PumpPlunger } from "./pump/components/plunger";
import { PumpRotor } from "./pump/components/rotor";
import { RotorPump } from "./pump/rotor-pump";

function tryPlunger() {
    const body = new PumpBody({material: {type: MaterialType.STEEL, density: 7700}, volume: 3, n: 0.1});
    const innerPipe = new PumpBranchPipe({innerDiameter: 0.15, outerDiameter: 0.2});
    const outerPipe = new PumpBranchPipe({innerDiameter: 0.1, outerDiameter: 0.05});
    const engine = new PumpEngine({power: 2200, voltage: 220, current: 6.3, turn: 930});
    const shaft = new Shaft({frequency: 60});
    const plunger = new PumpPlunger({square: 0.9, stroke: 0.3});

    const pump = new PlungerPump({
        body,
        innerPipe,
        outerPipe,
        engine,
        H: 40,
        shaft,
        plunger
    });

    const usableN = pump.getUsableN({liquidDestiny: 1});


    console.log('Plunger:')
    console.log(`V: ${pump.getV()}`);
    console.log(`Np: ${usableN}`);
}

tryPlunger();

function tryRotor() {
    const body = new PumpBody({material: {type: MaterialType.STEEL, density: 7700}, volume: 3, n: 0.1});
    const innerPipe = new PumpBranchPipe({innerDiameter: 0.15, outerDiameter: 0.2});
    const outerPipe = new PumpBranchPipe({innerDiameter: 0.1, outerDiameter: 0.05});
    const engine = new PumpEngine({power: 2200, voltage: 220, current: 6.3, turn: 930});
    const shaft = new Shaft({frequency: 60});
    const rotor = new PumpRotor({e: 2, R: 10, z: 1, S: 30, b: 0.3});

    const rotorPump = new RotorPump({
        body,
        innerPipe,
        outerPipe,
        engine,
        H: 40,
        shaft,
        rotor
    });

    const usableN = rotorPump.getUsableN({liquidDestiny: 1});

    console.log('Rotor:')
    console.log(`V: ${rotorPump.getV()}`);
    console.log(`Np: ${usableN}`);
} 

tryRotor();
