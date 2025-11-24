// header.js
// 各ページに共通ヘッダーを挿入する場合
document.addEventListener("DOMContentLoaded", () => {
  const headerContainer = document.getElementById("header-container");
  if (!headerContainer) return;

  headerContainer.innerHTML = `
    <header class="main-header">
      <h1>星守戦線</h1>
      <nav class="main-nav">
        <div class="tab-group">
          <a href="/index.html">🏠 ホーム</a>
          <a href="/defense/defense.html">🛡 防衛</a>
          <a href="/setting/setting.html">⚔ 戦闘設定</a>
          <a href="/traning/traning.html">💪 訓練</a>
          <a href="/craft/craft.html">⚒ 工房</a>
          <a href="/items/items.html">🎒 アイテム</a>
          <a href="/shop.html">🏪 購買</a>
        </div>
        <div class="tab-group">
          <a href="/chat/chat.html">💬 チャット</a>
          <a href="/mypage/mypage.html">⚙ 設定</a>
          <a href="/logout.html">🚪 ログアウト</a>
        </div>
      </nav>
    </header>
  `;
});
