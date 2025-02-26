let journuit = 0
function darkmode() {
    journuit++
    let dm = document.getElementById('DM')
    let game = document.getElementById('container')
    let scor = document.getElementById('score')
    let tim = document.getElementById('timer')
    let lif = document.getElementById('life')
    let men = document.getElementById('life2')
    let body = document.getElementById('body')
    let bodyh = document.getElementById('bodyh')
    let mpage = document.getElementById('menu')
    let bosstext = document.getElementById('boss-defeated')
    let toggledarkmode = document.getElementById('funcdarkmode')
    dmactive != dmactive

    if (dmactive) {
        console.log("on")
        if (journuit > 7) {
            dm.value = "Jour"
        } else {
            dm.value = "Mode Clair"
        }
        game.style.backgroundColor = "black"
        paddle.style.backgroundColor = "white"
        ball.style.backgroundColor = "white"
        scor.style.color = "white"
        tim.style.color = "white"
        lif.style.color = "white"
        men.style.color = "white"
        mpage.style.backgroundColor = "grey"
        body.style.backgroundColor = "grey"
        bodyh.style.backgroundColor = "grey"
        mpage.style.color = "white"
        bosstext.style.color = "white"
        bosstext.style.backgroundColor = "grey"
        bosstext.style.borderColor = "white"
        toggledarkmode.style.color= "white"
        toggledarkmode.style.backgroundColor = "grey"

        dmactive = false
    } else {
        console.log("off")
        if (journuit > 7) {
            dm.value = "Nuit"
        } else {
            dm.value = "Mode Sombre"
        }
        game.style.backgroundColor = "rgb(255,255,255)"
        paddle.style.backgroundColor = "rgb(75, 75, 75)"
        ball.style.backgroundColor = "rgb(75, 75, 75)"
        scor.style.color = "rgb(75, 75, 75)"
        tim.style.color = "rgb(75, 75, 75)"
        lif.style.color = "rgb(75, 75, 75)"
        men.style.color = "rgb(75, 75, 75)"
        body.style.backgroundColor = "rgb(242,243,245)"
        bodyh.style.backgroundColor = "rgb(242,243,245)"
        mpage.style.backgroundColor = "rgb(242,243,245)"
        mpage.style.color = "rgb(75, 75, 75)"
        bosstext.style.color = "rgb(75, 75, 75)"
        bosstext.style.backgroundColor = " rgb(250, 250, 250)"
        bosstext.style.borderColor = " rgb(194, 194, 194)"
        toggledarkmode.style.color = "rgb(75,75,75)"
        toggledarkmode.style.backgroundColor = "rgb(242,243,245)"
       

        dmactive = true
    }
}