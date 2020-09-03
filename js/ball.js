class Ball {
    constructor() {
        this.x = X_BALL;
        this.y = Y_BALL;
        this.radius = RADIUS;
        this.color = BALL_COLOR;
        this.Xspeed = X_SPEED;
        this.Yspeed = Y_SPEED;
    }

    drawBall() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    };

    moveX() {
        this.x = this.x + this.Xspeed;
    };

    moveY() {
        this.y = this.y + this.Yspeed;
    };

    moveBall1() {
        this.moveX();
        this.moveY();

        if (this.x > canvas.width - this.radius || this.x < this.radius) {
            this.Xspeed = -this.Xspeed;
        }
        if (this.y < this.radius){
            this.Yspeed = -this.Yspeed
            score1++;
            document.getElementById("player1").innerHTML = score1 ;
        }
        if (this.y > canvas.height - this.radius){
            this.Yspeed = -this.Yspeed
            score2++;
            document.getElementById("player2").innerHTML = score2;
        }
        if (this.x < bar1.x+bar1.width && this.y < bar1.y+bar1.height &&
            this.x > bar1.x-bar1.width && this.y > bar1.y-bar1.height){
            this.Yspeed = -this.Yspeed
        }
        if (this.x < bar2.x+bar2.width && this.y < bar2.y+bar2.height &&
            this.x > bar2.x-bar2.width && this.y > bar2.y-bar2.height){
            this.Yspeed = (-this.Yspeed);
        }
    };
}
