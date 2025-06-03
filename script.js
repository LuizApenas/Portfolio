// script.js - root directory
// Caminho relativo: ./script.js
// Descrição: Interatividade básica. Carrega conteúdo dinâmico via Fetch API quando um elemento
// com id "ajax-zone" é encontrado. A fonte do conteúdo é definida pelo atributo opcional
// data-source. Todos os comentários estão em português.

// Aguarda o DOM ser totalmente carregado
window.addEventListener("DOMContentLoaded", () => {
  
  //Localiza o container de conteúdo dinâmico. Se não for encontrado, sai cedo.
  const zone = document.getElementById("ajax-zone");
  if (!zone) return; // Não há container dinâmico nesta página

  // Determina o arquivo JSON a ser carregado. Padrão para data/content.json
  const url = zone.dataset.source || "data/content.json";

  // Busca o arquivo JSON e injeta seu conteúdo no container
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      zone.innerHTML = `<h2>${data.title}</h2><p>${data.body}</p>`;
    })
    .catch((err) => {
      console.error("Falha ao carregar conteúdo dinâmico", err);
      zone.innerHTML = "<p>Não foi possível carregar o conteúdo dinâmico.</p>";
    });
}); 