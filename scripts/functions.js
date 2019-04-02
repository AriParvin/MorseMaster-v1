console.log("ready3")

// const noEmpties = function(arr) {
// 	var x = tempStr.filter(function(el) {
// 		return el != null
// 	})
// 	return x
// }
function showDesc() {
	let x = document.getElementById("howtoDesc")
	if (x.style.display === "none") {
		x.style.display = "flex"
	} else {
		x.style.display = "none"
	}
}
var period = new Audio("../assets/samples/period.mp3")
period.load()
var dash = new Audio("../assets/samples/dash.mp3")
dash.load()
var wb1 = new Audio("../assets/samples/Woodblock 1 copy.wav")
wb1.load()
var snr = new Audio("../assets/samples/Snare 10 copy.wav")
snr.load()
var bdr = new Audio("../assets/samples/Kick 17.wav")
bdr.load()

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
