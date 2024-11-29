function DisplayDecklist(name){
    var decklist = document.getElementById("DecklistImage");
    if(decklist.style.display === "none" || decklist.style.display === "") {
        decklist.style.display = "block";
        decklist.src = "../../src/img/ygo/Decklists/" + name + ".png";
    } else if (!decklist.src.includes(name)) {
        decklist.src = "../../src/img/ygo/Decklists/" + name + ".png";
    } else {
        decklist.style.display = "none";
    }

}