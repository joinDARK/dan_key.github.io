modalTrigger = document.getElementById("modalTrigger")
const modalBackground = document.getElementsByClassName("modalBackground")[0]
const modalClose = document.getElementsByClassName("modalClose")[0]
const modalActive = document.getElementsByClassName("modalActive")[0]

const windowInnerWidth = document.documentElement.clientWidth
const scrollbarWidth = parseInt(window.innerWidth) - parseInt(document.documentElement.clientWidth)
const bodyElementHTML = document.getElementsByTagName("body")[0]

person = document.querySelectorAll('.person')

function bodyMargin() {
    bodyElementHTML.style.marginRight = "-" + scrollbarWidth + "px";
}

bodyMargin();

modalTrigger.onclick = function() { //Добавляет модальное окно
    modalBackground.style.display = "block";

    if (windowInnerWidth >= 1366) {
        bodyMargin();
    }

    modalActive.style.left = "calc(50% - " + (175 - scrollbarWidth / 2) + "px)";
}

modalClose.addEventListener("click", function () { //Убирает модальное окно при нажатии на крестик
    modalBackground.style.display = "none";
    if (windowInnerWidth >= 1366) {
        bodyMargin();
    }
});

modalBackground.addEventListener("click", function (event) { //Убирает модальное окно при нажатии на задний фон
    if (event.target === modalBackground) {
        modalBackground.style.display = "none";
        if (windowInnerWidth >= 1366) {
            bodyMargin();
        }
    }
});

person.forEach((elem) => {
    elem.addEventListener('change', () => {
        document.getElementById("personName").textContent = document.getElementById("perName").value
        document.getElementById("personSpecies").textContent = document.getElementById("perSpecies").value
        document.getElementById("personClass").textContent = document.getElementById("perClass").value
        document.getElementById("personHealth").value = document.getElementById("perHealth").value
        document.getElementById("personArmor").value = document.getElementById("perArmor").value
        document.getElementById("personMage").value = document.getElementById("perMage").value
        document.getElementById("personLevel").value = document.getElementById("perLevel").value
    })
})