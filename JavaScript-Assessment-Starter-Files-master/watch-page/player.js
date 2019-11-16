var playerSection = document.getElementById("player-section");
var playlistWrapper = document.getElementById("playlist-wrapper");


let playlisttiles = (playlistobj)=>{
       var playcard = document.createElement("div");
       playcard.className = "playlist-card";
       playcard.id = `card${playlistobj.id}`;
       playlistWrapper.appendChild(playcard);  
	   
       var cardlink = document.createElement("a");
       cardlink.href=`#video-player?${playlistobj.id}`;
       playcard.appendChild(cardlink);
	   if(playlistobj.id==1){
			playcard.classList.add("active-card");
	   }
	   cardlink.addEventListener("click",function(){
	   
	   var playcardlist = document.getElementsByClassName("playlist-card")
		   for (i=0;i<playcardlist.length;i++){
				playcardlist[i].classList.remove("active-card")
		   }	   	   
		   var playcardid = document.getElementById(`card${playlistobj.id}`)
		   playcard.classList.add("active-card")
		   
	   })
       var imgthumbnail = document.createElement("img");
       imgthumbnail.className = "thumbnail";
       imgthumbnail.src=playlistobj.thumbnail;
       cardlink.appendChild(imgthumbnail);


       var videocardtitle = document.createElement("h3");
       videocardtitle.className="video-card-title";
       videocardtitle.innerHTML = playlistobj.title;

       cardlink.appendChild(videocardtitle);
	   console.log(playcard);
       
       return playcard;

}


var request = new XMLHttpRequest()

request.open("GET","https://5d76bf96515d1a0014085cf9.mockapi.io/playlist",true)

request.send()


request.onreadystatechange=function(){

       if(this.readyState ===4){

              if(this.status ==200){

                     var playlist = JSON.parse(this.responseText)

                     for(i=0;i<playlist.length;i++){
											
                                 playlistWrapper.appendChild(playlisttiles(playlist[i]))

                           
                     }
              }
       }
}


function url(){

       var urlid =window.location.href

       var id1= urlid.indexOf("#video-player?")

       var lid = urlid.slice(id1+14)

       console.log(lid)

       var videoid="https://5d76bf96515d1a0014085cf9.mockapi.io/video"

       var videourl =  `${videoid}/${lid}`

       var playlistRequest = new XMLHttpRequest()

       playlistRequest.open("GET",videourl,true)

       playlistRequest.send()
	   window.scrollTo(0,0)

       playlistRequest.onreadystatechange=function(){

              if(this.readyState ===4){

                     if(this.status ==200){

                           var playlist = JSON.parse(this.responseText)

                           console.log("Successful")

			   videoplayer(playlist)
			
                     }

              }
       }
       
}


window.onhashchange = url




function videoplayer(videoobj){

       var videoplayerurl = document.getElementById("video-player")

       videoplayerurl.src = `https://player.vimeo.com/video/${videoobj.vimeoId}`

       console.log(videoplayerurl.src)

       var viewscount = document.getElementById("views-count")

       viewscount.innerHTML = videoobj.views

       var videoplaytitle = document.getElementById("video-title")

       videoplaytitle.innerHTML = videoobj.title

       var videoplaydescription = document.getElementById("video-description")

       videoplaydescription.innerHTML = videoobj.description

       console.log(playerSection)

	}
