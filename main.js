Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("web_camera");


var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("output").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);

     var Content = event.results[0][0].transcript;
     document.getElementById("output").innerHTML = Content;
     console.log(Content);
     
     if(Content == "take my selfie"){
         console.log("teking selfie ---");
         speak();
     }
    
}

function speak(){

    var synth = window.speechSynthesis;

    speak_data = "taking your selfie in 5 seconds...strike a pose!";

    var utter_this = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utter_this);
    Webcam.attach(camera);

    setTimeout(function () 
    {
        take_photo();
        save();        
    },5000);
}

function take_photo(){
    Webcam.snap(function(data_uri){
     document.getElementById("display").innerHTML = "<img id='selfie_image' src="+data_uri+">";
 });
}

function save() 
{
    link = document.getElementById("anchor");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}



