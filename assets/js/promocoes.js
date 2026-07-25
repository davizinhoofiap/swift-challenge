const abrir = document.getElementById("abrir");
const menu = document.getElementById("menu");

if (abrir && menu) {
  abrir.addEventListener("click", () => {
    const visivel = getComputedStyle(menu).display !== "none";
    document.body.classList.toggle("menu-aberto");
    if (visivel) {
      menu.style.display = "none";
    } else {
      menu.style.display = "flex";
      menu.style.flexDirection = "column";
    }
  });
}

const filtros = document.querySelectorAll(".filtro");
const cards = document.querySelectorAll(".card");

filtros.forEach((filtro) => {
  filtro.addEventListener("click", () => {
    filtros.forEach((b) => b.classList.remove("ativo"));
    filtro.classList.add("ativo");
    const tipo = filtro.dataset.tipo;
    cards.forEach((c) => {
      const cat = c.dataset.cat || "";
      const mostra = tipo === "todos" || cat.includes(tipo);
      if (mostra) {
        c.classList.remove("d-none");
      } else {
        c.classList.add("d-none");
      }
    });
  });
});
