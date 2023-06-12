function add_paragraphs(id_element){
	const element = document.getElementById(id_element);

	const wholeText = element.innerHTML;
	const splitText = wholeText.split("\n");
	let newHtml = "";
	for(let i = 0; i < splitText.length; i++){
	   newHtml += "<p class='each-line'>"+splitText[i]+'</p>';
	}
	element.innerHTML = newHtml; // remember element refers to the <p> with the ID of wholeText
}

function update_sheet_height(){
	document.getElementById("sheet").style.minHeight = document.getElementById("letter").clientHeight + "px";
	document.getElementsByTagName("html")[0].style.height = document.getElementById("letter").clientHeight + 200 + "px";
}

window.addEventListener("load", function(){
   add_paragraphs("body-letter");
   update_sheet_height();
}, false);