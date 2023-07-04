// document.querySelector("h1").style.color ='red';
document.body.style.backgroundColor = 'lightblue';

// function colorNom(){
// document.getElementById('inputNom').style.backgroundColor = 'red';
// }
// function colorPrenom(){
//     document.getElementById('inputPrenom').style.backgroundColor = 'green';
//     }


let iI = 0;
function clickIncre(){
    iI++;
    document.getElementById('pIncre').innerHTML = "Vous avez cliqué " + iI + " fois.";
}



function clickTable(){
    let txt = "";
    let n = 1;
    while (n < 11) {
    txt += "3 x " + n + " = " + (3*n) + "<br>";
    n++;
    }
    document.getElementById('pTable').innerHTML = txt;
}



function Pile(){
    randTurn = Math.floor(Math.random() * (3 - 1) + 1); // The maximum is exclusive and the minimum is inclusive
    console.log(randTurn);
    if(randTurn == 1){
        document.getElementById('pPile').innerHTML= "Pile !";
    }else{document.getElementById('pPile').innerHTML= "Face !";} 
}


function verifyPWD(){
    let psw = document.getElementById('psw');
    // let regex = new RegExp (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/);
    // errorPswMsg = "";

    // if(psw == ""){
    //     document.getElementById('message').innerHTML = errorPswMsg;
    //     errorPswMsg += "Remplir les champs !"; 
    // }
    // if(psw.length < 8) {  
    //     document.getElementById('message').innerHTML = "Mot de passe pas assez long..."; 
    // }
    // console.log(regex.test(pwd));
    // if(!regex.test(pwd)){
    //     document.getElementById('message').innerHTML = "Doit contenir au moins un chiffre et un caractère special ...";  
    //     return false;
    // }
    // else {alert("Mot de passe bon !");}
    console.log(psw);
}



// Get the modal
var modal = document.getElementById('id01');
var modalTable = document.getElementById('idTable');
var modalIncre = document.getElementById('idIncre');
var modalPile = document.getElementById('idPileOuFace');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == modalTable) {
        modalTable.style.display = "none";
    }
    if (event.target == modalIncre) {
        modalIncre.style.display = "none";
    }
    if (event.target == modalPile) {
        modalPile.style.display = "none";
    }
}