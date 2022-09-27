canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
background_image="mars.jpg";
rover_image="rover.jpg";
rover_X=10;
rover_Y=10;
rover_width=100;
rover_height=90;

function add(){
    background_imgtag=new Image();
background_imgtag.onload=uploadBackground;
background_imgtag.src=background_image;

rover_imgtag=new Image();
rover_imgtag.onload=uploadRover;
rover_imgtag.src=rover_image;
}
function uploadBackground(){
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}
function uploadRover(){
    ctx.drawImage(rover_imgtag,rover_X,rover_Y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypress=e.keyCode;
    if(keypress=='37'){
        left();
        
    }
    if(keypress=='38'){
        up();
    }if(keypress=='39'){
        right();
    }if(keypress=='40'){
        down();
    }
}