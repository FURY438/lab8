function checkSymbol(kc) /* Передаємо функції код натиснутої клавіші */

{/* Символ “0” має код 48, символ “9” – код 57. Коди всіх десяткових цифр попадають у діапазон від 48 до 57. Якщо kc не попадає в зазначений діапазон, то kc не є кодом цифри, а тому функція повертає значення false. */

if(kc < 48 || kc >57)

     return false;

return true;

}

function showCustomMenu(sign, x, y) {/*  Функція приймає три параметри. Перший параметр (sign) є логічного типу. Він задає, що слід зробити з меню – показати чи приховати. Другий параметр (x) та третій параметр (y)  задають горизонтальну та вертикальну екранні координати точки, в якій користувач натиснув праву кнопку миші  */

var cm = document.getElementById("custommenu"); /* Змінна cm буде вказувати на наше «меню» */

if(sign) /* Якщо передано параметр sign, рівний true, то меню покажемо, а інакше приховаємо */

cm.style.visibility = 'visible';

else

cm.style.visibility = 'hidden';

/* Задаємо меню абсолютну позицію та встановлюємо координати його лівого верхнього кута */

cm.style.position = 'absolute';

cm.style.left = x;

cm.style.top = y;

}
var textsize=20;
function doAction(actionType)

{
    
switch(actionType){

case "copy":

break;

case "close":

window.close();

break;

case "fontDincrease":
    
    textsize=textsize-2   
    document.body.style.fontSize=textsize+'px';

break;

case "fontIncrease":
    document.body.style.fontSize="20px";
break;

case "changeBkg":
            if(document.body.style.backgroundColor=="red")
            document.body.style.backgroundColor="white";
            else
            document.body.style.backgroundColor="red";
break;
}

}