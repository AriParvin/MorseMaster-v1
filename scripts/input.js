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
		addDit("#outputField")
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
		addDah("#outputField")
	}
})

Mousetrap.bind("space", function() {
	console.log("space")
	assignChar(tempStr.join(""))
	if (gameTypes.morseMasterInstructions) {
		gameTypes.morseMasterInstructions = false
		nextMasterString()
	}

	if (gameTypes.morseMaster) {
		/* WRITE STUFF HERE */
	}

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
