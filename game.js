var location = function(name, description) {
    
    var locName = function(name){
        this.name = name;
    };
    var locDescription = function(desc){
        this.desc = desc;
    };

}

var runSomeTests = function(){

	var descrip = document.getElementById('descrip');

	console.log( descrip.tagname );
	console.log( descrip.innerHTML );
	console.log( descrip.parentNode.tagName );
    
var player = {
    drop:function(){},
    pickup:function(){
    
    },
    items:[]
};
    
        
    //directions are the first array
    //locations are the second
    
    
connections=[
          //N E  S W
           [3,2,-1,1],
           [-1,0,-1,-1],
           [-1,-1,-1,0],
           [-1,-1,0,-1],
        ];

    
playerLocation = 0; // global variable setting initial location
    
 function changeLocation(direction){
    
        var newLocation = connections[playerLocation][direction];
    
        playerLocation = newLocation;
    
    };
    

function Location(id){
    
    this.id = id
    this.name = ""
    this.desc = ""
    this.item = ""
    this.display = function (){
    
        return "You are currently in " + this.name + ", in which " + this. desc + ", and you will find " + this.item + "."
    }

};

var locationsArray = [];

locationsArray[0] = new Location(0);
locationsArray[0].name = "cabin";
locationsArray[0].desc = "You find yourself in a small wooden cabin in the woods.";
locationsArray[0].item = "map";

locationsArray[1] = new Location(1);
locationsArray[1].name = "Mountain";
locationsArray[1].desc = "You are high in the mountains.";
locationsArray[1].item = "sword";

locationsArray[2] = new Location(2);
locationsArray[2].name = "forest";
locationsArray[2].desc = "You are in a deep dark forest.";
locationsArray[2].item = "torch";

locationsArray[3] = new Location(3);
locationsArray[3].name = "mount doom";
locationsArray[3].desc = "You have entered mount doom. Beware!";
locationsArray[3].item = "ring of power";

function display(){

    if(locationsArray[playerLocation] === undefined)
        
       Document.getElementById("descrip").innerHTML =  Document.getElementById("descrip").innerHTML +  "The input is invalid. Please type in a correct one.";
    
    }else{
        
       Document.getElementById("descrip").innerHTML = Document.getElementById("descrip").innerHTML + locationsArray[playerLocation].display();
    }
}

function error_window(){
    
    Document.getElementById("descrip").innerHTML = "There is an error!"
}


function typingTools(){

    var type = Document.getElementById("action").value;
    
    if(type === "N" || type === "n"){
        
        changeLocation(0);
        display();
    
    }if(type === "E" || type === "e"){
        
        changeLocation(1);
        display();
    
    }if(type === "S" || type === "s"){
        
        changeLocation(2);
        display();
    
    }if(type === "W" || type === "w"){
        
        changeLocation(3);
        display();
    
    }else{
    
        Document.getElementById("descrip").innerHTML = "The input is invalid. Please type in a correct one."
        
    }

}




var cabin= new location(name, desc);
    




var mountain=1;
var forest=2;
var mount doom=3;
    
    
    
    
function interpretThat(text){
var interpretThat = {
action : function(){

var
    
}

};
    
function execute(objectElement){
lookup
objectElement.action}
    
};
    
function report(objectElement){
    for(var i=0,i<11,i++){
document.getElementById('inventory').innerHTML= objectElement.items[i]
    }
};   
    
function gameStep(string){
    interpretThat(text);
    execute(player);
    report(player);
}; 
    
    var headings = document.querySelectorALL('aside > h1');

	for (i = 0; i < headings.length; i++){
		console.log(headings[i].innerHTML );
}

};

//window.onload = runSomeTests
