<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8" />
<title>訓練システム - TP制</title>
<style>
  body { font-family:"Segoe UI",sans-serif; background:#f3f7ff; text-align:center; padding:20px; }
  h1 { color:#004466; }
  .stat-box, .tp-box {
    display:inline-block; vertical-align:top;
    text-align:left; padding:15px; margin:10px;
    background:#fff; border-radius:10px;
    box-shadow:0 2px 6px rgba(0,0,0,0.15);
  }
  .tp-box { color:#004466; font-weight:bold; }
  button {
    padding:10px 18px; margin:8px;
    border:none; border-radius:8px; cursor:pointer;
    background:#0077cc; color:white; font-weight:bold;
  }
  button:hover { background:#005fa3; }
  .disabled { background:#666 !important; cursor:not-allowed; }
  .log {
    margin-top:20px; font-size:14px; color:#333;
    max-width:500px; margin-left:auto; margin-right:auto; text-align:left;
  }
</style>
</head>
<body>

<h1>訓練センター（TP制）</h1>
<div class="tp-box">
  訓練ポイント：<span id="tp">3</span><br>
  <button onclick="gainTP()">+ TP獲得（テスト）</button>
</div>

<div class="stat-box">
  <h3>現在のステータス</h3>
  <div id="stats"></div>
</div>

<div>
  <h3>訓練メニュー</h3>
  <button onclick="train('str')">物理訓練</button>
  <button onclick="train('mag')">魔導訓練</button>
  <button onclick="train('spi')">精神訓練</button>
  <button onclick="train('spd')">敏捷訓練</button>
  <button onclick="train('mix')">物魔訓練</button>
</div>

<div class="log" id="log"></div>

<script>
  let playerStats = {
    hp:100, mp:50, sp:30,
    str:10, mag:10, spi:10, spd:10,
    def:8, mdef:8,
  };

  let tp = 3; // 初期TP

  const relations = {
    str:{ hp:0.3, def:0.2, sp:0.1 },
    mag:{ mp:0.4, mdef:0.2 },
    spi:{ mp:0.3, mdef:0.1 },
    spd:{ hit:0.2, dodge:0.2 },
  };

  function updateDisplay(){
    const s=playerStats;
    document.getElementById("stats").innerHTML =
      `HP: ${s.hp.toFixed(1)}<br>
       MP: ${s.mp.toFixed(1)}<br>
       SP: ${s.sp.toFixed(1)}<br>
       物攻: ${s.str.toFixed(1)}<br>
       魔攻: ${s.mag.toFixed(1)}<br>
       精神: ${s.spi.toFixed(1)}<br>
       速度: ${s.spd.toFixed(1)}<br>
       物防: ${s.def.toFixed(1)}<br>
       魔防: ${s.mdef.toFixed(1)}`;
    document.getElementById("tp").textContent = tp;
  }

  function applyTraining(mainStat, value){
    const rel=relations[mainStat];
    if(!rel) return;
    for(const sub in rel){
      if(playerStats[sub]!==undefined){
        playerStats[sub]+=value*rel[sub];
      }
    }
  }

  function train(type){
    if(tp<=0){
      addLog("⚠️ TPが足りません。行動でTPを得てください。");
      return;
    }
    tp--;
    let logText="";
    switch(type){
      case "str":
        playerStats.str+=2; applyTraining("str",2);
        logText="物理訓練：筋力と防御が上昇！"; break;
      case "mag":
        playerStats.mag+=2; applyTraining("mag",2);
        logText="魔導訓練：魔力と抵抗が上昇！"; break;
      case "spi":
        playerStats.spi+=2; applyTraining("spi",2);
        logText="精神訓練：集中力と耐性が上昇！"; break;
      case "spd":
        playerStats.spd+=2; applyTraining("spd",2);
        logText="敏捷訓練：命中と回避が上昇！"; break;
      case "mix":
        playerStats.str+=1.5; playerStats.mag+=1.5;
        applyTraining("str",1.5); applyTraining("mag",1.5);
        logText="物魔訓練：攻守バランスが向上！"; break;
    }
    addLog(logText);
    updateDisplay();
  }

  function gainTP(){
    tp++;
    addLog("🔹 行動報酬でTP+1獲得！");
    updateDisplay();
  }

  function addLog(text){
    const log=document.getElementById("log");
    log.innerHTML=text+"<br>"+log.innerHTML;
  }

  updateDisplay();
</script>
</body>
</html>
