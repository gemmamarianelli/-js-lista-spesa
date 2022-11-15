let arrayProdotti = ["pane", "pasta", "pesce", "uova"];

let lista = document.getElementById("lista");

//ciclo for
for (let i = 0; i < 4; i++) {
    console.log(arrayProdotti[i]);
    lista.innerHTML += "<li>" + arrayProdotti[i] + "</li>";

}

//ciclo while

while(i<arrayProdotti.length){
    console.log(arrayProdotti[i]);
}


