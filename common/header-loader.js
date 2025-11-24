(function () {
  const headerContainer = document.getElementById("header-container");
  if (!headerContainer) return;

  const path = window.location.pathname;

  // 最初は同じ階層扱い
  let headerPath = 'common/header.html';

  // 下層ディレクトリ（1階層深い）判定
  const subdirs = [
    '/defense/', '/setting/', '/training/',
    '/craft/', '/items/', '/chat/', '/mypage/', '/result/', '/log/'
  ];

  if (subdirs.some(dir => path.includes(dir))) {
    headerPath = '../common/header.html';
  }

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
