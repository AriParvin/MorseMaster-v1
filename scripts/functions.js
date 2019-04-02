console.log("ready3")

const gameTypes = {
	freePlay: false,
	morseMouse: false,
	morseMaster: false
}

const startMorseMouse = () => {
	gameTypes.morseMouse = true
	var elem = document.querySelector(".container")
	elem.remove()

	var randomChars = function(obj) {
		var chars = charLib.keys(obj)
		return obj[keys[(chars.length * Math.random()) << 0]]
	}

	var gameBoardVar = document.createElement("div")
	gameBoardVar.innerHTML = "CLICK ME"
	gameBoardVar.style.height = "500px"
	gameBoardVar.style.width = "500px"
	gameBoardVar.style.backgroundColor = "papayawhip"
	gameBoardVar.classList.add("gameBoard")

	document.body.appendChild(gameBoardVar)

	var randomGen = document.createElement("div")
	randomGen.classList.add("randomGen")
	randomGen.innerHTML = randomChars()
}

// const noEmpties = function(arr) {
// 	var x = tempStr.filter(function(el) {
// 		return el != null
// 	})
// 	return x
// }

function showDesc() {
	let x = document.getElementById("howtoDesc")
	if (x.style.opacity === "0") {
		x.style.opacity = 1
	} else {
		console.log("hello")
		x.style.opacity = 0
	}
}
var period = new Audio("../assets/samples/period.mp3")
period.load()
var dash = new Audio("../assets/samples/dash.mp3")
dash.load()
var wb1 = new Audio("../assets/samples/Woodblock 1 copy.wav")
wb1.load()
var wb2 = new Audio("../assets/samples/Woodblock 3 copy.wav")
wb2.load()
var snr = new Audio("../assets/samples/Snare 10 copy.wav")
snr.load()
var bdr = new Audio("../assets/samples/Kick 17.wav")
bdr.load()
var hats = new Audio("../assets/samples/Hihat 22 copy.wav")
hats.load()

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
