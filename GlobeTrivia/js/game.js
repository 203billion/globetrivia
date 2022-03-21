var score = 0, stage = 0, mistake = 0;

//ACTION FUNCTIONS
function correct() {
    score += 1;
    stage += 1;
    fbText.innerHTML = "You are CORRECT!";
    feedback.style.display = "block";
    feedback.style.backgroundColor = "rgb(77, 250, 54)";
    setTimeout(function(){
        feedback.style.display = "none";
        closebtn.innerHTMl = "";
    }, 1000);
}
function wrong() {
    stage += 1;
    mistake += 1;
    if (mistake == 1) 
        lifeSprite1.style.animationPlayState = "running";
    else if (mistake == 2)
        lifeSprite2.style.animationPlayState = "running";
    else if (mistake == 3) {
        lifeSprite3.style.animationPlayState = "running";
        loseMessage.style.display = "block";
        loseMessageText.innerHTML = "You lost! :(";
        setTimeout(function(){
            window.location.replace("result.html");
        }, 3000);
    }
    feedback.style.display = "block";
    feedback.style.backgroundColor = "red";
}
function result() {
    if (stage == 10) {
        feedbackScore.style.display = "block";
        fbScoreText.innerHTML = "YOU GOT " + score + "/10!";
        setTimeout(function(){
            window.location.replace("result.html");
        }, 3000);
    } /*automatically redirects to the result page after 3 seconds 
      when the game is completed*/
}
//PIN FUNCTIONS
function asiaAnswer() {
    var x = prompt("Is Mt. Everest the tallest Mountain on Earth?");
    if (x == "No" || x == "no" || x == "n") {
        correct();
        result();
        asia.src = "images/grayPin.png";
        asia.style.pointerEvents = "none";
    }

    else if (x == null || x == "") {

    }
    else {
        wrong();
        result();
        fbText.innerHTML = "Incorrect, Mauna Kea is the tallest mountain on Earth.";
        asia.src = "images/grayPin.png";
        asia.style.pointerEvents = "none";
    }
}
function euAnswer() {
    var x = prompt("In which country did French Fries originate? A. France, B. Belgium, or C. Italy");
    if (x == "Belgium" || x == "belgium" || x == "B" || x == "b" || x == "B. Belgium" || x == "B. belgium") {
        correct();
        result();
        eu.src = "images/grayPin.png";
        eu.style.pointerEvents = "none";
    }

    else if (x == null || x == "") {

    }
    else {
        wrong();
        result();
        fbText.innerHTML = "Incorrect, French Fries originated in Belgium.";
        eu.src = "images/grayPin.png";
        eu.style.pointerEvents = "none";
    }
}
function afAnswer() {
    var x = prompt("The largest of its kind, which hot desert can be found in Africa?");
    if (x == "Sahara" || x == "sahara") {
        correct();
        result();
        af.src = "images/grayPin.png";
        af.style.pointerEvents = "none";
    }
    else if (x == null || x == "") {

    }
    else {
        wrong();
        result();
        fbText.innerHTML = "Incorrect, the Sahara desert is the largest hot desert in the world and can be found in Africa.";
        af.src = "images/grayPin.png";
        af.style.pointerEvents = "none";
    }
}
function ausAnswer() {
    var x = prompt("Home to all its native species, Australia is home to which iconic animal?");
    if (x == "Kangaroo" || x == "kangaroo") {
        correct();
        result();
        aus.src = "images/grayPin.png";
        aus.style.pointerEvents = "none";
    }
    else if (x == null || x == "") {

    }
    else {
        wrong();
        result();
        fbText.innerHTML = "Incorrect, the Kangaroo is Australia's national animal with all 4 species native to the continent.";
        aus.src = "images/grayPin.png";
        aus.style.pointerEvents = "none";
    }
}
function pacAnswer() {
    var x = prompt("Which ocean can be found in this region?");
    if (x == "Pacific Ocean" || x == "pacific ocean" || x == "Pacific ocean" || x == "Pacific" || x == "pacific") {
        correct();
        result();
        pac.src = "images/grayPin.png";
        pac.style.pointerEvents = "none";
    }
    else if (x == null || x == "") {

    }
    else {
        wrong();
        result();
        fbText.innerHTML = "Incorrect, this region is recognized as the Pacific Ocean. The largest one in the world.";
        pac.src = "images/grayPin.png";
        pac.style.pointerEvents = "none";
    }
}
function atlAnswer() {
    var x = prompt("Which ocean can be found in this region?");
    if (x == "Atlantic Ocean" || x == "atlantic ocean" || x == "Atlantic ocean" || x == "Atlantic" || x == "atlantic") {
        correct();
        result();
        atl.src = "images/grayPin.png";
        atl.style.pointerEvents = "none";
    }
    else if (x == null || x == "") {

    }
    else {
        wrong();
        result();
        fbText.innerHTML = "Incorrect, the Atlantic ocean is found between the American land masses and the Afro-Eurasia land masses.";
        atl.src = "images/grayPin.png";
        atl.style.pointerEvents = "none";
    } 
}
function rusAnswer() {
    var x = prompt("Which country has the largest land mass to date?");
    if (x == "Russia" || x == "russia") {
        correct();
        result();
        rus.src = "images/grayPin.png";
        rus.style.pointerEvents = "none";
    }
    else if (x == null || x == "") {

    }
    else {
        wrong();
        result();
        fbText.innerHTML = "Incorrect, Russia has the largest land area with 17.1 million km^2.";
        rus.src = "images/grayPin.png";
        rus.style.pointerEvents = "none";
    }
}
function naAnswer() {
    var x = prompt("What is the Capital of Canada?");
    if (x == "Ottawa" || x == "ottawa") {
        correct();
        result();
        na.src = "images/grayPin.png";
        na.style.pointerEvents = "none";
    }
    else if (x == null || x == "") {

    }
    else {
        wrong();
        result();
        fbText.innerHTML = "Incorrect, Ottawa is the capital of Canada.";
        na.src = "images/grayPin.png";
        na.style.pointerEvents = "none";
    }
}
function saAnswer() {
    var x = prompt("Which rainforest can be found in this region?");
    if (x == "Amazon Rainforest" || x == "amazon rainforest" || x == "Amazon rainforest" || x == "Amazon" || x == "amazon") {
        correct();
        result();
        sa.src = "images/grayPin.png";
        sa.style.pointerEvents = "none";
    }
    else if (x == null || x == "") {

    }
    else {
        wrong();
        result();
        fbText.innerHTML = "Incorrect, this region is recognized as the Amazon Rainforest that covers multiple nations.";
        sa.src = "images/grayPin.png";
        sa.style.pointerEvents = "none";
    }
}
function grAnswer() {
    var x = prompt("Politically, is Greenland part of North America or Europe?");
    if (x == "Europe" || x == "europe") {
        correct();
        result();
        gr.src = "images/grayPin.png";
        gr.style.pointerEvents = "none";
    }
    else if (x == null || x == "") {

    }
    else {
        wrong();
        result();
        fbText.innerHTML = "Incorrect, it is recognized as a part of Europe.";
        gr.src = "images/grayPin.png";
        gr.style.pointerEvents = "none";
    }
}