let aggiungiCantanteBtn = document.querySelector("#aggiungiCantante");
let contenitoreCantanti = document.querySelector("#contenitoreCantanti");

function aggiungiCantante(){
    aggiungiCantanteBtn.addEventListener("click", () => {
      let nuovoElemento = document.createElement("li");
      contenitoreCantanti.appendChild(nuovoElemento);
      nuovoElemento.innerHTML = `Melanie Martinez`;

    })
}
aggiungiCantante();