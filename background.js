// Создаем пункт меню при установке
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "findCheaper",
    title: "Искать дешевле: '%s'",
    contexts: ["selection"],
  });
});

// Слушаем нажатие на пункт меню
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "findCheaper") {
    const productName = info.selectionText;

    // Формируем ссылку для поиска в Google Shopping (для примера)
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(productName)}&tbm=shop`;

    // Выполняем скрипт на странице для показа уведомления/окна
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: (name, url) => {
        // Вызываем функцию в content script
        window.showCheapModal(name, url);
      },
      args: [productName, searchUrl],
    });
  }
});
