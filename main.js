var pet = document.getElementById("pet");
var owner = document.getElementById("owner");
var date = document.getElementById("date");
var time = document.getElementById("time");
var add = document.getElementById("add");
var node = document.getElementById("node");
var notes = document.getElementById("notes");
var img = document.getElementById("img");
var blok = document.getElementById("blok");

var newarr = [];

function Arrnew(PetName, OwnerName, DateN, Time, Notes){
	this.PetName = PetName;
	this.OwnerName = OwnerName;
	this.DateN = DateN;
	this.Time = Time;
	this.Notes = Notes;
}

function getarr(){
	var petN = pet.value; 
	var ownerN = owner.value; 
	var dateN = date.value; 
	var timeN = time.value;
	var Anotes = notes.value;
	var obj = new Arrnew(petN, ownerN, dateN, timeN, Anotes);
	pet.value = "";
	owner.value = "";
	date.value = "";
	time.value = "";
	notes.value = "";
	newarr.push(obj);
	console.log(newarr);	
}

 function createnote(petN, ownerN, dateN, timeN, Anotes, index ){
 		var div = document.createElement("div");
 		div.className = "div"
 		var h1 = document.createElement("h1");
 		h1.textContent = petN;
 		div.appendChild(h1);
 		var p2 = document.createElement("p");
 		p2.className = "DateN";
 		p2.textContent = dateN + " " + timeN;
 		div.appendChild(p2);
 		var p4 = document.createElement("p");
 		p4.className = "Anotes"
 		p4.textContent = Anotes;
 		div.appendChild(p4);

 		var btn = document.createElement("button");
 		btn.className = "button2";
 		btn.textContent = "X";

 		var p = document.createElement("p");
 		p.className = "owner";
 		p.textContent = "Owner: " + ownerN;
 		div.appendChild(p);
 		
 		btn.onclick = function(){
 			newarr.splice(index, 1);
 			refresh();
 		}

 		div.appendChild(btn);
		node.appendChild(div);
}

 function createNew(){
 	getarr();
 	refresh();
 }

 function refresh(){
	node.textContent = "";
	for(var i = 0; i< newarr.length; i++){
		createnote(newarr[i].PetName, newarr[i].OwnerName, newarr[i].DateN, newarr[i].Time, newarr[i].Notes ,i);
	}
 }

 add.onclick = createNew;


img.onclick = f1;


function f1 (){
	blok.classList.toggle("blok2");	
}














