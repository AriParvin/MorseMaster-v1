//Morse Master INIT
const startMorseMaster = () => {
	gameTypes.morseMaster = true
	gameTypes.morseMasterInstructions = true
	createPromptField()
	masterInstructions()
	menuReturn()
	createPromptOutput()
}

//Prompted text in Morse Master
const masterInstructions = () => {
	var x = document.querySelector(".promptField")
	x.innerText = "Press space to start.."
}

const createSpan = () => {
	document.querySelector(".promptField")
	var span = document.createElement("SPAN")
	span.classList.add("span")
	return document.querySelector(".promptField").appendChild(span)
}

const nextMasterWord = () => {
	createSpan()

	var x = document.querySelector(".span")
	x.innerText = randomWord()
}
const randomWord = () => {
	var random = masterWords[(masterWords.length * Math.random()) << 0]
	return random
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
}
const createPromptOutput = () => {
	var promptOutputVar = document.createElement("div")
	promptOutputVar.classList.add("promptOutputField")
	document.body.appendChild(promptOutputVar)
}

// for (var i = 0; i < wordArray.length; i++) {
// 	//building the words with spans around the letters
// 	var span = document.createElement("span")
// 	span.classList.add("span")
// 	span.innerHTML = wordArray[i]
// }
// spans = document.querySelectorAll(".span")
