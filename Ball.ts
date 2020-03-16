import { getRandom, Status, SpeedLimit } from "./Stuff.js"

export class Ball {
    // #region Private fields

    private velX: number;
    private velY: number;
    private containerW: number;
    private containerH: number;

    // #endregion

    // #region Public fields

    private _x: number;
    public get x(): number {
        return this._x;
    }
    public set x(value: number) {
        this._x = value;
    }
    private _y: number;
    public get y(): number {
        return this._y;
    }
    public set y(value: number) {
        this._y = value;
    }
    private _radius: number;
    public get radius(): number {
        return this._radius;
    }
    public set radius(value: number) {
        this._radius = value;
    }
    private _status: Status;
    public get status(): Status {
        return this._status;
    }
    public set status(value: Status) {
        this._status = value;
    }

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

    move(): void {
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