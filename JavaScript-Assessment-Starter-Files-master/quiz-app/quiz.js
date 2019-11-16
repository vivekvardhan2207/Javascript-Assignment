function quizquestions(obj){
	
	var quizsection = document.createElement("section");
	quizsection.className = "quiz-item"

	var quizquestion = document.createElement("h3")
	quizquestion.innerHTML=`Q${obj.id}. ${obj.question}`;
	quizsection.appendChild(quizquestion)

	for(j=0;j<obj.options.length;j++){
		quizsection.appendChild(optionwrapper(obj,j))
	}

	return quizsection	
	
	}

function optionwrapper(obj,i){	

		var optionwrapperdiv = document.createElement("div")
		optionwrapperdiv.className = "option-wrapper"
	
		var optionlabel = document.createElement("label")
		optionwrapperdiv.appendChild(optionlabel)

		var option = document.createElement("input") 
		option.type = "radio"
		option.required = true
		option.name = `q${obj.id}`
		option.value=i+1
		optionlabel.appendChild(option)

		var optionvalue = document.createElement("p")
		optionvalue.innerHTML=obj.options[i]
		optionlabel.appendChild(optionvalue)

		return optionwrapperdiv;	
}
var submit = document.getElementById("submit-section")
var	quizform = document.getElementsByClassName("quiz")
quizform[0].innerHTML =""

var request = new XMLHttpRequest()
$.get("https://5d76bf96515d1a0014085cf9.mockapi.io/quiz",(response) =>{
	localStorage.setItem("quizdata",JSON.stringify(response))
})
request.open("GET","https://5d76bf96515d1a0014085cf9.mockapi.io/quiz",true)

request.send()

request.onreadystatechange=function(){
	if(this.readyState ===4){
		if(this.status ===200){
			var obj = JSON.parse(this.responseText)	
			
			
			for(i=0;i<obj.length;i++){				
				
				quizform[0].appendChild(quizquestions(obj[i]))
				
			}quizform[0].appendChild(submit)
			
					}
	}
}

$(document).ready(function(){
	if(location.search!==null&& location.search!==""){
		let srstring = location.search
		pararr = srstring.slice(1).split("&")
		console.log(pararr)
		const score = pararr.reduce((acc,item)=>{
			let arr1= item.split("=")
			acc[arr1[0]] = arr1[1];
			return acc;
		},{})
		console.log(score);
	
	 let quizdata = localStorage.getItem("quizdata") 
	 quizdata = JSON.parse(quizdata)
	 console.log(quizdata)
	const fscore = quizdata.reduce((acc,item)=>{
			if(item.answer === parseInt(score[`q${item.id}`])){
				acc+=1;			
		}
		return acc;
	},0)
	console.log(fscore)

	$('#modal-wrapper').css('display','block');
	$('#result').html(fscore+"/"+quizdata.length);
	$('#backdrop').click(()=>{
		$('#modal-wrapper').css('display','none');
	})
}
})
	

submit.addEventListener("click",function(){
	setInterval(function(){
		console.log(location.search)
	},10000)
	
})
