# <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="DnD-style.css">
</head>
<body>
    <div class="modalBackground">
        <div class="modalActive">
            <div class="modalClose">
                <img src="DnD-img/cross.png" />
            </div>
            <div class="modalWindow">
                <input type="text" class="person" id="perName" value="Безымянный персонаж">
                <input type="text" class="person" id="perSpecies" value="Раса">
                <input type="text" class="person" id="perClass" value="Класс">
            </div>
        </div>
    </div>
    <header>
        <div id="modalTrigger">
            <p id="personName" class="modalTrigger">Безымянный персонаж</p>
            <p id="personOther" class="modalTrigger">
                <span id="personSpecies">Раса</span>
                —
                <span id="personClass">Класс</span>
            </p>
        </div>
        <div style="display: flex; flex-wrap: wrap; justify-content: space-evenly;">
            <div class="person-num__style">
                <p class="text">ОЗ:</p>
                <input type="number" class="person-num__style-num" id="personHealth" min="0" style="width: 78px;">
            </div>
            <div class="person-num__style">
                <p class="text">КД:</p>
                <input type="number" class="person-num__style-num" id="personArmor" min="0" style="width: 78px;">
            </div>
            <div class="person-num__style">
                <p class="text">Родство:</p>
                <input type="number" class="person-num__style-num" id="personMage" min="0" style="width: 33px;">
            </div>
            <div class="person-num__style">
                <p class="text">Уровень:</p>
                <input type="number" class="person-num__style-num" id="personLevel" min="0" style="width: 33px;">
            </div>
        </div>
    </header>
    <main>

    </main>

    <script src="DnD-script.js"></script>
</body>
</html>
