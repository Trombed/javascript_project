import Game from "./game";


// const GameView = require("./game_view");


document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("game-canvas")
    const ctx = canvas.getContext("2d");
    const canvasWidth = canvas.width
    const canvasHeight = canvas.height
    ctx.fillStyle = "white";
    ctx.fillRect(0,0, canvasWidth,canvasHeight);
    const game = new Game(ctx, canvas);
  });