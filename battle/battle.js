// skills.js

const SkillSet = [
  {
    id: 1,
    name: "通常攻撃",
    type: "attack",           // 攻撃 or 回復 or 補助
    power: 1.0,               // 倍率
    cost: 0,                  // MP/SP消費
    targetType: "enemy",      // 対象：敵 or 味方
    actionType: "physical",   // 種別：物理 or 魔法 or 補助
    element: "none",          // 属性：火, 水, 風, 光, 闇など
    animation: "slash",       // カットインや演出キー
    voice: "いくぞ！",        // 行動時のセリフ
  },
  {
    id: 2,
    name: "ファイアショット",
    type: "attack",
    power: 1.5,
    cost: 5,
    targetType: "enemy",
    actionType: "magic",
    element: "fire",
    animation: "fire_burst",
    voice: "燃え尽きろ！",
  },
  {
    id: 3,
    name: "ヒールライト",
    type: "heal",
    power: 1.2,
    cost: 6,
    targetType: "ally",
    actionType: "magic",
    element: "light",
    animation: "heal_glow",
    voice: "癒しの光を！",
  },
  {
    id: 4,
    name: "ブレイブアップ",
    type: "buff",
    power: 1.0,
    cost: 8,
    targetType: "ally",
    actionType: "support",
    element: "none",
    animation: "aura_rise",
    voice: "力を貸してくれ！",
    effect: {
      atkUp: 1.3,
      duration: 3
    }
  },
  {
    id: 5,
    name: "メテオクラッシュ",
    type: "attack",
    power: 2.5,
    cost: 15,
    targetType: "enemy",
    actionType: "magic",
    element: "fire",
    animation: "meteor_fall",
    voice: "星よ、墜ちろ！",
  }
];

export default SkillSet;

