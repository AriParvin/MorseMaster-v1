console.log("ready2")

function assignChar(i) {
	const charLib = {
		"0": "E",
		"00": "I"
	}
	return i === charLib[i]
}

let tempStr = []
let conStr = []
let outStr = []

Mousetrap.bind("o", function() {
	console.log("dit")
	tempStr.push(0)
}) //Binds i to dit and pushes 0 to tempStr
Mousetrap.bind("i", function() {
	console.log("dah")
	tempStr.push(1)
}) //Binds o to dah and pushes 1 to tempStr
Mousetrap.bind("s", function() {
	conStr.forEach(i => {
		assignChar(i)
	})
	outStr.push(conStr.join(""))
	conStr = [] //binds s  to join the char-strings into one word and to jump to the next wordi
})
Mousetrap.bind("space", function() {
	console.log("space")
	conStr.push(tempStr.join(""))
	tempStr = []
}) //Binds space to space...duh
Mousetrap.bind("q", function() {
	console.log("checking...")
	console.log(tempStr)
	console.log(conStr)
	console.log(outStr)
})
