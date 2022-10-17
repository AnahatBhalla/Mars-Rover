canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
images_array=["https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG",
"https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/rcam/RLB_486265291EDR_F0481570RHAZ00323M_.JPG",
"https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631300503690E01_DXXX.jpg",
"mars.jpg"];
random_number=Math.floor(Math.random()*4);

background_image=images_array[random_number];
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
function up(){
if (rover_Y>=0){
rover_Y =rover_Y -10;
uploadBackground();
uploadRover();
}
}

function down(){
    if (rover_Y<=500){
    rover_Y =rover_Y +10;
    uploadBackground();
    uploadRover();
    }
    }

    function left(){
        if (rover_X>=0){
        rover_X =rover_X -10;
        uploadBackground();
        uploadRover();
        }
        }
        
        function right(){
            if (rover_X<=700){
            rover_X =rover_X +10;
            uploadBackground();
            uploadRover();
            }
            }
        
