console.log("ready2")

let assignChar = str => {
	const charLib = {
		oi: "A",
		iooo: "B"
	}
	console.log(charLib[str])
	return charLib[str]
	/* 
	let decipher = ""
	for (let i = 0; i < str.length; i++) {
		decipher += charLib[str[i]]
	}
	return decipher */
}

console.log(assignChar("iooo"))

let tempStr = []
let conStr = []
let outStr = []

Mousetrap.bind("o", function() {
	console.log("dit")
	addDit()
	tempStr.push("o")
}) //Binds i to dit and pushes 0 to tempStr

Mousetrap.bind("i", function() {
	console.log("dah")
	tempStr.push("i")
}) //Binds o to dah and pushes 1 to tempStr

Mousetrap.bind("space", function() {
	console.log("space")
	assignChar(tempStr.join(""))
	conStr.push(tempStr.join(""))
	tempStr = []
}) //Binds space to nextChar

Mousetrap.bind("s", function() {
	if (conStr === 0) {
		console.log("empty")
	} else {
		outStr.push(conStr.join(""))
		conStr = []
	}
}) //binds s to newWord (no empties)

Mousetrap.bind("q", function() {
	console.log("checking...")
	console.log(tempStr)
	console.log(conStr)
	console.log(outStr)
})
