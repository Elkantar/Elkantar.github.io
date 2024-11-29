async function FetchDBDJson(JSONName) {
    try {
        const response = await fetch(`../../src/api/dbd/${JSONName}.JSON`);
        const data = await response.json();
        //console.log(data);
        return data;
    } catch (error) {
        console.error(error);
    }
}

async function useDBDKillerJson(JSONName) {
    const data = await FetchDBDJson(JSONName);
    console.log(data);
    var i = 0
    data.Killer.forEach((killer) => {
        /*console.log(`Nom du tueur : ${killer.Name}`);
        console.log("Compétences :");
        killer.Perks.forEach((perk) => console.log(`- ${perk}`));
        console.log("\n");*/

        CreateKillerCard(killer, i);
        i++
    });
}

function CreateKillerCard(data, increment) {
    console.log("data");
    const card = document.createElement("div");
    card.id = "card";
    card.classList.add("flip-card");

    const cardInner = document.createElement("div");
    cardInner.classList.add("flip-card-inner");

    const cardFront = document.createElement("div");
    cardFront.id = "Front_Card";
    cardFront.classList.add("flip-card-front");

    const cardImage = document.createElement("img");
    cardImage.id = "cardImage";
    cardImage.src = `../../src/img/Killers/${data.Name}.png`;

    const cardBack = document.createElement("div");
    cardBack.id = "Back_Card";
    cardBack.classList.add("flip-card-back");

    const Name = document.createElement("div");
    Name.id = "Name";
    Name.textContent = data.Name;

    const Perks_1 = document.createElement("div");
    Perks_1.id = "Perks_1";
    Perks_1.textContent = data.Perks[0];
    
    const Perks_2 = document.createElement("div");
    Perks_2.id = "Perks_2";
    Perks_2.textContent = data.Perks[1];

    const Perks_3 = document.createElement("div");
    Perks_3.id = "Perks_3";
    Perks_3.textContent = data.Perks[2];

    const Profile = document.createElement("button");
    Profile.id = "Profile";
    Profile.textContent = "Profile";
    Profile.onclick = function() {
        //remplacer l'espace dans le nom du tueur par un underscore
        //pour éviter les problèmes de chemin
        var killerName = data.Name.replace(/ /g, "_");
        window.location.href = `../../html/dbd/Profile.html?killer=${killerName}`;
    }


    card.appendChild(cardInner);
    cardInner.appendChild(cardFront);
    cardFront.appendChild(cardImage);
    cardInner.appendChild(cardBack);
    cardBack.appendChild(Name);
    cardBack.appendChild(Perks_1);
    cardBack.appendChild(Perks_2);
    cardBack.appendChild(Perks_3);
    cardBack.appendChild(Profile);

    document.getElementById("Killer_Cards").appendChild(card);

}

async function LoadInformation() {
    var url = new URL(window.location.href);
    var killerName = url.searchParams.get("killer");
    console.log(killerName);
    if (killerName != null) {
        killerName = killerName.replace(/_/g, " ");
        console.log(killerName);
        const Information = await Search(killerName);
        CreateKillerProfile(Information);
        console.log(Information);
    }
}

async function Search(killerName) {
    var Information = {};
    const data2 = await FetchDBDJson("Killers");
    data2.Killer.forEach((killer) => {
        if (killer.Name == killerName) {
            console.log(killer);
            Information = killer;
        }
    });
    console.log(Information);
    return Information;
}

function CreateKillerProfile(data) {
    const Profile = document.createElement("div");
    Profile.id = "Profile";

    const Name = document.createElement("div");
    Name.id = "Name";
    Name.textContent = data.Name;

    const Image = document.createElement("img");
    Image.id = "Image";
    Image.src = `../../src/img/Killers/${data.Name}.png`;

    const Perks = document.createElement("div");
    Perks.id = "Perks";
    Perks.textContent = "Compétences :";
    data.Perks.forEach((perk) => {
        const Perk = document.createElement("div");
        Perk.id = "Perk";
        const Perkbutton = document.createElement("button");
        Perkbutton.id = "Perkbutton";
        Perkbutton.textContent = perk;
        Perkbutton.onclick = () => useDBDPerkJson(perk);

        Perk.appendChild(Perkbutton);
        Perks.appendChild(Perk);
    });

    Profile.appendChild(Name);
    Profile.appendChild(Image);
    Profile.appendChild(Perks);

    document.getElementById("Killer_Profile").appendChild(Profile);
}


async function useDBDPerkJson(perkName) {
    const data = await FetchDBDJson("Perks");
    //console.log(data);
    
    data.Perks.forEach((perk) => {
        if (perk.Name == perkName) {
            console.log(perk);
            CreatePerkCard(perk);
            
        }
        //console.log(perk);
    });
} 

function CreatePerkCard(data) {
    // afficher les informations de la compétence dans cette div : <div id="PerkInformation"></div>
    const PerkInformation = document.getElementById("PerkInformation");
    PerkInformation.innerHTML = "";

    const Name = document.createElement("div");
    Name.id = "Name";
    Name.textContent = data.Name;

    /*const Image = document.createElement("img");
    Image.id = "Image";
    Image.src = `../../src/img/Perks/${data.Name}.png`;*/

    const Description = document.createElement("div");
    Description.id = "Description";
    Description.textContent = data.Description;

    PerkInformation.appendChild(Name);
    //PerkInformation.appendChild(Image);
    PerkInformation.appendChild(Description);

}