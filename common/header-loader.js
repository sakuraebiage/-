(function () {
  const headerContainer = document.getElementById("header-container");
  if (!headerContainer) return;

  // GitHub Pages のルートが "/-/" なので絶対パスで指定
  const headerPath = "/hosimori//common/header.html";

  fetch(headerPath)
    .then(res => {
      if (!res.ok) throw new Error("ヘッダー読み込み失敗");
      return res.text();
    })
    .then(html => {
      headerContainer.innerHTML = html;
    })
    .catch(err => console.error(err));
})();

