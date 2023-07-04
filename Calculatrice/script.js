calc_memory = "";
var calcul = 0;
var dot = 0;


function calc(id,n){
    switch(n){
        case '/':
            calc_memory += n;
            break;
        case 'x':
            calc_memory += n;
            break;
        case '-':
            calc_memory += n;
            break;
        case '+':
            calc_memory += n;
            break;
        case ',':
        case '.':
            dot =1;
            calc_memory += n;
            break;
        case 'CE':
            calc_memory += "<br>";
            calcul = 0;
            break;
        default:
            if(dot > 0){   
                calcul += (n ** (dot*-1)); 
                dot++; 
            }
            else{
                if(calcul == 0){
                    calcul = n;
                }
                else{
                    calcul = (calcul*10)+n;
                }
            }
            calc_memory += n;
            document.getElementById('memoryP').innerHTML = calc_memory;
    }
    console.log(calc_memory);
    console.log(calcul);
}
