var SpeechRecongnition = window.webkitSpeechRecognition;
var recognition = new SpeechRecongnition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) {

    console.log(event);

    var Content = event.result[0][0].transcript;
    console.log(event);

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
         speak();
}
function speak(){
    var synth = window.speechSynthesis;

    speak_data = document.getElementById("textbox").value;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    Webcam.attah(camera);
}
Webcam.set({
    width:400,
    height:300,
    image_format : 'png',
    png_quality:90
});
camera = document.getElementById("camera");