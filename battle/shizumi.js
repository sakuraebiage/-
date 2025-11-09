const shizumiSkills = [
  // ==== 攻撃スキル（単体・列・全体）15個 ====
  { name:"烈火斬", type:"攻撃", target:"単体", attribute:"炎", power:50.0, effects:[] },
  { name:"火炎弾", type:"攻撃", target:"全体", attribute:"炎", power:35.0, effects:[] },
  { name:"灼熱突撃", type:"攻撃", target:"敵列", attribute:"炎", power:45.0, effects:[] },
  { name:"炎刃連撃", type:"攻撃", target:"単体", attribute:"炎", power:55.0, effects:[] },
  { name:"燃尽の一撃", type:"攻撃", target:"単体", attribute:"炎", power:60.0, effects:[] },
  { name:"火柱", type:"攻撃", target:"全体", attribute:"炎", power:40.0, effects:[] },
  { name:"炎の旋風", type:"攻撃", target:"全体", attribute:"炎", power:45.0, effects:["スリップ"] },
  { name:"灼熱裂撃", type:"攻撃", target:"単体", attribute:"炎", power:90.0, effects:["裂傷"] },
  { name:"烈火槍", type:"攻撃", target:"単体", attribute:"炎", power:55.0, effects:[] },
  { name:"業火の矢", type:"攻撃", target:"単体", attribute:"炎", power:50.0, effects:["出血"] },
  { name:"火炎投げ", type:"攻撃", target:"敵列", attribute:"炎", power:45.0, effects:[] },
  { name:"焦熱撃", type:"攻撃", target:"単体", attribute:"炎", power:60.0, effects:["防御低下"] },
  { name:"燃え盛る剣", type:"攻撃", target:"単体", attribute:"炎", power:70.0, effects:[] },
  { name:"火炎旋斬", type:"攻撃", target:"全体", attribute:"炎", power:50.0, effects:["スリップ"] },
  { name:"灼熱連撃", type:"攻撃", target:"敵列", attribute:"炎", power:55.0, effects:["裂傷"] },

  // ==== 自己強化スキル（バフ＋カウンター）10個 ====
  { name:"炎の壁", type:"強化", target:"自己", attribute:"炎", power:0.0, effects:["防御上昇","カウンター"] },
  { name:"燃える闘志", type:"強化", target:"自己", attribute:"炎", power:0.0, effects:["攻撃上昇"] },
  { name:"熱血防御", type:"強化", target:"自己", attribute:"炎", power:0.0, effects:["防御上昇"] },
  { name:"烈火覚醒", type:"強化", target:"自己", attribute:"炎", power:0.0, effects:["攻撃上昇","素早さ上昇"] },
  { name:"灼熱防御陣", type:"強化", target:"自己", attribute:"炎", power:0.0, effects:["防御上昇","状態異常耐性"] },
  { name:"炎の守護", type:"強化", target:"自己", attribute:"炎", power:0.0, effects:["カウンター"] },
  { name:"紅蓮の構え", type:"強化", target:"自己", attribute:"炎", power:0.0, effects:["防御上昇","攻撃上昇"] },
  { name:"火神の加護", type:"強化", target:"自己", attribute:"炎", power:0.0, effects:["全属性耐性上昇"] },
  { name:"灼熱突進", type:"強化", target:"自己", attribute:"炎", power:0.0, effects:["素早さ上昇"] },
  { name:"烈火防壁", type:"強化", target:"自己", attribute:"炎", power:0.0, effects:["防御上昇","カウンター","反射"] },

  // ==== 複合スキル（攻撃＋デバフ）10個 ====
  { name:"炎の鎖", type:"攻撃", target:"単体", attribute:"炎", power:50.0, effects:["防御低下"] },
  { name:"灼熱の罠", type:"攻撃", target:"敵列", attribute:"炎", power:40.0, effects:["スリップ"] },
  { name:"火焔旋風", type:"攻撃", target:"全体", attribute:"炎", power:45.0, effects:["裂傷"] },
  { name:"業火の息吹", type:"攻撃", target:"全体", attribute:"炎", power:35.0, effects:["素早さ低下"] },
  { name:"燃え尽きの刃", type:"攻撃", target:"単体", attribute:"炎", power:55.0, effects:["出血"] },
  { name:"灼熱槍陣", type:"攻撃", target:"敵列", attribute:"炎", power:50.0, effects:["防御低下"] },
  { name:"紅蓮突撃", type:"攻撃", target:"単体", attribute:"炎", power:60.0, effects:["裂傷"] },
  { name:"炎の旋律", type:"攻撃", target:"全体", attribute:"炎", power:40.0, effects:["攻撃低下"] },
  { name:"焦熱斬", type:"攻撃", target:"単体", attribute:"炎", power:65.0, effects:["スリップ"] },
  { name:"灼熱乱舞", type:"攻撃", target:"全体", attribute:"炎", power:55.0, effects:["裂傷","出血"] },

  // ==== 特殊スキル（高威力90.0、追加効果付き）5個 ====
  { name:"烈火絶技", type:"攻撃", target:"単体", attribute:"炎", power:90.0, effects:["裂傷","防御低下"] },
  { name:"灼熱連撃EX", type:"攻撃", target:"単体", attribute:"炎", power:90.0, effects:["裂傷","スリップ"] },
  { name:"紅蓮破陣", type:"攻撃", target:"全体", attribute:"炎", power:90.0, effects:["裂傷"] },
  { name:"業火奥義", type:"攻撃", target:"単体", attribute:"炎", power:90.0, effects:["裂傷","出血"] },
  { name:"炎神覇斬", type:"攻撃", target:"単体", attribute:"炎", power:90.0, effects:["裂傷","防御低下","素早さ低下"] }
];
