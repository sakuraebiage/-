async function generateItems() {
  const templateFile = await fetch("./items.json");
  const baseData = await templateFile.json();

  const items = [];
  const categories = baseData.generation_rules.categories;
  const rarityDist = baseData.generation_rules.rarity_distribution;
  const valueRange = baseData.generation_rules.value_range;

  // レア度リストを作成（重み付き）
  const rarityPool = [];
  for(const r in rarityDist){
    for(let i=0; i<rarityDist[r]; i++){
      rarityPool.push(parseInt(r));
    }
  }

  for (let i = 1; i <= baseData.generation_rules.count; i++) {
    const id = "item_" + i.toString().padStart(4, "0");
    const rarity = rarityPool[Math.floor(Math.random() * rarityPool.length)];
    const [minV, maxV] = valueRange[rarity];

    items.push({
      id,
      name: `仮アイテム_${id}`,
      category: categories[Math.floor(Math.random() * categories.length)],
      rarity,
      description: `これは仮アイテム ${id} です。`,
      value: Math.floor(Math.random() * (maxV - minV + 1)) + minV
    });
  }

  baseData.items = items;

  // ローカルで保存するとき
  const blob = new Blob([JSON.stringify(baseData, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "items_generated.json";
  a.click();
  URL.revokeObjectURL(url);
}
