window.onload = function(){
	clicklistener();	
};

var option = document.getElementsByClassName("options");
var selected;
var pcSelected=["rock","paper","scissors"];
var pc;
var wins=0;
var loses=0;

function clicklistener(){
	for (var i = 0; i < option.length; i++) {
		option[i].addEventListener("click",clicked);
	}
}

function clicked(){
	pc=pcSelected[shuffle()];
	console.log("You select");
	console.log(this.id);
	console.log("computer select");
	console.log(pc);
	if (this.id === pc) {
		console.log("Tie");
	}
	else if (this.id === "rock" && pc === "scissors") {
		console.log(this.id + " win " + pc+" You win");
		wins++;
	}
	else if (this.id === "rock" && pc === "paper"){
		console.log(pc + " win " + this.id +" You lose");
		loses++;
	}
	else if (this.id === "paper" && pc === "rock") {
		console.log(this.id + " win " + pc+" You win");
		wins++;
	}
	else if (this.id === "paper" && pc === "scissors"){
		console.log(pc + " win " + this.id +" You lose");
		loses++;
	}
	else if (this.id === "scissors" && pc === "paper") {
		console.log(this.id + " win " + pc+" You win");
		wins++;

	}
	else if (this.id === "scissors" && pc === "rock"){
		console.log(pc + " win " + this.id +" You lose");
		loses++;
	}
	selected=0;
	document.querySelectorAll("#wins")[0].innerText=wins;
	document.querySelectorAll("#loses")[0].innerText=loses;

}

function shuffle(){
	var ran = Math.floor(Math.random()*3);
	return ran;
}