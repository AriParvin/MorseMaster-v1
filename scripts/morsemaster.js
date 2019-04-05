var pSlice;
var tempRandom;
var success = true


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

const nextMasterWord = () => {

	var x = document.querySelector(".promptField")
	x.innerHTML = randomWord()
}
const randomWord = () => {
	console.log("line 27, master",success)
	if (success){
		console.log("line 29, master")
		tempRandom = masterWords[(masterWords.length * Math.random()) << 0]
		success = false
		pSlice = 0
	}

	
	return `<p><span style="color:green">${tempRandom.slice(0,pSlice)}</span>${tempRandom.slice(pSlice)}</p>`
	/* ${conStr.join("")} */
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

