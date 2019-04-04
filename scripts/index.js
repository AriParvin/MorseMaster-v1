let points = 0
let tempStr = []
let conStr = []
const conStrTxt = conStr[conStr.length - 1]
//document.getElementsByTagName("body").addEventListener("click", reload())
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
const masterStrings = ["This is sentence1", "This is the second sentence", "This would be the third sentence"]
const timeoutIds = []
let randomCharacter = ""
let morseCode = ""

const gameTypes = {
	freePlay: false,
	morseMouse: false,
	morseMaster: false,
	morseMasterInstructions: false
}

//Show Key Bindings
function showDesc() {
	let x = document.getElementById("howtoDesc")
	if (x.style.opacity === "100") {
		x.style.opacity = 0
	} else {
		x.style.opacity = 100
	}
}

//Audio Files
var period = new Audio("../assets/samples/period.wav")
period.load()
var dash = new Audio("../assets/samples/dash.wav")
dash.load()
var wb1 = new Audio("../assets/samples/Woodblock1copy.wav")
wb1.load()
var wb2 = new Audio("../assets/samples/Woodblock3copy.wav")
wb2.load()
var snr = new Audio("../assets/samples/Snare10copy.wav")
snr.load()
var bdr = new Audio("../assets/samples/Kick17.wav")
bdr.load()
var hats = new Audio("../assets/samples/Hihat22copy.wav")
hats.load()
