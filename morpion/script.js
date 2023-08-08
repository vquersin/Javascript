var elements = document.getElementsByName('C');
var resetButton = document.getElementById('reset');
var turn = 'J1';

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('tour').innerHTML = "Au tour du Joueur 1.";
});

elements.forEach(function(element) {
    element.addEventListener('mouseover', function() {
        if (this.getAttribute("name") !== "Tap") {
            this.style.backgroundImage = (turn === 'J1') ? "url('img/cross.png')" : "url('img/circle.png')";
        }
    });

    element.addEventListener('mouseout', function() {
        if (this.getAttribute("name") !== "Tap") {
            this.style.backgroundImage = "";
        }
    });

    element.addEventListener('click', function() {
        if (this.getAttribute("name") !== "Tap") {
            this.style.backgroundImage = (turn === 'J1') ? "url('img/cross.png')" : "url('img/circle.png')";
            this.setAttribute("name", "Tap");

            if (checkWin()) {
                document.getElementById('tour').innerHTML = "Le Joueur " + ((turn === 'J1') ? "1" : "2") + " a gagné !";
            } else if (checkDraw()) {
                document.getElementById('tour').innerHTML = "Match nul !";
            } else {
                turn = (turn === 'J1') ? 'J2' : 'J1';
                document.getElementById('tour').innerHTML = "Au tour du Joueur " + ((turn === 'J1') ? "1" : "2") + ".";
            }
        }
    });
});

function customReset() {
    
    // Réinitialiser les styles de fond pour chaque case
    document.querySelectorAll('.caseBoard').forEach(function(caseElement) {
        caseElement.style.backgroundImage = "";
        caseElement.setAttribute("name", "C");
    });
    document.getElementById('tour').innerHTML = "Au tour du Joueur 1.";
    turn = 'J1';
}



function checkWin() {
    // Tableau des combinaisons gagnantes possibles
    const winCombinations = [
        [1, 2, 3], [4, 5, 6], [7, 8, 9], // Lignes horizontales
        [1, 4, 7], [2, 5, 8], [3, 6, 9], // Lignes verticales
        [1, 5, 9], [3, 5, 7] // Lignes diagonales
    ];

    // Vérifie chaque combinaison pour voir si elle est gagnante
    for (const combination of winCombinations) {
        const [a, b, c] = combination;
        const elementA = document.getElementById(a);
        const elementB = document.getElementById(b);
        const elementC = document.getElementById(c);

        if (
            elementA.getAttribute("name") === "Tap" &&
            elementB.getAttribute("name") === "Tap" &&
            elementC.getAttribute("name") === "Tap" &&
            elementA.style.backgroundImage === elementB.style.backgroundImage &&
            elementB.style.backgroundImage === elementC.style.backgroundImage
        ) {
            return true; // Il y a une combinaison gagnante
        }
    }

    return false; // Aucune combinaison gagnante trouvée
}

function checkDraw() {
    // Vérifie si toutes les cases sont remplies (match nul)
    for (const element of elements) {
        if (element.getAttribute("name") !== "Tap") {
            return false; // Il reste au moins une case vide
        }
    }
    return true; // Toutes les cases sont remplies (match nul)
}
