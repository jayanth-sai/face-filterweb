function preload(){

}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
  }
  
  function modelLoaded() {
      console.log('Model Loaded!');
  }
  
  