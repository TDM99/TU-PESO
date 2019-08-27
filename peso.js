const planets = document.querySelectorAll(".planet--js");
[...planets].forEach((planet) => {
    planet.addEventListener("click", (e) => {
        const element = e.currentTarget;
        const results = document.querySelector(".resultado");
        const entry = parseInt(document.getElementById("tu-peso").value);
        const config = {
            tierra: 9.8,
            peso: Number.isInteger(entry) ? entry : 0,
            planetNumber: element.getAttribute('data-number') || 3.7,
        }  
        const pesoFinal = Math.round(config.peso * config.planetNumber / config.tierra);
        results.textContent = `Tu peso en "${element.value}" es de: ${pesoFinal} libras.`;
    });
});
