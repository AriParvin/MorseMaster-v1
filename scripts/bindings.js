Mousetrap.bind("s", function() {
	conStr.push(" ")
	hats.play()
	if (gameTypes.freePlay) {
		var array = document.getElementsByClassName("textFree")
		var textFree = array[0]
		var newSpace = document.createElement("p")
		newSpace.innerText = " "
		textFree.appendChild(newSpace)
	}
})

Mousetrap.bind("backspace", function() {
	conStr.pop("")
	bdr.play()
	if (gameTypes.freePlay) {
		removeLast()
	}
})
Mousetrap.bind("q", function() {
	console.log("checking...")
	console.log(tempStr)
	console.log(conStr)
})
Mousetrap.bind("o", function() {
	console.log("dit")
	tempStr.push("o")
	period.play()
	if (gameTypes.morseMaster) {
		console.log("line 56")
		addDit(".promptOutputField")
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
		addDah(".promptOutputField")
	} else if (gameTypes.freePlay) {
		addDah("#outputFree")
	} else if (gameTypes.morseMouse) {
		addDah("#outputFieldMouse")
	}
})

Mousetrap.bind("space", function() {
	console.log("space")
	wb1.play()
	assignChar(tempStr.join(""))
	if (gameTypes.morseMasterInstructions) {
		gameTypes.morseMasterInstructions = false
		nextMasterWord()
	} else if (gameTypes.morseMaster) {
		tempStr = []
		document.querySelector(".promptOutputField").remove()
		createPromptOutput()

		if (conStr[conStr.length - 1] == tempRandom[pSlice]) {
			pSlice++
			nextMasterWord()
		}





	} else if (gameTypes.morseMouse) {
		outputFieldMouse.remove()
		createFieldMouse()
	} else if (gameTypes.freePlay) {
		var conStrTxt = conStr[conStr.length - 1]
		if (conStrTxt !== undefined) {
			console.log(conStrTxt)
			//document.getElementsByClassName("textFree").innerText = conStrTxt
			// document.getElementById("inputField").style.color = "black"
			var array = document.getElementsByClassName("textFree")
			var textFree = array[0]
			var newP = document.createElement("p")
			newP.innerText = conStrTxt
			textFree.appendChild(newP)
		}
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
