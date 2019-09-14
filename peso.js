const peso = document.getElementById("tu-peso");

let marte = document.getElementById("btn-Marte");
marte.addEventListener("click", pesoMarte);
let jupiter = document.getElementById("btn-Jupiter");
jupiter.addEventListener("click", pesoJupiter);
let resul = document.querySelector(".resultado");

function pesoMarte(){
    pesoPlanetas(3.7, "marte");
}
function pesoJupiter(){
    pesoPlanetas(24.8, "jupiter");
}

function pesoPlanetas(gp, planeta){
    let g_tierra = 9.8;
    let g_planeta = gp;
    let peso_final = 0;
    let p = parseInt(peso.value);
    peso_final = p * g_planeta / g_tierra;
    opcion = planeta;
    peso_final = parseInt(peso_final);
    resul.textContent = "Tu peso en " + opcion + " es de: " + peso_final + " libras";
}