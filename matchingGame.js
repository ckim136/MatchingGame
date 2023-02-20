var rndArray = [];

for(var i = 0; i<4; i++){
    for(var j = 0; j<2; j++){
        var btn = document.createElement("Button");  
        btn.setAttribute("class", "btn btn-success btnCard")
        var board = document.getElementById("gameBoard").appendChild(btn);
        setPicture(btn);
        //assign id here
    }

}

function setPicture(btn){
    var assign = false;
    while(assign == false){
        var rnd = Math.floor(Math.random() * 4);
        if (!rndArray.includes(rnd) || rndArray.filter(x => x === rnd).length == 1 ){
            btn.id="card"+rnd;
            rndArray.push(rnd);
            assign = true;
        }else{
            assign = false;
        }
    }
}