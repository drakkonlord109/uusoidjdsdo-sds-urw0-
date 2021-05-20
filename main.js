var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "'"
    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    speak();
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data = "Taking Selfie in 5 seconds";
    var utterthis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    setTimeout(function() {
        take_snapshot();
        save();
    }, 5000);
}
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach(camera);

if (Content == "take my selfie") {
    console.log("taking selfie --- ");
    speak();
}

function take_snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = "<img id='thanosiswatching.png' src='" + data_uri + "'>"
    });
}

function save() {
    link = document.getElementById("link");
    image = document.getElementById("thanosiswatching.png").src;
    link.href = image;
    link.click();
}