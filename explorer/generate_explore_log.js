(async function(){
  // items_generated.json を読み込む
  const itemsData = await fetch("./items_generated.json").then(r=>r.json());
  const items = itemsData.items;
  const baseRareItems = itemsData.baseRareItems;

  // 探索対象拠点
  const targetBaseId = Math.floor(Math.random()*19)+1;

  // 探索行動のサンプル
  const actionPool = ["採集を行った","調査を行った","罠を解除した","休憩を取った","奇妙な痕跡を調べた"];

  // ランダムに2~4行動生成
  const actions = [];
  const actionCount = 2 + Math.floor(Math.random()*3);
  for(let i=0;i<actionCount;i++){
    actions.push(actionPool[Math.floor(Math.random()*actionPool.length)]);
  }

  // 取得物抽選関数
  function pickItem(baseId){
    const acquired = [];

    // 通常アイテム1~3個
    const normalCount = 1 + Math.floor(Math.random()*3);
    for(let i=0;i<normalCount;i++){
      const item = items[Math.floor(Math.random()*items.length)];
      acquired.push({...item, isRareBonus:false});
    }

    // 共通レア枠（低確率）
    if(Math.random()<0.1){ // 10%で出現
      const rareId = baseRareItems[baseId].common[Math.floor(Math.random()*baseRareItems[baseId].common.length)];
      const rareItem = items.find(it=>it.id===rareId);
      acquired.push({...rareItem, isRareBonus:true});
    }

    // 個別レア枠（さらに低確率）
    if(Math.random()<0.05){ // 5%で出現
      const rareId = baseRareItems[baseId].individual[Math.floor(Math.random()*baseRareItems[baseId].individual.length)];
      const rareItem = items.find(it=>it.id===rareId);
      acquired.push({...rareItem, isRareBonus:true});
    }

    return acquired;
  }

  const itemsAcquired = pickItem(targetBaseId);

  const exploreLog = {
    baseId: targetBaseId,
    timestamp: new Date().toISOString(),
    actions,
    itemsAcquired
  };

  // JSON化してダウンロード
  const blob = new Blob([JSON.stringify(exploreLog,null,2)], {type:"application/json"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "explore_log.json";
  a.click();
  URL.revokeObjectURL(url);

  console.log("探索ログ生成完了！ explore_log.json をダウンロードしました。");
})();
