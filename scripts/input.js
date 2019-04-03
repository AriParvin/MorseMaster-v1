console.log("ready2")
let points = 0
let tempStr = []
let conStr = []

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
})

Mousetrap.bind("i", function() {
	console.log("dah")
	tempStr.push("i")
	dash.play()
})

Mousetrap.bind("space", function() {
	console.log("space")
	assignChar(tempStr.join(""))

	/* document.getElementById("output").innerText = conStr.join("") COMMENT THIS ASAP */
	/* Checks if correct character */
	if (conStr[conStr.length - 1] == randomCharacter) {
		points++
		randomizeChar()
		document.getElementById("inputField").innerText = randomCharacter
		var hintField = document.querySelector("#hintField")
		hintField.remove()
		createHintField()

	}
	tempStr = []
	wb1.play()
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
