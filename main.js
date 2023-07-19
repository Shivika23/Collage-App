var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult = function(event){
     
    console.log(event);

    content = event.results[0][0].transcript

    document.getElementById("textbox").innerHTML=content;

    if (content=="selfie") {
        speak()
    }
}

camera=document.getElementById("camera")
Webcam.set({
 width:360,
 height:250,
 image_format:"png",
 png_quality:90
})

function speak() {
    var synth=window.speechSynthesis

    var speak_data="Taking Your selfie in 5 seconds"

    var utterthis= new SpeechSynthesisUtterance(speak_data) ;

    synth.speak(utterthis);

    Webcam.attach(camera);
    timeclick()

    function timeclick() {
        setTimeout(function () {
            take_snapshot1();
            take_snapshot2()
            take_snapshot3()
        }, 8000)
    }


}

function take_snapshot1() {
    Webcam.snap(function(data_uri){
        document.getElementById("one").src = data_uri
    })
}

function take_snapshot2() {
    Webcam.snap(function(data_uri){
        document.getElementById("two").src = data_uri
    })
}

function take_snapshot3() {
    Webcam.snap(function(data_uri){
        document.getElementById("three").src = data_uri
    })
}