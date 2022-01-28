var qo=[];
var fo=[];
//HEY GUYS HOW ARE YOU DOING - JUST BUY THIS EXTENSION !!
String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 10; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

function movefromdiv(){
	thisurl=window.location.href;
	res="";
	if(thisurl.includes('chess.com')){
		//var slides = document.getElementsByClassName("move-text-component");
		var slides = document.querySelectorAll('[class*="move-text"]')
		
		for(var i = 0; i < slides.length; i++)
		{
			a=slides.item(i);
			t=a.innerHTML;
			t = t.replace(/\n|\r/g, "");
			t=t.replaceAll("*","");
			t=t.replaceAll("<","");
			t=t.replaceAll(">","");
			t=t.replaceAll("-----","");
			t=t.replaceAll("----","");
			t=t.replaceAll("---","");
			t=t.replaceAll("--","");
			t=t.replaceAll("!","");
			t=t.trim();
			res=res+t+'*****';

			if(a.parentElement.classList.contains('mhl')){
				break;
			}
		}
		if(res!=""){
			console.log(res);
			return '***ccfen***'+res;
		}
		var slides = document.getElementsByClassName("gotomove");
		res="";
		for(var i = 0; i < slides.length; i++)
		{
			a=slides.item(i);
			t=a.innerHTML;
			t = t.replace(/\n|\r/g, "");
			t=t.replaceAll("*","");
			t=t.replaceAll("<","");
			t=t.replaceAll(">","");
			t=t.replaceAll("-----","");
			t=t.replaceAll("----","");
			t=t.replaceAll("---","");
			t=t.replaceAll("--","");
			t=t.replaceAll("!","");
			t=t.trim();
			res=res+t+'*****';

			if(a.parentElement.classList.contains('mhl')){
				break;
			}
		}
		if(res!=""){
			return '***ccfenc***'+res;
		}
	}
	if(thisurl.includes('grandbastard')){
		if(document.getElementById("granbfen") !=null)
		{
			res=document.getElementById("granbfen").innerHTML;
		}

		if(res!=""){
			return '***gbfen***'+res;
		}
	}
	var ls=['n','m','l'];
	if(thisurl.includes('lichess.org')){
		for(var j = 0; j < qo.length; i++){
				var pslides=document.querySelectorAll(qo[j]);
				if(pslides.length>0)
				{
					var slides = pslides.item(0).querySelectorAll("*")
					for(var i = 0; i < slides.length; i++)
					{
						a=slides.item(i);
						if(!fo.includes(a.tagName) && isNaN(a.innerHTML) && !a.innerHTML.includes("<")){
							res=res+a.innerHTML+'*****';
							if(a.classList.contains('active')){
								//break;
							}
						}
					}
				}
				if(res!=""){
					return '***lifen***'+res;
				}
		}
	}
	return res;
}

function orientfromdiv(txt){
	orient='white';
	if(txt.includes("***gbfen***")){
		if(document.getElementById("orient") !=null)
		{
			orient=document.getElementById("orient").innerHTML;
			if(orient.length<3){orient="white";}
		}
	}
	if(txt.includes("***ccfenc***")){
		return "white";
	}
	if(txt.includes("***ccfen***")){
		orient="white";
		var e = document.getElementsByClassName("board");
		a=e.item(0);
		if(a.classList.contains('flipped')){
			orient='black';
		}
	}
	if(txt.includes("***lifen***")){
		var e = document.getElementsByClassName('orientation-white');
		if (e.length==0) {
			orient='black';
		}
		else{
			orient='white';
		}
	}
	return orient;
}

	chrome.extension.onMessage.addListener(function(response, sender, sendResponse) {
			res='';
			res=movefromdiv();
			orient=orientfromdiv(res);
			res=res.replace("ccfenc","ccfen");
			if(res.length<5){
				res='no';
			}
			chrome.runtime.sendMessage({d: res,o: orient,f: true});
	 if (Object.keys(response).includes('value')) {
		cf=response.value;
		nfo=[];
		nqo=[];
		for (var i = 0; i < cf.length; i++) {
			if(cf[i].includes('fo-')){nfo.push(cf[i].replace('fo-',''));}else{nqo.push(cf[i])}
		}
			fo = nfo;
			qo = nqo;
	 }
	    return Promise.resolve("Dummy");
	});

if(location.href.includes('lichess')){
	a=makeid();
	b=makeid();
	c=makeid();
	d=makeid();
	e=makeid();
	f=makeid();
chrome.runtime.sendMessage({a:b,b:c,d:e});}