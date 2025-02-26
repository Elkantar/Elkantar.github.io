
/**
 * Create all bricks
*/

function createBricks() {
    bricks = [];

    let positionX = brickOffsetLeft;
    let positionY = brickOffsetTop;
    if (level <= map.length) {
        for (let i = 0; i < numberBrickPerColumn; i++) {
            for (let j = 0; j < numberBrickPerLine; j++) {
                if (i < map[level - 1].length) {
                    //console.log(map[level - 1][i][j])
                    if (map[level - 1][i][j] == "a") {
                        numberofbrick++
                        if (color == 0) {
                            let brick = document.createElement('div');
                            brick.className = 'brick';
                            brick.id = 'brick'
                            brick.style.width = brickWidth + 'px';
                            brick.style.height = brickHeight + 'px';
                            brick.style.left = positionX + 'px';
                            brick.style.top = positionY + 'px';

                            container.appendChild(brick);

                            positionX += brickWidth + brickMargin;

                            bricks.push(brick);
                            color = 1
                        } else if (color == 1) {
                            let brick = document.createElement('div');
                            brick.className = 'brick2';
                            brick.id = 'brick'

                            brick.style.width = brickWidth + 'px';
                            brick.style.height = brickHeight + 'px';
                            brick.style.left = positionX + 'px';
                            brick.style.top = positionY + 'px';

                            container.appendChild(brick);

                            positionX += brickWidth + brickMargin;

                            bricks.push(brick);
                            color = 0
                        }
                    } else if (map[level - 1][i][j] == "u") {
                        if (color == 0) {
                            color = 1
                        } else {
                            color = 0
                        }
                        let brick = document.createElement('div');
                        brick.className = 'brick3';
                        brick.id = 'undes'

                        brick.style.width = brickWidth + 'px';
                        brick.style.height = brickHeight + 'px';
                        brick.style.left = positionX + 'px';
                        brick.style.top = positionY + 'px';

                        container.appendChild(brick);

                        positionX += brickWidth + brickMargin;

                        bricks.push(brick);
                    } else if (map[level - 1][i][j] == " ") {
                        if (color == 0) {
                            color = 1
                        } else {
                            color = 0
                        }
                        let brick = document.createElement('div');
                        brick.className = 'brickinvisible';
                        brick.id = 'invisible'

                        brick.style.width = brickWidth + 'px';
                        brick.style.height = brickHeight + 'px';
                        brick.style.left = positionX + 'px';
                        brick.style.top = positionY + 'px';

                        container.appendChild(brick);

                        positionX += brickWidth + brickMargin;

                        bricks.push(brick);
                    } else if (map[level - 1][i][j] == "b") {
                        countboss = 4
                        numberofbrick += 5
                        if (color == 0) {
                            color = 1
                        } else {
                            color = 0
                        }
                        let brick = document.createElement('div');
                        brick.className = 'brickBoss';
                        brick.id = 'Boss'

                        brick.style.width = brickWidthboss + 'px';
                        brick.style.height = brickHeightboss + 'px';
                        brick.style.left = positionX + 'px';
                        brick.style.top = positionY + 'px';

                        container.appendChild(brick);

                        positionX += brickWidth + brickMargin;

                        bricks.push(brick);
                    }
                }
                //}
            }

            positionX = brickOffsetLeft;
            positionY += brickHeight + brickMargin;
        }
    }
}
