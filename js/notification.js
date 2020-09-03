class Notification{
    constructor() {
    }
   showPlayer1Win(ctx) {

        ctx.font = ("50px Arial");
        ctx.textAlign = "center";
        ctx.fillText("player 1 Win", canvas.width/2, canvas.height/2 )
       ctx.fillStyle = getRandomColor();
    }
    showPlayer2Win(ctx){

        ctx.font = ("50px Arial");
        ctx.textAlign = "center";
        ctx.fillText("player 2 Win", canvas.width/2, canvas.height/2 )
        ctx.fillStyle = getRandomColor();
    }
    instruction(){
        alert("Người chơi thứ nhất dùng 'Q': Để di chuyển sang trái, 'E': Để di chuyển sang phải");
        alert("Người chơi thứ hai dùng 'Phím left': Để di chuyển sang trái , 'Phím right': Để di chuyển sang phải" );
        alert("Mỗi lần để bóng ra sau thanh chắn bạn cho đối phương 1 điểm và ngược lại");
    }
}