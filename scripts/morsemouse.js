//Morse Mouse INIT
const startMorseMouse = () => {
	gameTypes.morseMouse = true
	createGameBoard()
	randomizeChar()
	menuReturn()
	document.getElementById("inputField").innerText = randomCharacter
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
		}, 8000)
	)
}

const randomizeChar = () => {
	randomCharacter = randomChars(charLib)
	morseCode = getKeyByValue(charLib, randomCharacter)
}

const randomChars = obj => {
	var chars = Object.keys(obj)
	return obj[chars[(chars.length * Math.random()) << 0]]
}
