export function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}
export function getChoice(a, b) {
    return Math.random() < 0.5 ? a : b;
}
export var Status;
(function (Status) {
    Status[Status["Healthy"] = 0] = "Healthy";
    Status[Status["Sick"] = 1] = "Sick";
    Status[Status["Recovered"] = 2] = "Recovered";
    Status[Status["Dead"] = 3] = "Dead";
})(Status || (Status = {}));
export const ColorCode = {
    0: "rgb(0, 0, 255)",
    1: "rgb(255, 0, 255)",
    2: "rgb(0, 255, 0)",
    3: "rgb(50, 50, 50)"
};
export var SpeedLimit = 8;
export var HeadCount = 100;
//# sourceMappingURL=Stuff.js.map