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
}) //Binds i to dit and pushes 0 to tempStr

Mousetrap.bind("i", function() {
	console.log("dah")
	tempStr.push("i")
	dash.play()
}) //Binds o to dah and pushes 1 to tempStr

Mousetrap.bind("space", function() {
	console.log("space")
	assignChar(tempStr.join(""))

	/* document.getElementById("output").innerText = conStr.join("") COMMENT THIS ASAP */ 

	if (conStr[conStr.length-1] == randomCharacter){
		points++
		randomizeChar()
		document.getElementById("inputField").innerText = randomCharacter
	}
	tempStr = []
	wb1.play()
}) //Binds space to nextChar

Mousetrap.bind("s", function() {
	conStr.push(" ")
	snr.play()
})
//binds s to newWord (no empties)
Mousetrap.bind("backspace", function() {
	conStr.pop("")
	bdr.play()
})
Mousetrap.bind("q", function() {
	console.log("checking...")
	console.log(tempStr)
	console.log(conStr)
})
