// common/header.js

(function() {
  // どのページから読み込んでいるか判定
  const path = window.location.pathname;
  // console.log(path);

  // ページごとの相対パスを決定
  let prefix = "./"; // デフォルト（index.html と同じ階層の場合）
  if (path.includes("/defense/") || path.includes("/items/") || path.includes("/setting/") || path.includes("/traning/") || path.includes("/craft/")) {
    prefix = "../"; // サブフォルダにいる場合は ../
  }

  const headerHTML = `
  <header class="main-header">
    <h1>星守戦線</h1>
    <nav class="main-nav">
      <div class="tab-group">
        <a href="${prefix}defense/defense.html">🛡 防衛</a>
        <a href="${prefix}setting/setting.html">⚔ 戦闘設定</a>
        <a href="${prefix}traning/traning.html">💪 訓練</a>
        <a href="${prefix}craft/craft.html">⚒ 工房</a>
        <a href="${prefix}items/items.html">🎒 アイテム</a>
        <a href="${prefix}shop.html">🏪 購買</a>
      </div>
      <div class="tab-group">
        <a href="${prefix}chat/chat.html">💬 チャット</a>
        <a href="${prefix}mypage/mypage.html">⚙ 設定</a>
        <a href="${prefix}logout.html">🚪 ログアウト</a>
      </div>
    </nav>
  </header>
  `;

  const headerContainer = document.getElementById("header-container");
  if (headerContainer) {
    headerContainer.innerHTML = headerHTML;
  }
})();
