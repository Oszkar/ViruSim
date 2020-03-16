import { Renderer } from "./Renderer.js"

window.onload = () => {
    var app = new Renderer(document.querySelector('canvas'));
    app.loop();
};