console.log("ready3")

let randomCharacter = ""
let morseCode = ""
const gameTypes = {
	freePlay: false,
	morseMouse: false,
	morseMaster: false
}
/* const menuReturn  {
	document.getElementByTagName("body")
} */
const randomizeChar = () => {
	randomCharacter = randomChars(charLib)
	morseCode = getKeyByValue(charLib, randomCharacter)
}

const randomChars = obj => {
	var chars = Object.keys(obj)
	return obj[chars[(chars.length * Math.random()) << 0]]
}

const createGameBoard = () => {
	/* Removes container */
	var containerDiv = document.querySelector(".container")
	containerDiv.remove()

	var gameBoardVar = document.createElement("div")
	gameBoardVar.classList.add("gameBoard")
	document.body.appendChild(gameBoardVar)

	var inputFieldVar = document.createElement("div")
	inputFieldVar.id = "inputField"
	gameBoardVar.appendChild(inputFieldVar)

	createHintField()
}

const createHintField = () => {
	console.log("hintfield created")
	var gameBoardVar = document.querySelector(".gameBoard")
	var hintField = document.createElement("div")
	hintField.id = "hintField"
	gameBoardVar.appendChild(hintField)

	var ditVar = document.createElement("div")
	ditVar.id = "dit"
	/* ditVar.style.height = "200px" */
	var dahVar = document.createElement("div")
	dahVar.id = "dah"

	setTimeout(() => {
		console.log(morseCode)

		for (let i of morseCode) {
			if (i == "i") {
				dash.play()
				console.log("i")
				document.querySelector("#hintField").appendChild(dahVar.cloneNode(true))
			}
			if (i == "o") {
				period.play()
				console.log("o")
				document.querySelector("#hintField").appendChild(ditVar.cloneNode(true))
			}
		}
	}, 2000)
}

const createTextField = () => {
	/* Removes container */
	var containerDiv = document.querySelector(".container")
	containerDiv.remove()

	var textFieldVar = document.createElement("div")
	textFieldVar.classList.add("textField")
	document.body.appendChild(textFieldVar)

	var outputFieldVar = document.createElement("div")
	outputFieldVar.id = "outputField"
	textFieldVar.appendChild(outputFieldVar)
}
const createPromptField = () => {
	var containerDiv = document.querySelector(".container")
	containerDiv.remove()

	var promptFieldVar = document.createElement("div")
	promptFieldVar.classList.add("promptField")
	document.body.appendChild(promptFieldVar)

	var promptVar = document.createElement("div")
	promptVar.id = "prompt"
	promptFieldVar.appendChild(promptVar)

	var promptInputVar = document.createElement("div")
	promptInputVar.classList.add("promptInputField")
	document.body.appendChild(promptInputVar)
}

const getKeyByValue = (object, value) => {
	console.log(Object.keys(object).find(key => object[key] === value))
	return Object.keys(object).find(key => object[key] === value)
}
const startFreePlay = () => {
	gameTypes.freePlay = true
	createTextField()
}

const startMorseMouse = () => {
	gameTypes.morseMouse = true
	createGameBoard()
	randomizeChar()
	document.getElementById("inputField").innerText = randomCharacter
}
const startMorseMaster = () => {
	gameTypes.morseMaster = true
	createPromptField()
}
function showDesc() {
	let x = document.getElementById("howtoDesc")
	if (x.style.opacity === "100") {
		x.style.opacity = 0
	} else {
		console.log("hello")
		x.style.opacity = 100
	}
}
var period = new Audio("../assets/samples/period.wav")
period.load()
var dash = new Audio("../assets/samples/dash.wav")
dash.load()
var wb1 = new Audio("../assets/samples/Woodblock1copy.wav")
wb1.load()
var wb2 = new Audio("../assets/samples/Woodblock3copy.wav")
wb2.load()
var snr = new Audio("../assets/samples/Snare10copy.wav")
snr.load()
var bdr = new Audio("../assets/samples/Kick17.wav")
bdr.load()
var hats = new Audio("../assets/samples/Hihat22copy.wav")
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
