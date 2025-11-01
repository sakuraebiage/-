// --- 共通データ管理 ---
let characters = []; // {id, password, hint, name, icon, standing}
if(localStorage.getItem("characters")){
  characters = JSON.parse(localStorage.getItem("characters"));
}

function saveCharacters(){
  localStorage.setItem("characters", JSON.stringify(characters));
}

// --- キャラクター追加 ---
function addCharacter(character){
  characters.push(character);
  saveCharacters();
}

// --- キャラクター一覧描画（index, mypage用） ---
function renderCharacterList(container){
  container.innerHTML="";
  characters.forEach((c,i)=>{
    const div=document.createElement("div");
    div.style.border="1px solid #8ae1ff";
    div.style.margin="5px";
    div.style.padding="5px";
    div.style.display="flex";
    div.style.alignItems="center";

    const img=document.createElement("img");
    img.src=c.icon||"";
    img.width=60;
    img.height=60;
    img.style.marginRight="10px";

    const nameSpan=document.createElement("span");
    nameSpan.textContent=c.name;

    div.appendChild(img);
    div.appendChild(nameSpan);

    container.appendChild(div);
  });
}

