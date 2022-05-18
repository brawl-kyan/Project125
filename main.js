rightWristx = "";
leftWristx = "";
difference = "";
function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    
    canvas = createCanvas(550,550);
    canvas.position(560,150);
    
    poseNet = ml5.poseNet(video,modalLoaded);
    poseNet.on('pose' , gotPoses);
    }
   
    
    function modalLoaded() {
    console.log('PoseNet is a ghost and Watching')    
    }
    function gotPoses(results)
    {
      if(results.length > 0){
        console.log(results);
        
        rightWristx = results[0].pose.rightWrist.x;
        leftWristx = results[0].pose.leftWrist.x;

        difference = floor(leftWristx - rightWristx);
      }  
    }
    function draw(){
      background('#969A97') ;
      textSize(difference);
      fill('#27f59f');
      text("Kyan",50,400);   
      }