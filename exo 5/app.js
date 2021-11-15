let display = document.getElementById('display');
let nbr1 = prompt("entrez un nombre à virgule");
let nbr2 = prompt("entrez un 2eme nombre à virgule");

nbr1 = parseInt(nbr1);

display.innerHTML = (nbr1 * nbr2).toString();

