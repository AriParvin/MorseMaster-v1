console.log("ready2")

let tempStr = []
let conStr = []
let outStr = []
Mousetrap.bind("o", function() {
	console.log("dit")
	tempStr.push("0")
}) //Binds i to dit and pushes 0 to tempStr
Mousetrap.bind("i", function() {
	console.log("dah")
	tempStr.push("1")
}) //Binds o to dah and pushes 1 to tempStr
Mousetrap.bind("s", function() {
	console.log("nextWord")
	console.log(tempStr)
	console.log(conStr)
}) //binds s to jump to the next word and joining the strings into one.
Mousetrap.bind("space", function() {
	console.log("space")
	conStr.push(tempStr.join(tempStr))
}) //Binds space to space...duh
