// 共通ヘッダーを読み込む処理
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("header-container");
  if (!container) return;

  fetch("common/header.html")
    .then(res => {
      if (!res.ok) throw new Error("ヘッダーが読み込めませんでした: " + res.status);
      return res.text();
    })
    .then(html => {
      container.innerHTML = html;
    })
    .catch(err => {
      console.error(err);
      container.innerHTML = "<p style='color:red; padding:10px;'>ヘッダー読み込み失敗</p>";
    });
});
