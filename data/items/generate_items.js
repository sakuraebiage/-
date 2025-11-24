(function(){
  const totalItems = 1000;

  // カテゴリ一覧
  const categories = [
    "magic","mystic","nonsense","savior_gift","phantom","forbidden",
    "mythic","anomaly","material","craft","food","medicine",
    "weapon","armor","accessory","base","fuel","rare","event","key"
  ];

  // レア度分布（個数調整で全体1000個に近くなるよう調整）
  const rarityDist = {1:500,2:300,3:150,4:40,5:10};
  const valueRange = {
    1:[10,50], 2:[50,200], 3:[200,800], 4:[800,3000], 5:[3000,15000]
  };

  // レア度プール作成
  const rarityPool = [];
  for(const r in rarityDist){
    for(let i=0;i<rarityDist[r];i++){
      rarityPool.push(parseInt(r));
    }
  }

  const items = [];
  for(let i=1;i<=totalItems;i++){
    const id = "item_" + i.toString().padStart(4,"0");
    const rarity = rarityPool[Math.floor(Math.random()*rarityPool.length)];
    const [minV,maxV] = valueRange[rarity];
    const value = Math.floor(Math.random()*(maxV-minV+1))+minV;
    const category = categories[Math.floor(Math.random()*categories.length)];
    const name = `アイテム_${id}`;
    const description = `これは${name}です。カテゴリー: ${category}、レア度: ${rarity}`;

    items.push({id,name,category,rarity,description,value});
  }

  // JSON化してダウンロード
  const blob = new Blob([JSON.stringify(items,null,2)], {type:"application/json"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "items_generated.json";
  a.click();
  URL.revokeObjectURL(url);
})();
