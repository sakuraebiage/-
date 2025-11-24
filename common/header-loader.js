(function(){
  const headerContainer = document.getElementById("header-container");
  if (!headerContainer) return;

  let headerPath = 'common/header.html'; // デフォルト

  // ページ階層による調整
  const path = window.location.pathname;

  if (path.includes('/defense/')) headerPath = '../common/header.html';
  else if (path.includes('/setting/')) headerPath = '../common/header.html';
  else if (path.includes('/traning/')) headerPath = '../common/header.html';
  else if (path.includes('/craft/')) headerPath = '../common/header.html';
  else if (path.includes('/items/')) headerPath = '../common/header.html';
  else if (path.includes('/chat/')) headerPath = '../common/header.html';
  else if (path.includes('/mypage/')) headerPath = '../common/header.html';
  else if (path.includes('/result/')) headerPath = '../common/header.html';

  fetch(headerPath)
    .then(res => {
      if (!res.ok) throw new Error("ヘッダー読み込み失敗");
      return res.text();
    })
    .then(html => { headerContainer.innerHTML = html; })
    .catch(err => console.error(err));
})();
