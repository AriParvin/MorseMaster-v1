let assignChar = str => {
	conStr.push(charLib[str])
}
const menuReturn = () => {
	menuReturnVar = document.getElementByTagName("body").addEventListener("click", function() {
		window.location.reload()
	})
}
//Maybe Match rdmChars with Input

const getKeyByValue = (object, value) => {
	console.log(Object.keys(object).find(key => object[key] === value))
	return Object.keys(object).find(key => object[key] === value)
}

//??

//adds period to DOM
const addDit = function(x) {
	var dit = document.createElement("div")
	dit.setAttribute("id", "dit")
	document.querySelector(x).appendChild(dit)
}
//adds dash to DOM
const addDah = function(x) {
	var dah = document.createElement("div")
	dah.setAttribute("id", "dah")
	document.querySelector(x).appendChild(dah)
}

/* probably not need this */
// const addSpace = function() {
// 	var space = document.createElement("div")
// 	space.setAttribute("id", "space")
// 	document.querySelector("inputField").appendChild(space)}
//adds space to DOM
