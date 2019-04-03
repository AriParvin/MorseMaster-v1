let points = 0
let tempStr = []
let conStr = []

//Morse-Alphabet Dict
const charLib = {
	oi: "A",
	iooo: "B",
	ioio: "C",
	ioo: "D",
	o: "E",
	ooio: "F",
	iio: "G",
	oooo: "H",
	oo: "I",
	oiii: "J",
	ioi: "K",
	oioo: "L",
	ii: "M",
	io: "N",
	iii: "O",
	oiio: "P",
	iioi: "Q",
	oio: "R",
	ooo: "S",
	i: "T",
	ooi: "U",
	oooi: "V",
	oii: "W",
	iooi: "X",
	ioii: "Y",
	iioo: "Z",
	iiiii: "0",
	oiiii: "1",
	ooiii: "2",
	oooii: "3",
	ooooi: "4",
	ooooo: "5",
	ioooo: "6",
	iiooo: "7",
	iiioo: "8",
	iiiio: "9",
	oioioi: ".",
	iiooii: ",",
	oiiiio: "'",
	ooiioo: "?"
}
let assignChar = str => {
	conStr.push(charLib[str])
}
Mousetrap.bind("o", function() {
	console.log("dit")
	tempStr.push("o")
	period.play()
	if (gameTypes.morseMaster) {
		console.log("line 56")
		addDit(".promptInputField")
	} else if (gameTypes.freePlay) {
		addDit("#outputFree")
	} else if (gameTypes.morseMouse) {
		addDit("#outputFieldMouse")
	}
})

Mousetrap.bind("i", function() {
	console.log("dah")
	tempStr.push("i")
	dash.play()
	if (gameTypes.morseMaster) {
		console.log("line 56")
		addDah(".promptInputField")
	} else if (gameTypes.freePlay) {
		addDah("#outputFree")
	} else if (gameTypes.morseMouse) {
		addDah("#outputFieldMouse")
	}
})

Mousetrap.bind("space", function() {
	console.log("space")
	assignChar(tempStr.join(""))
	if (gameTypes.morseMasterInstructions) {
		gameTypes.morseMasterInstructions = false
		nextMasterString()
	} else if (gameTypes.morseMouse) {
		outputFieldMouse.remove()
		createFieldMouse()
	} else if (gameTypes.freePlay) {
		var conStrTxt = conStr[conStr.length - 1]
		console.log(conStrTxt)
		//document.getElementsByClassName("textFree").innerText = conStrTxt
		// document.getElementById("inputField").style.color = "black"
		var array = document.getElementsByClassName("textFree")
		var textFree = array[0]
		var newP = document.createElement("p")
		newP.innerText = conStrTxt
		textFree.appendChild(newP)

		tempStr = []
		outputFree.remove()
		createOutputFree()
	}
	// var textFree = document.getElementsByClassName(".textFree")
	// var addStrTxt = document.createElement("div")
	// addStrTxt.id = "conStrTxt"
	// conStrTxt.appendChild(addStrTxt)

	/* document.getElementById("output").innerText = conStr.join("") COMMENT THIS ASAP */
	/* Checks if correct character */
	if (gameTypes.morseMouse) {
		// clear timeouts
		if (conStr[conStr.length - 1] == randomCharacter) {
			points++
			randomizeChar()
			timeoutIds.forEach(function(el) {
				window.clearTimeout(el)
			})
			document.getElementById("inputField").innerText = randomCharacter
			document.getElementById("inputField").style.color = "black"
			var hintField = document.querySelector("#hintField")
			hintField.remove()
			createHintField()
		} else {
			document.getElementById("inputField").style.color = "red"
		}
		tempStr = []
		wb1.play()
	}
})

Mousetrap.bind("s", function() {
	conStr.push(" ")
	hats.play()
})

Mousetrap.bind("backspace", function() {
	conStr.pop("")
	bdr.play()
})
Mousetrap.bind("q", function() {
	console.log("checking...")
	console.log(tempStr)
	console.log(conStr)
})

const masterStrings = ["This is sentence1", "This is the second sentence", "This would be the third sentence"]
const timeoutIds = []
let randomCharacter = ""
let morseCode = ""

const gameTypes = {
	freePlay: false,
	morseMouse: false,
	morseMaster: false,
	morseMasterInstructions: false
}
const menuReturn = () => {
	menuReturnVar = document.getElementByTagName("body").addEventListener("click", function() {
		window.location.href = "http://0.0.0.0:5500/index.html"
	})
}

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

	createFieldMouse()
	createHintField()
}
const createFieldMouse = () => {
	var gameBoardVar = document.querySelector(".gameBoard")
	var outputFieldMouse = document.createElement("div")
	outputFieldMouse.id = "outputFieldMouse"
	gameBoardVar.appendChild(outputFieldMouse)
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
	timeoutIds.push(
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
	)
}

//Text Field Free Play
const createTextField = () => {
	/* Removes container */
	var containerDiv = document.querySelector(".container")
	containerDiv.remove()

	var textFieldVar = document.createElement("div")
	textFieldVar.classList.add("textFree")
	document.body.appendChild(textFieldVar)

	createOutputFree()
}
const createOutputFree = () => {
	var outputFreeVar = document.createElement("div")
	outputFreeVar.id = "outputFree"
	document.body.appendChild(outputFreeVar)
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
