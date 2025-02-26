
/**
 * Keyboard event
 */
function initKeyboardListener() {
    document.addEventListener('keydown', onKeyDown, false);
    document.addEventListener('keyup', onKeyUp, false);
}

/**
 * On key down keyboard
 */
function onKeyDown(event) {
    //console.log(event)
    if (event.key === 'ArrowRight') {
        moveRight = true;
    }
    else if (event.key === 'ArrowLeft') {
        moveLeft = true;
    }
}


addEventListener('keypress', logKey);
function logKey(e) {
    if (!end2) {
        if (e.key === " " && end) {
            allowToMove = true
            pause = false
            startTime = Date.now();
            startGame()
        }
        if (e.key === "j") {
            darkmode()
        }
        if (e.key === " " && end == false) {
            console.log(1)
            location.reload()

        }
        console.log(e.key)

        if (e.key === "²" && !pause) {
            allowToMove = false
            pause = true
            pauseGame()
        }
        if (e.key === "r" && pause) {
            location.reload(false);
        }

        if (e.key === "u" && pause) {
            if (difficulte < 4) {
                difficulte++
                document.getElementById("menu-text").innerText =
                    `PAUSED\nPress Space to resume\nPress R to reset\n
                Press U to upgrade difficulty\nPress D to downgrade the Difficulty\n
                Difficulté : ${difficulte}`
                console.log('up')
            }
        }
        if (e.key === "d" && pause) {
            if (difficulte > 1) {
                difficulte--
                document.getElementById("menu-text").innerText =
                    `PAUSED\nPress Space to resume\nPress R to reset\n
                Press U to upgrade difficulty\nPress D to downgrade the Difficulty\n
                Difficulté : ${difficulte}`;
                console.log('down')
            }
        }
    }

}
