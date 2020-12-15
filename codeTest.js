/* initialize variables and set their values equal to 1*/
var faceValue = 1;
var scarfValue = 1;
var hatValue = 1;
var armRValue = 1;
var armLValue = 1;

/* functions that play the audio and determine which png to change the img element's src to*/
function changeFace() {
    /*call the playAudio function to play the sound associated with the button*/
    playAudio("oolala");

    /*increment the value by 1 unless value is equal to the number of images, else reset value to 1*/
    if (faceValue < 3) {
        faceValue += 1;
    } 
    else if (faceValue == 3) {
        faceValue = 1;
    }

    if (faceValue == 1) {
        /*find the img element by the id 'face' and change its source to the correct png*/
        document.getElementById('face').src = "snowman_images/face_1.png";
    }
    if (faceValue == 2) {
        document.getElementById('face').src = "snowman_images/face_2.png";
    }
    if (faceValue == 3) {
        document.getElementById('face').src = "snowman_images/face_3.png";
    }
}
function changeScarf() {
    playAudio("wonderful");
    if (scarfValue < 6) {
        scarfValue += 1;
    }
    else if (scarfValue == 6) {
        scarfValue = 1;
    }

    if (scarfValue == 1) {
        document.getElementById('scarf').src = "snowman_images/scarf_red.png";
    }
    if (scarfValue == 2) {
        document.getElementById('scarf').src = "snowman_images/scarf_purple.png";
    }
    if (scarfValue == 3) {
        document.getElementById('scarf').src = "snowman_images/scarf_pink.png";
    }
    if (scarfValue == 4) {
        document.getElementById('scarf').src = "snowman_images/scarf_orange.png";
    }
    if (scarfValue == 5) {
        document.getElementById('scarf').src = "snowman_images/scarf_green.png";
    }
    if (scarfValue == 6) {
        document.getElementById('scarf').src = "snowman_images/scarf_blue.png";
    }
}

function changeHat() {
    playAudio("wind");
    if (hatValue < 4) {
        hatValue += 1;
    }
    else if (hatValue == 4) {
        hatValue = 1;
    }

    if (hatValue == 1) {
        document.getElementById('hat').src = "snowman_images/tophat.png";
    }
    if (hatValue == 2) {
        document.getElementById('hat').src = "snowman_images/warmhat.png";
    }
    if (hatValue == 3) {
        document.getElementById('hat').src = "snowman_images/cap.png";
    }
    if (hatValue == 4) {
        document.getElementById('hat').src = "snowman_images/earmuff.png";
    }
}

function changeArmR() {
    playAudio("rustle1");
    if (armRValue < 3) {
        armRValue += 1;
    }
    else if (armRValue == 3) {
        armRValue = 1;
    }

    if (armRValue == 1) {
        document.getElementById('armR').src = "snowman_images/branch_1_r.png";
    }
    if (armRValue == 2) {
        document.getElementById('armR').src = "snowman_images/branch_2_r.png";
    }
    if (armRValue == 3) {
        document.getElementById('armR').src = "snowman_images/branch_3_r.png";
    }
}

function changeArmL() {
    playAudio("rustle2");
    if (armLValue < 3) {
        armLValue += 1;
    }
    else if (armLValue == 3) {
        armLValue = 1;
    }

    if (armLValue == 1) {
        document.getElementById('armL').src = "snowman_images/branch_1_l.png";
    }
    if (armLValue == 2) {
        document.getElementById('armL').src = "snowman_images/branch_2_l.png";
    }
    if (armLValue == 3) {
        document.getElementById('armL').src = "snowman_images/branch_3_l.png";
    }
}


function playAudio(audioID) {
/*get the audio element by the id inputed as a parameter when it is called*/
    var audio = document.getElementById(audioID);
    audio.play();
}