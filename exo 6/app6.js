let display = document.getElementById("display");
let age = prompt("entrez votre age");

if(age > 17){
    display.innerHTML = "vous étes majeur"
}
else {
    display.innerHTML = "vous étes mineur"
}
