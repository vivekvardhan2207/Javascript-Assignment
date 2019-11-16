var skincolr = document.getElementById("skin")

var skincard = document.getElementById("select-skin-card")
var yskin = document.getElementById("yellow-skin")
var gskin = document.getElementById("green-skin")
var rskin = document.getElementById("red-skin")
var eyecard = document.getElementById("select-eyes-card")
var mouthcard = document.getElementById("select-mouth-card")


yskin.addEventListener("click",function(){
	skincolr.src="./assets/skin/yellow.png"
	skincard.style.display = "none"
	eyecard.style.display = "block"
})
gskin.addEventListener("click",function(){
	skincolr.src="./assets/skin/green.png"
	skincard.style.display = "none"
	eyecard.style.display = "block"
	console.log(eyecard.display)
})
rskin.addEventListener("click",function(){
	skincolr.src="./assets/skin/red.png"
	skincard.style.display = "none"
	eyecard.style.display = "block"
})

var eyetype = document.getElementById("eyes")

var eyenormal = document.getElementById("eye-normal")
var eyeclosed = document.getElementById("eye-closed")
var eyelong = document.getElementById("eye-long")
var eyelaugh = document.getElementById("eye-laughing")
var eyeroll = document.getElementById("eye-rolling")
var eyewink = document.getElementById("eye-winking")

eyenormal.addEventListener("click",function(){
	eyetype.src="./assets/eyes/normal.png"
	eyecard.style.display = "none"
	mouthcard.style.display = "block"
})
eyeclosed.addEventListener("click",function(){
	eyetype.src="./assets/eyes/closed.png"
	eyecard.style.display = "none"
	mouthcard.style.display = "block"
})
eyelong.addEventListener("click",function(){
	eyetype.src="./assets/eyes/long.png"
	eyecard.style.display = "none"
	mouthcard.style.display = "block"
})
eyelaugh.addEventListener("click",function(){
	eyetype.src="./assets/eyes/laughing.png"
	eyecard.style.display = "none"
	mouthcard.style.display = "block"
})
eyeroll.addEventListener("click",function(){
	eyetype.src="./assets/eyes/rolling.png"
	eyecard.style.display = "none"
	mouthcard.style.display = "block"
})
eyewink.addEventListener("click",function(){
	eyetype.src="./assets/eyes/winking.png"
	eyecard.style.display = "none"
	mouthcard.style.display = "block"
})

var mouthtype = document.getElementById("mouth")

var mouthopen = document.getElementById("mouth-open")
var mouthsmiling = document.getElementById("mouth-smiling")
var mouthstraight = document.getElementById("mouth-straight")
var mouthsad = document.getElementById("mouth-sad")
var mouthteeth = document.getElementById("mouth-teeth")

mouthopen.addEventListener("click",function(){
	mouthtype.src="./assets/mouth/open.png"
	mouthcard.style.display = "block"
})

mouthsmiling.addEventListener("click",function(){
	mouthtype.src="./assets/mouth/smiling.png"
	mouthcard.style.display = "block"
})
mouthstraight.addEventListener("click",function(){
	mouthtype.src="./assets/mouth/straight.png"
	mouthcard.style.display = "block"

})
mouthsad.addEventListener("click",function(){
	mouthtype.src="./assets/mouth/sad.png"
	mouthcard.style.display = "block"
})
mouthteeth.addEventListener("click",function(){
	mouthtype.src="./assets/mouth/teeth.png"
	mouthcard.style.display = "block"
})

var showeye = document.getElementById("showeye")
var showeyecard = document.getElementById("showeyecard")

var showskin = document.getElementById("show-skin-card")
var showmouth = document.getElementById("show-mouth-card")

showeye.addEventListener("click",function(){
	skincard.style.display = "none"
	eyecard.style.display = "block"
	mouthcard.style.display ="none"
	})	
showeyecard.addEventListener("click",function(){
	skincard.style.display = "none"
	eyecard.style.display = "block"
	mouthcard.style.display ="none"
	})
showskin.addEventListener("click",function(){
	skincard.style.display = "block"
	eyecard.style.display = "none"
	mouthcard.style.display ="none"
})
showmouth.addEventListener("click",function(){
	skincard.style.display = "none"
	eyecard.style.display = "none"
	mouthcard.style.display ="block"
})

