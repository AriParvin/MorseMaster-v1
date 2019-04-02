console.log("ready3")

let randomCharacter = ""
let morseCode = ""
const gameTypes = {
	freePlay: false,
	morseMouse: false,
	morseMaster: false
}

const randomizeChar = () => {
	randomCharacter = randomChars(charLib)
	morseCode = getKeyByValue(charLib, randomCharacter)
}

const randomChars = obj => {
		var chars = Object.keys(obj)
		return obj[chars[(chars.length * Math.random()) << 0]]
	}

const createGameBoard=()=>{
	/* Removes container */
	var containerDiv = document.querySelector(".container")
	containerDiv.remove()

	var gameBoardVar = document.createElement("div")
	gameBoardVar.classList.add("gameBoard")
	document.body.appendChild(gameBoardVar)

	var inputFieldVar = document.createElement("div")
	inputFieldVar.id="inputField"
	gameBoardVar.appendChild(inputFieldVar)

	
}

	const getKeyByValue = (object, value) => {
		console.log(Object.keys(object).find(key => object[key] === value))
  		return Object.keys(object).find(key => object[key] === value);
	}


const startMorseMouse = () => {
	gameTypes.morseMouse = true
	createGameBoard()
	randomizeChar()
	document.getElementById("inputField").innerText = randomCharacter

	var ditVar = document.createElement("div")
	ditVar.id="dit"
	/* ditVar.style.height = "200px" */
	var dahVar = document.createElement("div")
	dahVar.id="dah"

	

	

	setTimeout(() => {
		console.log(morseCode)
		for (let i of morseCode){
			if (i == "i"){
				console.log("i")
				document.querySelector(".gameBoard").appendChild(dahVar.cloneNode(true))
			}
			if (i == "o"){
				console.log("o")
				document.querySelector(".gameBoard").appendChild(ditVar.cloneNode(true))
			}
		}

	}, 5000);
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
