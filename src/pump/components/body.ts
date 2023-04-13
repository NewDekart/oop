import { Material } from "../type"

interface PumpBodyConstructorParams {
    material: Material;
    volume: number;
    n: number;
} 

export class PumpBody {
    protected material: Material;
    protected square: number;
    protected n: number;

    constructor({material, volume, n} : PumpBodyConstructorParams) {
        this.material = material;
        this.square = volume;
        this.n = n;
    }

    public getWeight () {
        return this.material.density * this.square;
    }
}
