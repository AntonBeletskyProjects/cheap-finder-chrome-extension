// В этом примере мы просто внедрим функцию создания окна
// В реальном расширении здесь был бы fetch к парсеру
window.showCheapModal = function (name, url) {
  const modal = document.createElement("div");
  modal.id = "cheap-finder-modal";
  modal.innerHTML = `
    <div class="cf-content">
      <span class="cf-close">&times;</span>
      <h3>Поиск для: ${name}</h3>
      <p>Мы ищем предложения дешевле...</p>
      <div id="results-list">
        <p>🔄 Загрузка цен из Google Shopping...</p>
      </div>
      <a href="${url}" target="_blank" class="cf-link">Перейти к результатам поиска</a>
    </div>
  `;
  document.body.appendChild(modal);

  modal.querySelector(".cf-close").onclick = () => modal.remove();
};
