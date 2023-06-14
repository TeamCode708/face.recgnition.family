//variables to store predictions
prediction_1 = "";
prediction_2 = "";
//setting the webcam
Webcam.set({
    width: 350,
    height : 300,
    image_format: 'png',
    png_quality: 90
});
//variable to store the camera div
camera = document.getElementById("camera");
//attaching the webcam
Webcam.attach('#camera');
//function to take the picture
function takeSnapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}
//printing the ml5 version on console screen
console.log('ml5 version : ',ml5.version);
//variable to store the teachable machine model
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/CK5BQsUoM/model.json',modelLoaded);
//function to check if the model is loaded or not
function modelLoaded() {
    console.log('model loaded!');
}
//function to compare the input with the model
function checkSnapshot() {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}
//function to print the prediction
function gotResult(error,results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("faceName1").innerHTML = results[0].label;
        document.getElementById("faceName2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
    }
}