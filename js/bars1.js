class Bars1 {
    constructor()
    {
        this.width = WIDTH_BARS;
        this.height = HEIGHT_BARS;
        this.x = X_BARS1;
        this.y = Y_BARS1;
        this.speed = SPEED;
        this.color = getRandomColor();
        this.isLeft = false;
        this.isRight = false;
    };

    drawBars1()
    {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    };

    moveLeft()
    {
        if (this.isLeft) this.x = this.x - this.speed;
    };

    moveRight() {
        if (this.isRight) this.x = this.x + this.speed;
    }

    moveBars()
    {
        this.moveLeft();
        this.moveRight();

        if (this.x < 0)
        {
            this.x = 0;
        } else if (this.x > canvas.width - this.width)
        {
            this.x = canvas.width - this.width;

        }
    };
}