//Morse Master INIT
const startMorseMaster = () => {
	gameTypes.morseMaster = true
	gameTypes.morseMasterInstructions = true
	createPromptField()
	masterInstructions()
}

//Prompted text in Morse Master
const masterInstructions = () => {
	var x = document.querySelector(".promptField")
	x.innerText = "Use your morse knowledge to write the sentences. Press space to start.."
}
nextMasterString = () => {
	var x = document.querySelector(".promptField")
	x.innerText = masterStrings[points]
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

	createPromptOutput()
}
const createPromptOutput = () => {
	var promptOutputVar = document.createElement("div")
	promptOutputVar.classList.add("promptOutputField")
	document.body.appendChild(promptOutputVar)
}
