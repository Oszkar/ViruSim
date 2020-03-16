export function getRandom(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}

export function getChoice(a: any, b: any): any {
    return Math.random() < 0.5 ? a : b;
}

export enum Status {
    Healthy,
    Sick,
    Recovered,
    Dead
}

export const ColorCode: { [id in Status]: string } = {
    0: "rgb(0, 0, 255)",
    1: "rgb(255, 0, 255)",
    2: "rgb(0, 255, 0)",
    3: "rgb(50, 50, 50)"
}

export var SpeedLimit: number = 8;

export var HeadCount: number = 100;