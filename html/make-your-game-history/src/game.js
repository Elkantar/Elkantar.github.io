// Elements HTML
const container = document.getElementById('container');
const paddle = document.getElementById('paddle');
const ball = document.getElementById('ball');
let lifeElement = document.getElementById('life')
let ScoreElement = document.getElementById('score')
var bricks = [];

let dmactive = true

let animationFrame;
let allowToMove = false
let pause = false
let life = 3
let difficulte = 1

// Paddle config
let moveLeft = false;
let moveRight = false;
const step = 15;

let savetime = 0

// Ball config
let ballRadius = 10;
let ballDx = 5;
let ballDy = -5;

// Brick config
let brickWidth = 100;
let brickHeight = 22;
let brickMargin = 10;

let numberofbrick = 0

let brickOffsetLeft = 80;
let brickOffsetTop = 100;

// Brick Boss Config
let brickWidthboss = 210;
let brickHeightboss = 54;
let brickMarginboss = 10;

let numberofbrickboss = 0

let brickOffsetLeftboss = 80;
let brickOffsetTopboss = 100;

let score = 0

let end = true
let end2 = true
let savetimepause = 0
let countboss = 0

let level = 1

let numberBrickPerLine = 6;
let numberBrickPerColumn = 6;

let spacepress = false

function img(src, alt) {
    let del = document.getElementById("img")
    if (del != null) {
        del.remove();
    }
    var img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    img.id = "img";

    // This next line will just add it to the <menu> tag
    menu.appendChild(img);
}


// Timer //
let startTime = Date.now();

let timer = setInterval(function () {
    if (allowToMove) {
        let elapsedTime = Math.floor((Date.now() - startTime) / 1000) + savetimepause;
        let timerElement = document.getElementById("timer");
        timerElement.innerHTML = `Time : ${elapsedTime}`;
        savetime = elapsedTime
    }
}, 1000);


/**
 * On key up keyboard
*/

function onKeyUp(event) {
    if (event.key === 'ArrowRight') {
        moveRight = false;
    }
    else if (event.key === 'ArrowLeft') {
        moveLeft = false;
    }
}

/**
 * Move Paddle
*/

function movePaddle() {
    if (allowToMove) {
        let currentPositionLeft = paddle.offsetLeft;

        if (moveRight) {
            currentPositionLeft += step;
        }
        else if (moveLeft) {
            currentPositionLeft -= step;
        }

        // Limit Left
        if (currentPositionLeft < 0) {
            currentPositionLeft = 0;
        }

        // Limit Right
        if (currentPositionLeft + paddle.offsetWidth > container.offsetWidth) {
            currentPositionLeft = container.offsetWidth - paddle.offsetWidth;
        }

        paddle.style.left = currentPositionLeft + 'px';
    }
}

/**
 * Ball move
*/

function moveBall() {
    if (allowToMove) {
        let currentPositionLeft = ball.offsetLeft;
        let currentPositionTop = ball.offsetTop;

        // Limit left
        if (currentPositionLeft < 0) {
            ballDx = -ballDx;
        }

        // Limit Right
        if (currentPositionLeft + ballRadius * 2 > container.offsetWidth) {
            ballDx = -ballDx;
        }

        // Limit Top
        if (currentPositionTop < 0) {
            ballDy = -ballDy;
        }

        // Limit Bottom
        if (currentPositionTop + ballRadius * 2 > container.offsetHeight) {

            //console.log(life)

            ballDy = -ballDy;

            life--
            if (life < 1) {
                pause = true
                end = false
                endGame(score, savetime)
                cancelAnimationFrame(animationFrame);
                //location.reload();
            }
        }

        currentPositionLeft += ballDx;
        currentPositionTop += ballDy;


        ball.style.left = currentPositionLeft + 'px';
        ball.style.top = currentPositionTop + 'px';
    }
}

/**
 * 60 FPS rendering
 */
function loop() {
    animationFrame = window.requestAnimationFrame(function () {
        movePaddle();
        moveBall();
        checkCollisionPaddle();
        checkCollisionBricks();
        lifeElement.innerHTML = `Life : ${life}`
        ScoreElement.innerHTML = `Score : ${score}`
        loop();
    })
}

/**
 * Init game
 */
function init() {
    //Init
    //console.log(ballDx)
    initKeyboardListener();
    createBricks();
    loop();
    //console.log(numberofbrick)
}

function init2() {

    bricks = [];

    createBricks();

    if (level > 1) {
        if (ballDy < 0) {
            ballDy -= difficulte
        } else {
            ballDy += difficulte
        }
        if (ballDx < 0) {
            ballDx -= difficulte
        } else {
            ballDx += difficulte
        }
    }
    pause = false
}


init();

function dialog(countb) {
    if (countb == 1 && life != 1) {
        life = life
    }
}
