// skills.js
const Skills = {
  "attack": {
    name: "攻撃",
    type: "physical",
    power: 100,
    cost: { mp: 0, sp: 0 },
    target: "enemy",
    animation: "slash",
    message: (user, target) => `${user}の攻撃！→${target}にダメージ！`
  },
  "heal": {
    name: "ヒール",
    type: "magic",
    power: -80, // マイナスは回復
    cost: { mp: 10, sp: 0 },
    target: "ally",
    animation: "heal",
    message: (user, target) => `${user}は${target}を回復した！`
  },
  "boost": {
    name: "ブースト",
    type: "buff",
    power: 0,
    cost: { mp: 0, sp: 10 },
    target: "ally",
    animation: "buff",
    message: (user, target) => `${user}は${target}の攻撃力を上げた！`
  }
};
