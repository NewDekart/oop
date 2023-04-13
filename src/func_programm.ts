const PI = 3.14;
const G = 9.8;
const DELIMETER = 60;

interface RotorParams {
    e: number;
    R: number;
    S: number;
    b: number;
    z: number;
}

interface PlungerParams {
    stroke: number;
    square: number;
}

type QRotor = (params: RotorParams) => number;
type QPlunger = (params: PlungerParams) => number;

const calculateQ = (getBase: () => number) => {
    return (n: number) => n * getBase();
}

const getRotorBase = (params: RotorParams): number => {
    const {e, R, z, S, b} = params;

    return 2 * e * (2 * PI * R - z * S) * b;
}

const getPlungerBase = (params: PlungerParams): number => {
    const {stroke, square} = params;

    return (stroke * square) / DELIMETER;
}

const getUsableNCalculator = (base: () => number) => {
    return (n: number, liquidDestiny: number, H: number) => {
        return calculateQ(base)(n) * liquidDestiny * H * G;
    }
}

const plungerBase = () => getPlungerBase({square: 0.9, stroke: 0.3});

const resultFunction = getUsableNCalculator(plungerBase);

console.log('Plunger:');
console.log(resultFunction(60, 1, 40));
