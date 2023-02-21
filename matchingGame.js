var rndArray = [];
var queue = [];

for(var i = 0; i<4; i++){
    for(var j = 0; j<2; j++){
        var btn = document.createElement("Button");  
        btn.setAttribute("class", "btn btn-success btnCard")
        var board = document.getElementById("gameBoard").appendChild(btn);
        setId(btn);
        //assign id here
    }

}

function setId(btn){
    var assign = false;

    while(assign == false){
        var rnd = Math.floor(Math.random() * 4);
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
    image.setAttribute("src", "img/animal" + rnd+ ".jpg");
    image.setAttribute("class", "imageCard")
    btn.appendChild(image);
}

function flipCards(btn){
    console.log("flipped!!");
    if(queue.length == 0){
        queue.push(btn);
    }else if(queue.length == 1){
        queue.push(btn);
        //check id
        var first = queue[0].id.slice(-1);
        var second = queue[1].id.slice(-1);
        if(first == second){
            console.log("correct!")
        }
        else{
            console.log("incorrect!")
        }
        queue = [];
    }
}