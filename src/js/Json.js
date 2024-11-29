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
    data.Killer.forEach((killer) => {
        console.log(`Nom du tueur : ${killer.Name}`);
        console.log("Compétences :");
        killer.Perks.forEach((perk) => console.log(`- ${perk}`));
        console.log("\n");
    });
}
