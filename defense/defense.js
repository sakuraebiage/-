const bases = [];
const numBases = 20;
const radius = 250;
const battlefield = document.getElementById("bases-container");
const baseStatusPanel = document.getElementById("base-status");
const announceText = document.getElementById("announce-text");

// 一度だけ座標を固定する
function generateBasePositions() {
  const saved = localStorage.getItem("basePositions");
  if (saved) return JSON.parse(saved);

  const positions = [];
  for (let i = 0; i < numBases; i++) {
    const angle = (i / numBases) * 2 * Math.PI;
    const jitterX = (Math.random() - 0.5) * 30;
    const jitterY = (Math.random() - 0.5) * 30;
    const x = 400 + Math.cos(angle) * radius + jitterX;
    const y = 300 + Math.sin(angle) * radius + jitterY;
    positions.push({ x, y });
  }
  localStorage.setItem("basePositions", JSON.stringify(positions));
  return positions;
}

const positions = generateBasePositions();

// 拠点生成
positions.forEach((pos, i) => {
  const base = {
    id: i + 1,
    name: i === 0 ? "中央本部" : `拠点${i}`,
    hp: 100,
    maxHp: 100,
    resources: 100,
    enemies: Math.floor(Math.random() * 100),
    pos
  };
  bases.push(base);
});

// DOM生成
bases.forEach(base => {
  const el = document.createElement("div");
  el.classList.add("base");
  el.style.left = `${base.pos.x}px`;
  el.style.top = `${base.pos.y}px`;
  el.innerHTML = `
    <div>${base.name}</div>
    <div class="health-bar" id="hp-${base.id}"></div>
  `;
  battlefield.appendChild(el);
  base.el = el;
});

function updateBaseStatus() {
  baseStatusPanel.innerHTML = "";
  bases.forEach(base => {
    const hpBar = document.getElementById(`hp-${base.id}`);
    const hpPercent = (base.hp / base.maxHp) * 100;
    hpBar.style.width = `${hpPercent}%`;
    if (hpPercent > 60) hpBar.style.background = "#00ff99";
    else if (hpPercent > 30) hpBar.style.background = "#ffcc00";
    else hpBar.style.background = "#ff4444";

    const statusLine = document.createElement("div");
    statusLine.textContent = `${base.name}：HP ${Math.floor(hpPercent)}%｜敵 ${base.enemies}体｜資源 ${base.resources}`;
    baseStatusPanel.appendChild(statusLine);
  });
}

// 戦況アナウンス
function nextAnnounce() {
  const activeBase = bases[Math.floor(Math.random() * bases.length)];
  let msg = "";

  const hpPercent = (activeBase.hp / activeBase.maxHp) * 100;
  if (activeBase.enemies === 0) {
    msg = `${activeBase.name}は防衛完了！`;
  } else if (hpPercent < 30) {
    msg = `${activeBase.name}が危険です！救援を求めています！`;
  } else if (hpPercent < 70) {
    msg = `${activeBase.name}で戦闘が続いています。`;
  } else {
    msg = `${activeBase.name}は安定しています。`;
  }

  announceText.textContent = msg;
}

// 定期更新（HPや敵の減少などの処理）
function simulateBattle() {
  bases.forEach(base => {
    if (base.enemies > 0 && base.hp > 0) {
      base.hp -= Math.random() * 5;
      base.enemies -= Math.random() * 8;
      if (base.hp < 0) base.hp = 0;
      if (base.enemies < 0) base.enemies = 0;
    }
  });
  updateBaseStatus();
  nextAnnounce();
}

// 初期化
updateBaseStatus();
nextAnnounce();
setInterval(simulateBattle, 5000); // 5秒ごとに更新
