import { Population } from "./Population.js";
import { HeadCount } from "./Stuff.js";
export class Renderer {
    constructor(canvas) {
        this.canvas = canvas;
        this.width = canvas.width = window.innerWidth - 30;
        this.height = canvas.height = window.innerHeight - 30;
        this.context = this.canvas.getContext('2d');
        this.population = new Population(HeadCount, this.width, this.height, this.context);
    }
    loop() {
        this.context.fillStyle = 'rgba(0, 0, 0, 1)';
        this.context.fillRect(0, 0, this.width, this.height);
        this.population.update();
        window.requestAnimationFrame(() => { this.loop(); });
    }
}
//# sourceMappingURL=Renderer.js.map