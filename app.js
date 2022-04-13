/*
function addElemento(texto){
    var capa = document.getElementById("capa");
    var h1 = document.createElement("h1");
    h1.innerHTML = texto;
    capa.appendChild(h1);
  }
  */
 //CONTAINER
const div = document.querySelector("#container");
div.style = "background-color: red";
//TITULO
const titulo = document.querySelector("#titulo1");
titulo.textContent = "titulo dinamico";
titulo.style = "color: blue";
//LOG LISTA
const lista = document.getElementById("lista");
console.log(lista);
//CREATE LI
const li = document.createElement("li");
li.textContent= "Paddle";
lista.appendChild(li)

