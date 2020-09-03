let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let red, blue, green;
let startGame;
let score1 = DEFAULT_SCORE;
let score2 = DEFAULT_SCORE;


let ball = new Ball();
ball.drawBall();

let bar1 = new Bars1();
bar1.drawBars1();

let bar2 = new Bars2();
bar2.drawBars2();

let notification = new Notification();

function getRandomColor() {
    red = Math.floor(Math.random() * 255);
    blue = Math.floor(Math.random() * 255);
    green = Math.floor(Math.random() * 255);
    return "rgb(" + red + "," + blue + "," + green + ")";
}

window.addEventListener("keydown", onKeyDown);
// window.addEventListener("keydown", onKeyDown);
window.addEventListener("keyup", onKeyUp);

// window.addEventListener("keyup", onKeyUp1);


function onKeyDown(evt) {
    switch (evt.which) {
        case KEY_LEFT1:
            bar1.isLeft = true;
            break;
        case KEY_LEFT2:
            bar2.isLeft = true;
            break;
        case KEY_RIGHT1:
            bar1.isRight = true;
            break;
        case KEY_RIGHT2:
            bar2.isRight = true;
            break;
    }
}

function onKeyUp(evt) {
    switch (evt.which) {
        case KEY_LEFT1:
            bar1.isLeft = false;
            break;
        case KEY_LEFT2:
            bar2.isLeft = false;
            break;
        case KEY_RIGHT1:
            bar1.isRight = false;
            break;
        case KEY_RIGHT2:
            bar2.isRight = false;
            break;
    }
}

function win() {
    if (score1 >= 11) {
        clearInterval(startGame);
        notification.showPlayer1Win(ctx);
    }
    else if (score2 >= 11){
        clearInterval(startGame);
        notification.showPlayer2Win(ctx);
    }


}

function gameStart() {
    startGame = setInterval(function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ball.drawBall();
        bar1.drawBars1();
        bar2.drawBars2();
        bar1.moveBars();
        bar2.moveBars();
        ball.moveBall1();
        win();
    }, 1)
}


function start() {
    notification.instruction();
    if (confirm("Các bạn đã sẵn sàng chưa")){
        alert("chúng ta lên đườngggggggg");
        gameStart();
    } else {
        reset();
    }

}

function reset() {
    window.location.reload();
}
