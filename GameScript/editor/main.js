var canvas;
var context;

var GameRun = false;


/// On load function
function onWebLoad() {
    canvas = document.querySelector('canvas');
    console.log(canvas);

    // context
    context = canvas.getContext('2d');
    context.fillRect(100, 100, 100, 100);

    // Setup Controls
    var endGame = document.getElementById('endGame');
    endGame.className = "btn text-muted bg-dark m-1 p-1";
    var endGame = document.getElementById('pauseGame');
    endGame.className = "btn text-muted bg-dark m-1 p-1";
}

function RunGame() {
    if (!GameRun) {
        GameRun = true;

        // Change Which Buttons Are Enabled / Disabled
        var endGame = document.getElementById('runGame');
        endGame.className = "btn text-muted bg-dark m-1 p-1";
        var endGame = document.getElementById('endGame');
        endGame.className = "btn bg-danger m-1 p-1";
        var endGame = document.getElementById('pauseGame');
        endGame.className = "btn bg-warning m-1 p-1";
    }
}

function StopGame() {
    if (GameRun) {
        GameRun = false;

        // Reset Buttons
        var endGame = document.getElementById('runGame');
        endGame.className = "btn bg-success m-1 p-1";
        var endGame = document.getElementById('endGame');
        endGame.className = "btn text-muted bg-dark m-1 p-1";
        var endGame = document.getElementById('pauseGame');
        endGame.className = "btn text-muted bg-dark m-1 p-1";
    }
}