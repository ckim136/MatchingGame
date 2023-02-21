var rndArray = [];
var queue = [];

function makeBoard(level){
    document.getElementById("level-container").style.visibility = "hidden";
    document.getElementById("level-container").style.height = "10px";
    for(var i = 0; i<level; i++){
        for(var j = 0; j<2; j++){
            var btn = document.createElement("Button");  
            btn.setAttribute("class", "btn btn-success btnCard")
            var board = document.getElementById("gameBoard").appendChild(btn);
            setId(btn, level);
        }
    
    }
}

function setId(btn, level){
    var assign = false;

    while(assign == false){
        var rnd = Math.floor(Math.random() * level);
        if (!rndArray.includes(rnd) || rndArray.filter(x => x === rnd).length == 1 ){
            btn.id="card"+rnd;
            rndArray.push(rnd);

            //configure image
            setPictures(btn, rnd);

            //set onclick function
            btn.onclick = function(){flipCards(btn)};

            assign = true;
        }else{
            assign = false;
        }
    }
}

function setPictures(btn, rnd){
    var image = document.createElement("img");
    image.setAttribute("src", "img/animal"+ rnd+ ".jpg");
    image.setAttribute("class", "imageCard")
    btn.appendChild(image);
}

function flipCards(btn){
    //reveal image
    var img = btn.firstChild;
    img.style.visibility = "visible";

    if(queue.length == 0){
        queue.push(btn);
    }else if(queue.length == 1){
        queue.push(btn);
        //check id
        var first = queue[0].id;
        var second = queue[1].id;
        if(first.slice(-1) == second.slice(-1)){
            console.log("correct!")
            queue = [];
        }
        else{
            console.log("incorrect!")
            //flip back two cards in queue
            setTimeout(function(){
                flipCardsBack();
            }, 500);        
        }
    }
}

function flipCardsBack(){
    var firstImage = queue[0].firstChild.style.visibility = "hidden";
    var secondImage = queue[1].firstChild.style.visibility = "hidden";
    queue = [];
}