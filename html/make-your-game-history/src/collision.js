
let temps = 100
let myInterval = setInterval(updateCountdown, 1000000000000000)
let color = 0


function myStop() {
    clearInterval(myInterval)
}
function updateCountdown() {
    if (allowToMove) {
        //console.log(temps)
        temps--
    }
    //console.log(temps)
    if (countboss < 1 || temps <= 0) {
        myStop()
    }
}

let lifeTimeout = null;

/**
 * Check collision between bricks and ball
 */

 function checkCollisionBricks() {
    let ballX = ball.offsetLeft + ballRadius;
    let ballY = ball.offsetTop + ballRadius;

    for (let i = bricks.length - 1; i >= 0; i--) {
        let b = bricks[i];
        //console.log(b.id)
        let brickLeft = b.offsetLeft;
        let brickTop = b.offsetTop;
        let brickRight = brickLeft + b.offsetWidth;
        let brickBottom = brickTop + b.offsetHeight;

        // Collision
        if (ballX > brickLeft &&
            ballX < brickRight &&
            ballY + ballRadius > brickTop &&
            ballY - ballRadius < brickBottom
        ) {
            if (b.id != 'invisible') {
                ballDy = -ballDy;
                if (b.id != 'undes') {
                    if (b.id == 'Boss') {
                        console.log(countboss)
                        if (countboss > 0) {
                            numberofbrick--
                            countboss--
                            document.getElementById('Boss').style.backgroundColor = "rgb(119, 13, 13)"
                            setTimeout(function () {
                                //your code to be executed after 1 second
                                let boss = document.getElementById('Boss')
                                if (boss != null) {
                                    boss.style.backgroundColor = "rgb(228, 126, 126)"
                                }

                            }, 50);
                            dialog(countboss)
                            if (countboss < 1) {

                                showDefeatScene()
                                pause = true
                                pauseGame2()

                            }
                        }
                    }

                    if (b.id == 'Boss' || b.id == 'undes') {
                        if (lifeTimeout !== null) return;
                        ballDx *= -1
                        ballDy *= -1

                        if (ballDy < 0) {
                            ball.style.top = parseInt(ball.style.top) + 5 + 'px';
                        } else {
                            ball.style.top = parseInt(ball.style.top) - 5 + 'px';
                        }
                        if (ballDx < 0) {
                            ball.style.left = parseInt(ball.style.left) - 5 + 'px';
                        } else {
                            ball.style.left = parseInt(ball.style.left) + 5 + 'px';
                        }

                    }

                    /**
                    if (b.id === 'undes'){
                        ball.style.left = parseInt(ball.style.left) - 13 + 'px';
                    }
                    */
                    if (countboss < 1 || b.id != 'Boss') {
                        //console.log(numberofbrick)
                        container.removeChild(b);
                        numberofbrick--
                        score += 100
                        //console.log(score)
                        bricks.splice(i, 1);
                    }

                    if (b.id == 'Boss' && countboss == 0) {
                        score += 500
                        if (life != 1) {
                            life += 2
                        }
                    }

                    lifeTimeout = setTimeout(() => lifeTimeout = null, 250);

                }
            }
            if (numberofbrick < 1) {
                pause = true
                //end = false
                if (level < map.length) {
                    level++
                    numberofbrick = 0
                    console.log(end)
                    console.log(pause)

                    for (let s = 0 - 1; s < 36; s++) {
                        let destruction = document.getElementById("undes")
                        let invidstruction = document.getElementById("invisible")
                        if (destruction != null) {
                            container.removeChild(destruction)
                            destruction = null
                        }
                        if (invidstruction != null) {
                            container.removeChild(invidstruction)
                            invidstruction = null
                        }
                    }
                    bricks = [];
                    console.log(bricks)
                    init2()
                } else {
                    end = !end
                    level = 1
                    endGame2(score, savetime)
                }
            }
        }
    }
}

/**
 * Check collision between paddle and ball
 */
 function checkCollisionPaddle() {
    let ballX = ball.offsetLeft + ballRadius;
    let ballBottomY = ball.offsetTop + ballRadius * 2;

    let paddleLeft = paddle.offsetLeft;
    let paddleTop = paddle.offsetTop;
    let paddleRight = paddleLeft + paddle.offsetWidth;
    let paddleBottom = paddleTop + paddle.offsetHeight;

    // Collision
    if (ballX > paddleLeft && ballX < paddleRight &&
        ballBottomY > paddleTop && ballBottomY < paddleBottom
    ) {
        ballDy = -ballDy;

        if (ballX < paddleLeft + paddle.offsetWidth / 2) {
            ballDx = -Math.abs(ballDx);
        }

        if (ballX > paddleLeft + paddle.offsetWidth / 2) {
            ballDx = Math.abs(ballDx);
        }
    }
}
