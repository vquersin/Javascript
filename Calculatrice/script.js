calc_memory = "";
var calcul = 0;
var result = 0;
var entry = "";
var dot = 0;
var f = 0;
var lastOperator = "";

function calc(n){
    switch(n){
        case '/':
        case 'x':
        case '-':
        case '+':
            if(f === 0){firstEntry(n);break;}
            else{Operator(n);break;}
        case ',':
        case '.':
            dot =1; // Variable permettant d'indiqué qu'on passe en décimale et servira pour l'exponentielle ...
            calc_memory += n;
            entry += n;
            break;
        case 'CE':
            Reset();
            break;
        case '=':
            Equal(n);
            break;
        default:
            entry += n;
            if(dot > 0){   
                calcul += n * Math.pow(10, -dot); // Exponentielle pour les décimales ...
                dot++; 
            }
            else{
                if(calcul == 0){calcul = n;}
                else{calcul = (calcul*10)+n;}
            }
            calc_memory += n;
            break;
    }

    // AFFICHAGE DES CADRANS ...
    document.getElementById('memoryP').innerHTML = calc_memory;
    document.getElementById('cadranResult').innerHTML = result;
    document.getElementById('cadran').innerHTML = calcul;
}

// FUNCTION permettant l'assignation de valeurs de départ au début du calcul ...
    // Pour éviter un maximun de bugs ...
function firstEntry(n){
    dot = 0;
    result = calcul;
    calcul = 0;
    calc_memory += n;
    lastOperator = n;
    f++;
}

// FUNCTION permettant de calculer le résultat et faire des assignations ...
    // Lors d'opérations ...
function Operator(n){
    console.log(lastOperator);
    switch(lastOperator){
        case '+':
            result += calcul;
            lastOperator = n;
            dot = 0;
            calcul = 0;
            calc_memory += n;
            break;
        case '-':
            result -= calcul;
            lastOperator = n;
            dot = 0;
            calcul = 0;
            calc_memory += n;
            break;
        case 'x':
            result *= calcul;
            lastOperator = n;
            dot = 0;
            calcul = 0;
            calc_memory += n;
            break;
        case '/':
            result /= calcul;
            lastOperator = n;
            dot = 0;
            calcul = 0;
            calc_memory += n;
            break;
    }
}

// RESET global avec passage à la ligne du panel Memory ...
function Reset(){
    calc_memory += "<br>";
    entry = "";
    calcul = 0;
    result = 0;
    dot = 0;
    f = 0;
}

// FUNCTION permettant le calcul final et mettre fin à l'opération en cours ...
function Equal(n){
    Operator(n);
    calc_memory += " " + result + "<br>";
    entry = "";
    calcul = 0;
    dot = 0;
    f = 0;
}