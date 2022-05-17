x = 0;
y = 0;

screen_width = 0 ;
screen_height = 0 ;

speak_data = "" ;

apple = "" ;

to_number = "" ;

draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

  
  console.log(event); 

  content = event.results[0][0].transcript;

  document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

  to_number = Number(content);
  if(Number.isInteger(to_number) == true) {
    draw_apple = "set";
  }
else {
    draw_apple = "";
    document.getElementById("status").innerHTML = "The speech has not recognized a number " ;
  }
}

function setup() {
  screen_width = window.innerWidth;
  screen_height = window.innerHeight;

  canvas = createCanvas(screen_width,innerHeight-150);
  canvas.position(0,100)
}

function preload() {
  apple = loadImage("apple.png")
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";

    for (let i = 0; i <= to_number; i++) {
     x = Math.floor(Math.random()  * 1300);
     y = Math.floor(Math.random()  * 400);
    image(apple,x,y,50,50);
    }
    document.getElementById("status").innerHTML = to_number + " Apples drawn" ;
    speak();
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
