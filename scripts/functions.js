const masterStrings = ["This is sentence1", "This is the second sentence", "This would be the third sentence"]

let randomCharacter = ""
let morseCode = ""

const gameTypes = {
	freePlay: false,
	morseMouse: false,
	morseMaster: false,
	morseMasterInstructions: false
}
// const menuReturn = () => {
// 	menuReturnVar = document.getElementByTagName("body").addEventListener("click", function() {
// 		document.classList.add(".container")
// 	})
// }

//Random Char Generator for Morse Mouse
const randomizeChar = () => {
	randomCharacter = randomChars(charLib)
	morseCode = getKeyByValue(charLib, randomCharacter)
}

const randomChars = obj => {
	var chars = Object.keys(obj)
	return obj[chars[(chars.length * Math.random()) << 0]]
}

//Draws Gameboard for Morse Mouse
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
//Hintfield Morse Mouse
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

	//HintField Timeout & Match Listener
	//Problem: Timeout does not reset = hints clone multiple times
	setTimeout(() => {
		console.log(morseCode)
		wb2.play()
		for (let i of morseCode) {
			if (i == "i") {
				console.log("i")
				document.querySelector("#hintField").appendChild(dahVar.cloneNode(true))
			}
			if (i == "o") {
				console.log("o")
				document.querySelector("#hintField").appendChild(ditVar.cloneNode(true))
			}
		}
	}, 10000)
}

//Text Field Free Play
const createTextField = () => {
	/* Removes container */
	var containerDiv = document.querySelector(".container")
	containerDiv.remove()

	var textFieldVar = document.createElement("div")
	textFieldVar.classList.add("textField")
	document.body.appendChild(textFieldVar)

	var outputFieldVar = document.createElement("div")
	outputFieldVar.id = "outputField"
	document.body.appendChild(outputFieldVar)
}

//Prompt Field Morse Master
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
//Maybe Match rdmChars with Input
const getKeyByValue = (object, value) => {
	console.log(Object.keys(object).find(key => object[key] === value))
	return Object.keys(object).find(key => object[key] === value)
}

//Free Play INIT
const startFreePlay = () => {
	gameTypes.freePlay = true
	createTextField()
}

//Morse Mouse INIT
const startMorseMouse = () => {
	gameTypes.morseMouse = true
	createGameBoard()
	randomizeChar()
	document.getElementById("inputField").innerText = randomCharacter
}

//??
nextMasterString = () => {
	var x = document.querySelector(".promptField")
	x.innerText = masterStrings[points]
}
//Morse Master INIT
const startMorseMaster = () => {
	gameTypes.morseMaster = true
	gameTypes.morseMasterInstructions = true
	createPromptField()
	masterInstructions()
}

//Show Key Bindings
function showDesc() {
	let x = document.getElementById("howtoDesc")
	if (x.style.opacity === "100") {
		x.style.opacity = 0
	} else {
		console.log("hello")
		x.style.opacity = 100
	}
}

//Prompted text in Morse Master
const masterInstructions = () => {
	var x = document.querySelector(".promptField")
	x.innerText = "Use your morse knowledge to write the sentences. Press space to start.."
}

//Audio Files
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

//adds period to DOM
const addDit = function(x) {
	var dit = document.createElement("div")
	dit.setAttribute("id", "dit")
	document.querySelector(x).appendChild(dit)
}
//adds dash to DOM
const addDah = function(x) {
	var dah = document.createElement("div")
	dah.setAttribute("id", "dah")
	document.querySelector(x).appendChild(dah)
}

/* probably not need this */
// const addSpace = function() {
// 	var space = document.createElement("div")
// 	space.setAttribute("id", "space")
// 	document.querySelector("inputField").appendChild(space)}
//adds space to DOM
