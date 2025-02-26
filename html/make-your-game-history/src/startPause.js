
/**
 *Fonction de debut de partie 
 */

 function startGame() {
    if (!pause) {
        document.getElementById("menu").style.display = "none";
        document.getElementById("game").style.display = "";
        allowToMove = true;
        dmactive = dmactive
        //pause = true
    }
}

function pauseGame2() {
    if (pause) {
        savetimepause = savetime;
        allowToMove = false;
        document.getElementById("boss-defeated")
    }
}
function startGame2() {
    allowToMove = true
    pause = false
    startTime = Date.now();

}
/**
 *Fonction de pause de partie 
*/

function pauseGame() {
    if (pause) {
        savetimepause = savetime
        //console.log(savetimepause)
        allowToMove = false;
        document.getElementById("menu-text").innerText =
            `PAUSED\nPress Space to resume\nPress R to reset\n
            Press U to upgrade difficulty\nPress D to downgrade the Difficulty\n
            Difficulté : ${difficulte}`
        document.getElementById("menu").style.display = "";
        document.getElementById("game").style.display = "none";
        //pause = false;
    }
}

/**
 *Fonction de fin de partie perdu
*/

function endGame(Score, timer) {
    if (pause) {
        allowToMove = false;
        document.getElementById("menu-text").innerText =
            `Félicitations, vous avez perdu! 
            Oui, vous avez bien entendu, 
            vous avez perdu contre une simple brique rouge. 
            Mais ne vous en faites pas, vous n'êtes pas le premier 
            et vous ne serez certainement pas le dernier. 
            Je dois admettre, j'ai presque eu pitié de vous.  Au revoir, perdant
            \nPress R to resume\n
            Score : ${Score}\n Time : ${timer}`;
        document.getElementById("menu").style.display = "";
        document.getElementById("game").style.display = "none";
        //pause = false;
    }
}

/**
 *Fonction de fin de partie gagné 
*/

function endGame2(Score, timer) {
    if (pause) {
        allowToMove = false;
        document.getElementById("menu-text").innerText =
            `Waouh, vous avez réussi à terminer tous les niveaux 
            de ce jeu de casse-brique facile. votre victoire est 
            dérisoire et ne signifie rien. Vous avez eu de la chance, 
            c'est tout. Il y a deux ou trois autres personnes qui ont 
            joué à ce jeu et réussi à terminer tous les niveaux. 
            N'oubliez pas, vous n'êtes pas spécial.\nPress R to resume\n
            Score : ${Score}\n Time : ${timer}`;
        document.getElementById("menu").style.display = "";
        document.getElementById("game").style.display = "none";
        //img('asset/img/win.png', "win");
        //pause = false;
    }
}
