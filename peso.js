var peso = document.getElementById("tu-peso");
var marte = document.getElementById("botoncito");
marte.addEventListener("click", Peso_Marte);
var jupiter = document.getElementById("botoncito2");
jupiter.addEventListener("click", Peso_jupiter);
var resul = document.querySelector(".resultado");

function Peso_Marte(){
    var g_tierra = 9.8;
    var g_marte = 3.7;
    var peso_final = 0;
    var p = parseInt(peso.value);
    peso_final = p * g_marte / g_tierra;
    opcion = "Marte";
    peso_final = parseInt(peso_final);
    resul.textContent = "Tu peso en " + opcion + " es de: " + peso_final + " libras";
}

function Peso_jupiter(){
    var p = parseInt(peso.value);
    var g_tierra = 9.8;
    var g_jupiter = 24.8;
    var peso_final = 0;
    peso_final = p * g_jupiter / g_tierra;
    opcion = "Jupiter";
    peso_final = parseInt(peso_final);
    resul.textContent = "Tu peso en " + opcion + " es de: " + peso_final + " libras";
}