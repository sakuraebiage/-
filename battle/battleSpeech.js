export function playVoice(characterId, skillId, containerId="battle-log") {
  const voiceSettings = JSON.parse(localStorage.getItem("voiceSettings")) || {};
  const text = voiceSettings[characterId]?.[skillId] || "……";

  const container = document.getElementById(containerId);
  if (!container) return;

  const bubble = document.createElement("div");
  bubble.classList.add("speech-bubble");
  bubble.textContent = text;
  container.appendChild(bubble);

  // アニメーション
  bubble.style.opacity = 0;
  bubble.style.transform = "translateY(10px)";
  setTimeout(() => {
    bubble.style.transition = "all 0.3s ease";
    bubble.style.opacity = 1;
    bubble.style.transform = "translateY(0)";
  }, 50);

  // 自動消去
  setTimeout(() => {
    bubble.style.opacity = 0;
    bubble.style.transform = "translateY(-10px)";
    setTimeout(() => bubble.remove(), 500);
  }, 2500);
}
