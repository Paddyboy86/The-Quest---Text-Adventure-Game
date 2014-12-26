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
    items:[];
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
    
    changeLocation = function(direction){
    
        var newLocation = connections[direction][playerLocation];
    
        playerLocation = newLocation;
    
    };
    
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
