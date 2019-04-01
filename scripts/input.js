console.log("ready2")

let tempStr = []
let conStr = []

let assignChar = str => {
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
		oiiii: "1"
	}
	conStr.push(charLib[str])
}
Mousetrap.bind("o", function() {
	console.log("dit")
	//snare.play()
	//addDit()
	tempStr.push("o")
}) //Binds i to dit and pushes 0 to tempStr

Mousetrap.bind("i", function() {
	console.log("dah")
	//hats.play()
	//addDah()
	tempStr.push("i")
}) //Binds o to dah and pushes 1 to tempStr

Mousetrap.bind("space", function() {
	console.log("space")
	//kick.play()
	assignChar(tempStr.join(""))
	document.getElementById("output").innerText = conStr.join("")
	tempStr = []
}) //Binds space to nextChar

Mousetrap.bind("s", function() {
	conStr.push(" ")
	/* textArr.push(conStr.join(""))
	document.getElementById("output").innerText = textArr.join(" ")
	conStr = [] */
})
//binds s to newWord (no empties)
Mousetrap.bind("backspace", function() {
	document.querySelector("inputField")
	inputField.removeChild(".div")
})
Mousetrap.bind("q", function() {
	console.log("checking...")
	console.log(tempStr)
	console.log(conStr)
	console.log(textArr)
})
