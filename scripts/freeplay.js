//Free Play INIT
const startFreePlay = () => {
	gameTypes.freePlay = true
	createTextField()
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
const removeLast = () => {
	var select = document.getElementsByClassName("textFree")
	select.removeChild(select.lastChild)
}
