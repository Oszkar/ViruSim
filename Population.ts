import { Ball } from "./Ball.js"
import { ColorCode } from "./Stuff.js"

export class Population {
    balls = Array<Ball>();
    renderingContext: CanvasRenderingContext2D;

    constructor(headCount, w, h, ctx) {
        this.balls = new Array<Ball>();
        while (this.balls.length < headCount) {
            var ball = new Ball(w, h);
            this.balls.push(ball);
        }
        this.renderingContext = ctx;
    }

    // #region Private methods

    private draw(): void {
        for (let ball of this.balls) {
            this.renderingContext.beginPath();
            this.renderingContext.fillStyle = ColorCode[ball.status];
            this.renderingContext.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
            this.renderingContext.fill();
        }
    }

    private move(): void {
        for (let ball of this.balls) {
            ball.move();
        }
    }

    // #endregion

    // #region Public methods

    update(): void {
        this.move();
        this.draw();
    }

    // #endregion
}