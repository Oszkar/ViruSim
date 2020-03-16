import { getRandom, Status, SpeedLimit } from "./Stuff.js";
export class Ball {
    // #endregion
    constructor(w, h) {
        // starting position
        // TODO might want to handle cases when balls are spawned on top of each other
        this.x = getRandom(0, w);
        this.y = getRandom(0, h);
        // TODO constant speed might be better in that case, we need to randomize angle explicitly
        this.velX = getRandom(-SpeedLimit, SpeedLimit);
        this.velY = getRandom(-SpeedLimit, SpeedLimit);
        this.radius = 12;
        // TODO storing w and h in all of the balls is not efficient
        this.containerW = w;
        this.containerH = h;
        this.status = Status.Healthy;
    }
    get x() {
        return this._x;
    }
    set x(value) {
        this._x = value;
    }
    get y() {
        return this._y;
    }
    set y(value) {
        this._y = value;
    }
    get radius() {
        return this._radius;
    }
    set radius(value) {
        this._radius = value;
    }
    get status() {
        return this._status;
    }
    set status(value) {
        this._status = value;
    }
    move() {
        if ((this.x + this.radius) >= this.containerW) {
            this.velX = -(this.velX);
        }
        if ((this.x - this.radius) <= 0) {
            this.velX = -(this.velX);
        }
        if ((this.y + this.radius) >= this.containerH) {
            this.velY = -(this.velY);
        }
        if ((this.y - this.radius) <= 0) {
            this.velY = -(this.velY);
        }
        this.x += this.velX;
        this.y += this.velY;
    }
}
//# sourceMappingURL=Ball.js.map