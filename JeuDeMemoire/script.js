if (document.readyState === 'complete') {
    aleaCard();
  } else {
    document.addEventListener('DOMContentLoaded', function() {
        aleaCard();
    });
  }

var essai = 0;
var card = {
        "c1":"vide",
        "c2":"vide",
        "c3":"vide",
        "c4":"vide",
        "c5":"vide",
        "c6":"vide",
        "c7":"vide",
        "c8":"vide",
        "c9":"vide",
        "c10":"vide",
        "c11":"vide",
        "c12":"vide"};

function aleaCard(){
    let cardDispo = {
        "apple" : 0,
        "brocoli" : 0,
        "banana" : 0,
        "cherry" : 0,
        "pepper" : 0,
        "straw" : 0,
    };
    for(var indice in card){ // Lecture du tableau  ... 12 fois ...
        let done = 0;
        while(done != 1){
            let rand = getRandomInt(6);
            switch(rand){
                case 0:
                    if(cardDispo['apple'] != 2){
                        card[indice] = "apple";
                        cardDispo['apple']++;
                        done = 1;
                        break;
                    }
                    else{
                        break;
                    }
                    
                case 1:
                    if(cardDispo['brocoli'] != 2){
                        card[indice] = "brocoli";
                        cardDispo['brocoli']++;
                        done = 1;
                        break;
                    }
                    else{
                        break;
                    }
                case 2:
                    if(cardDispo['banana'] != 2){
                        card[indice] = "banana";
                        cardDispo['banana']++;
                        done = 1;
                        break;
                    }
                    else{
                        break;
                    }
                case 3:
                    if(cardDispo['cherry'] != 2){
                        card[indice] = "cherry";
                        cardDispo['cherry']++;
                        done = 1;
                        break;
                    }
                    else{
                        break;
                    }
                case 4:
                    if(cardDispo['pepper'] != 2){
                        card[indice] = "pepper";
                        cardDispo['pepper']++;
                        done = 1;
                        break;
                    }
                    else{
                        break;
                    }
                case 5:
                    if(cardDispo['straw'] != 2){
                        card[indice] = "straw";
                        cardDispo['straw']++;
                        done = 1;
                        break;
                    }
                    else{
                        break;
                    }
                default : 
                break;
                    
            }
        }
    }
}

function reset(){
    
    for(var indice in card){
        card[indice] = "vide";
        document.getElementById(indice).style.backgroundImage = "url('svg/question.svg')";
        document.getElementById("click"+indice).setAttribute("onclick","turnCard('"+indice+"')");
        document.getElementById(indice).style.opacity = "100%";
    }
    essai = 0;
    cardTourner = [];
    cardcount = 0;
    cardIndice = [];
    document.getElementById('compteur').innerHTML = "Nombre de coups: "+essai;
    aleaCard();
}





function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

var cardTourner = [];
var cardcount = 0;
var cardIndice = [];
function turnCard(cardClick){
        document.getElementById(cardClick).style.backgroundImage = "url('svg/"+card[cardClick]+".svg')";
        document.getElementById("click"+cardClick).setAttribute("onclick","");
        cardTourner.push(card[cardClick]);
        cardIndice.push(cardClick);
        cardcount++;
        if(cardcount === 2){
            setTimeout(turnCardAction, 500);
            essai++;
            document.getElementById('compteur').innerHTML = "Nombre de coups: "+essai;
        }
}

function turnCardAction() {
    if (cardTourner[0] === cardTourner[1]) {
        for (var indice in cardIndice) {
            document.getElementById(cardIndice[indice]).style.opacity = "20%";
        }
        cardTourner = [];
        cardIndice = [];
        cardcount = 0;
    } else {
        setTimeout(function() {
            for (var indice in cardIndice) {
                document.getElementById(cardIndice[indice]).style.backgroundImage = "url('svg/question.svg')";
                document.getElementById("click" + cardIndice[indice]).setAttribute("onclick", "turnCard('" + cardIndice[indice] + "')");
            }
            cardTourner = [];
            cardIndice = [];
            cardcount = 0;
        }, 500); // Ajoutez un délai de 1000 millisecondes (1 seconde)
    }
}


