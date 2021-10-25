
diff = 0;
rightx = 0;
leftx = 0;

function setup(){
    canvas = createCanvas(750 , 530 );

    video = createCapture(VIDEO);
    video.size(400, 400);

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose',  gotPoses);
}

function modelLoaded(){
    console.log('Posenet is loaded ');
}

function gotPoses(results){

    if(results.length > 0){
        console.log(results);
        leftx = results[0].pose.leftWrist.x;
        rightx = results[0].pose.rightWrist.x;
        diff = floor(leftx - rightx);

        console.log("leftWristx  = " + leftx + "rightWristx" + rightx + "difference = " + diff);
    }

}

function draw(){
    fill("#91ebe9");
    background("white");
    textSize(diff);
    text('Kitty' , 375 , 265 );
    document.getElementById("posi").innerHTML = "Font size :" + diff + "px" ;
}