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
	conStr.push(charLib[str])
}
Mousetrap.bind("o", function() {
	console.log("dit")
	tempStr.push("o")
	wb1.play()
}) //Binds i to dit and pushes 0 to tempStr

Mousetrap.bind("i", function() {
	console.log("dah")
	tempStr.push("i")
	wb2.play()
}) //Binds o to dah and pushes 1 to tempStr

Mousetrap.bind("space", function() {
	console.log("space")
	assignChar(tempStr.join(""))
	document.getElementById("output").innerText = conStr.join("")
	tempStr = []
	snr.play()
}) //Binds space to nextChar

Mousetrap.bind("s", function() {
	conStr.push(" ")
	hats.play()
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
