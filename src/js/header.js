fetch("../../html/header.html")
.then((response) => response.text())
.then((data) => {
    document.body.insertAdjacentHTML("afterbegin", data);
});
