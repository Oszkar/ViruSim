import { Ball } from "./Ball.js";
import { ColorCode } from "./Stuff.js";
export class Population {
    constructor(headCount, w, h, ctx) {
        this.balls = Array();
        this.balls = new Array();
        while (this.balls.length < headCount) {
            var ball = new Ball(w, h);
            this.balls.push(ball);
        }
        this.renderingContext = ctx;
    }
    // #region Private methods
    draw() {
        for (let ball of this.balls) {
            this.renderingContext.beginPath();
            this.renderingContext.fillStyle = ColorCode[ball.status];
            this.renderingContext.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
            this.renderingContext.fill();
        }
    }
    move() {
        for (let ball of this.balls) {
            ball.move();
        }
    }
    // #endregion
    // #region Public methods
    update() {
        this.move();
        this.draw();
    }
}
//# sourceMappingURL=Population.js.map