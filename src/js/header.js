/*fetch("../../html/header.html")
.then((response) => response.text())
.then((data) => {
    document.body.insertAdjacentHTML("afterbegin", data);
});
*/
// Détecte le niveau du fichier actuel
const getBasePath = () => {
    const depth = window.location.pathname.split("/").length - 2; 
    return "../".repeat(depth);
};

const basePath = getBasePath();

fetch(basePath + "html/header.html")
    .then((response) => response.text())
    .then((data) => {
        document.body.insertAdjacentHTML("afterbegin", data);

        // Corriger tous les liens après l'insertion du header
        document.querySelectorAll("a").forEach((link) => {
            if (!link.href.startsWith("http")) { 
                link.href = basePath + link.getAttribute("href");
            }
        });
    });
