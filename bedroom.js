img = "";
model_status = "";
objects = [];

function preload(){
    img = loadImage("734388b2-dbe4-4140-a026-0eff04c9713b.jfif");
  }
  
  
  function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
  }
  
  function modelLoaded() {
    console.log("Model Loaded!")
    model_status = true;
    objectDetector.detect(img, gotResult);
  }
  
  function gotResult(error, results) {
    if (error) {
      console.log(error);
    }
    console.log(results);
    objects = results;
  }
 
function draw() 
{
  image(img, 0, 0, 640, 420);
  if(model_status != "")
      {  
        objectDetector.detect(img, gotResult);
        for (i = 0; i < objects.length; i++) {
          document.getElementById("status").innerHTML = "Status : Object Detected";
          document.getElementById("info").innerHTML = "Number of objects detected are : "+ objects.length;
        }
      }
}