console.log("ready3")

// const noEmpties = function(arr) {
// 	var x = tempStr.filter(function(el) {
// 		return el != null
// 	})
// 	return x
// }
function play() {
	var hats = document.getElementById("hats")
	var snare = document.getElementById("snare")
	var kick = document.getElementById("kick")
	//var wb1 = document.getElementById("wb1")
	//var wb2 = document.getElementById("wb2")
}

const addDit = function() {
	var dit = document.createElement("div")
	dit.setAttribute("id", "dit")
	document.getElementById("inputField").appendChild(dit)
} //adds dit to DOM

const addDah = function() {
	var dah = document.createElement("div")
	dah.setAttribute("id", "dah")
	document.getElementById("inputField").appendChild(dah)
} //adds dah to DOM

const addSpace = function() {
	var space = document.createElement("div")
	space.setAttribute("id", "space")
	document.getElementById("inputField").appendChild(space)
} //adds space to DOM
