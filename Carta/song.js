const player = document.getElementById("player");
const button_player = document.getElementById("button-player");
const needle = document.getElementById("needle");

const play_song = function (){
	player.play();
	player.dataset["state"] = "play";
}

const pause_song = function (){
	player.pause();
	player.dataset["state"] = "pause";
}

const toggle_song = function (){
	if (player.dataset["state"] == "play"){
		player.dataset["state"] = "pause";
		button_player.className = "";
		needle.className = "";
		button_player.innerText = "▲";
		button_player.removeEventListener("click", pause_song);
		button_player.addEventListener("click", play_song);
		pause_song();
	}else{
		player.dataset["state"] = "play";
		button_player.className = "disc";
		needle.className = "needle-on";
		button_player.innerText = "=";
		button_player.removeEventListener("click", play_song);
		button_player.addEventListener("click", pause_song);
		play_song();
	}
}
button_player.addEventListener("click", toggle_song)