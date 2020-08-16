var createdTime;

var clickedTime;

var reactionTime;

var points = 0;

var times = new Array();

function makeDiversant() {

    var time;

	  	time = Math.random();

	  	time = time * 3000;

	  	setTimeout(function () {

        var top = Math.random();

        top = top * 250;

        var left = Math.random();
        left = left * 300;

        document.getElementById("diversant").style.top = top + "px";

        document.getElementById("diversant").style.left = left + "px";

        document.getElementById("diversant").style.display = "block";

	  	}, time);

	  	createdTime = Date.now();

}

function play() {
    var audio = document.getElementById("audio");
    audio.play();
}

function hero() {
    if (points == 3) {
        document.getElementById("medals").innerHTML = "Աբրիս";
    } else if (points == 5) {
        document.getElementById("medals").innerHTML = "Պատվոգիր";
    } else if (points == 10) {
        document.getElementById("medals").innerHTML = "Հերոսի կոչում";
    } else if (points == 20) {
        document.getElementById("medals").innerHTML = "Լեգենդ";
    } else if (points >= 25) {
        document.getElementById("medals").innerHTML = "Մահվան աստված";
    }
    else {
        console.log(points);
    }
}

function bestTime() {
    times.push(reactionTime);
    times.sort(function (a, b) { return a - b });
    document.getElementById("besttime").innerHTML = times[0];

}

document.getElementById("diversant").onclick = function xax() {

  		clickedTime = Date.now();

  		reactionTime = (clickedTime - createdTime) / 1000;

  		document.getElementById("time").innerHTML = reactionTime;

    play();

  		this.style.display = "none";

    points = points + 1;

    document.getElementById("score").innerHTML = points;

    hero();

    bestTime();

  		makeDiversant();
}


makeDiversant();
