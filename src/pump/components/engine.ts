interface PumpEngineConstructorParams {
    power: number;
    voltage: number;
    current: number;
    turn: number;
} 

export class PumpEngine {
    protected power: number;
    protected voltage: number;
    protected current: number;
    protected turn: number;

    constructor({power, voltage, current, turn} : PumpEngineConstructorParams) {
        this.power = power;
        this.voltage = voltage;
        this.current = current;
        this.turn = turn;
    }

    public getPower() {
        return this.power;
    }
}
