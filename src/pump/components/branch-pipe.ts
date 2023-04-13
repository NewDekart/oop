import { PI } from "../constants";

interface PumpBranchPipeConstructorParams {
    innerDiameter: number;
    outerDiameter: number;
}

export class PumpBranchPipe {
    protected innerDiameter: number;
    protected outerDiameter: number;

    constructor({innerDiameter, outerDiameter}: PumpBranchPipeConstructorParams) {
        this.innerDiameter = innerDiameter;
        this.outerDiameter = outerDiameter;
    }

    public getUsableArea() {
        const thickness = this.outerDiameter - this.innerDiameter;

        return PI * ((this.outerDiameter / 2) - thickness);
    }
}
