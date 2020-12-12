var faceValue = 1;
function changeFace() {
    playAudio("audio1");
    if (faceValue < 4) {
        faceValue += 1;
    } 
    else if (faceValue == 4) {
        faceValue = 1;
    }

    if (faceValue == 1) {
        document.getElementById('face').src = "face 1.png";
    }
    if (faceValue == 2) {
        document.getElementById('face').src = "face 2.png";
    }
    if (faceValue == 3) {
        document.getElementById('face').src = "face 3.png";
    }
    if (faceValue == 4) {
        document.getElementById('face').src = "face 4.png";
    }

}

function playAudio(audioID) {
    var audio = document.getElementById(audioID);
    audio.play();
}