
const characterData = {
"Argonavis": ["七星蓮", "五稜結人", "的場航海", "桔梗凛生", "白石万浬"],
"GYROAXIA": ["旭那由多", "里塚賢汰", "美園礼音", "曙涼", "界川深幸"],
"Fantome Iris": ["フェリクス・ルイ=クロード・モンドール", "黒川燈", "洲崎遵", "御劔虎春", "楠大門"],
"風神RIZING！": ["神ノ島風太", "椿大和", "早坂絋平", "若草あおい", "五島岬"],
"εpsilonΦ": ["宇治川紫夕", "二条遥", "二条奏", "鞍馬唯臣", "烏丸玲司"],
"ST//RAYRIDE": ["淀川麟太郎", "天王寺龍介"]
};


const skillData = {
      "確率で獲得量アップ": {
        "確率で(属性)獲得量アップ": {
          attributes: ["フィジカル", "パッション", "テクニック", "ビジュアル", "スマート"],
          effects: ["+20%", "+25%", "+30%"],
          format: "確率で(属性)獲得量アップ{effect}"
        },
        "確率で全ステータス獲得量アップ": {
          attributes: [],
          effects: ["+15%", "+20%", "+25%"],
          format: "確率で全ステータス獲得量アップ{effect}"
        }
      },
      "数人以上獲得量アップ": {
        "2人以上(属性)獲得量アップ": {
          attributes: ["フィジカル", "パッション", "テクニック", "ビジュアル", "スマート"],
          effects: ["+25%", "+30%", "+35%"],
          format: "練習時(属性)獲得量アップ(2人以上){effect}"
        },
        "3人以上(属性)獲得量アップ": {
          attributes: ["フィジカル", "パッション", "テクニック", "ビジュアル", "スマート"],
          effects: ["+60%", "+70%", "+80%"],
          format: "練習時(属性)獲得量アップ(3人以上){effect}"
        }
      },
      "ライブ後獲得量アップ": {
        "ライブ後(属性)獲得量アップ": {
          attributes: ["フィジカル", "パッション", "テクニック", "ビジュアル", "スマート"],
          effects: ["+70%", "+75%", "+80%"],
          format: "ライブ後(属性)獲得量アップ{effect}"
        },
        "ライブ後全ステータス獲得量アップ": {
          attributes: [],
          effects: ["+10%", "+15%", "+20%"],
          format: "ライブ後全ステータス獲得量アップ{effect}"
        },
        "ライブ後ファン獲得数アップ": {
          attributes: [],
          effects: ["+40%", "+45%", "+50%"],
          format: "ライブ後ファン獲得数アップ{effect}"
        }
      },
      "大成功時獲得量アップ": {
        "練習大成功時全ステータス獲得量アップ(2人以上)": {
          attributes: [],
          effects: ["+25%", "+30%", "+35%"],
          format: "練習大成功時全ステータス獲得量アップ(2人以上){effect}"
        },
        "練習大成功時全ステータス獲得量アップ(3人以上)": {
          attributes: [],
          effects: ["+60%", "+70%", "+80%"],
          format: "練習大成功時全ステータス獲得量アップ(3人以上){effect}"
        }
      }
    ,
      "(属性)練習出現率アップ": {
        "(属性)練習出現率アップ": {
        attributes: ["フィジカル", "パッション", "テクニック", "ビジュアル", "スマート"],
        effects: ["+10", "+15", "+20"],
        format: "(属性)練習出現率アップ{effect}"
      }
    },
      "練習大成功率アップ": {
        "練習大成功率アップ(2人以上)": {
          attributes: [],
          effects: ["+10", "+15", "+20"],
          format: "練習大成功率アップ(2人以上){effect}"
        },
        "練習大成功率アップ(3人以上)": {
          attributes: [],
          effects: ["+25", "+30", "+40"],
          format: "練習大成功率アップ(3人以上){effect}"
        }
      },
      "練習失敗率ダウン": {
        "練習失敗率ダウン(2人以上)": {
          attributes: [],
          effects: ["+2%", "+4%", "+6%"],
          format: "練習失敗率ダウン(2人以上){effect}"
        },
        "練習失敗率ダウン(3人以上)": {
          attributes: [],
          effects: ["+6%", "+8%", "+10%"],
          format: "練習失敗率ダウン(3人以上){effect}"
        }
      },
      "お休みの大成功確率アップ": {
        "お休みの大成功確率アップ": {
        attributes: [],
        effects: ["30%", "40%", "50%"],
        format: "お休みの大成功確率アップ{effect}"
      }
    }
    ,
      "初期ステータスアップ": {
        "初期(属性)アップ": {
          attributes: ["フィジカル", "パッション", "テクニック", "ビジュアル", "スマート"],
          effects: ["+30", "+35", "+40"],
          format: "初期(属性)アップ{effect}"
        },
        "初期全ステータスアップ": {
          attributes: [],
          effects: ["+6", "+8", "+10"],
          format: "初期全ステータスアップ{effect}"
        }
      },
      "初期キズナゲージ": {
        "初期キズナゲージ": {
        attributes: [],
        effects: ["+3", "+5"],
        format: "初期キズナゲージアップ{effect}"
      }
    },
      "消費体力ダウン": {
        "練習消費体力ダウン(2人以上)": {
          attributes: [],
          effects: ["3%", "5%", "7%"],
          format: "練習消費体力ダウン(2人以上){effect}"
        },
        "練習消費体力ダウン(3人以上)": {
          attributes: [],
          effects: ["10%", "12%", "15%"],
          format: "練習消費体力ダウン(3人以上){effect}"
        }
      },
      "体力回復": {
        "毎ターン体力回復": {
          attributes: [],
          effects: ["+2", "+3", "+4"],
          format: "毎ターン体力回復{effect}"
        },
        "確率で毎ターン体力回復": {
          attributes: [],
          effects: ["+10", "+15", "+20"],
          format: "確率で毎ターン体力回復{effect}"
        }
      }
  };


//キャラ名からバンド選択
function populateCharacterDropdown() {
    const characterSelect = document.getElementById('characterName');
    for (const band in characterData) {
        const optgroup = document.createElement('optgroup');
        optgroup.label = band;
        characterData[band].forEach(character => {
            const option = document.createElement('option');
            option.value = character;
            option.textContent = character;
            optgroup.appendChild(option);
        });
        characterSelect.appendChild(optgroup);
    }
}
//キャラ名からバンド選択
function updateBandName() {
    const characterSelect = document.getElementById('characterName');
    const bandInput = document.getElementById('bandName');
    const selectedCharacter = characterSelect.value;
    
    for (const band in characterData) {
        if (characterData[band].includes(selectedCharacter)) {
            bandInput.value = band;
            break;
        }
    }
}

window.onload = function() {
    populateCharacterDropdown();
};


function getInputValues() {
    //日付加工
    function formatDate(dateString) {
    if (!dateString) return ''; // 日付が空の場合は空文字を返す
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}/${month}/${day}`;
}
    return {
        cardName: document.getElementById('cardName').value,
        characterName: document.getElementById('characterName').value,
        bandName: document.getElementById('bandName').value,
        rarity: document.getElementById('rarity').value,
        type: document.getElementById('type').value,
        implementationDate: formatDate(document.getElementById('implementationDate').value),
        implementation: document.getElementById('implementation').value,
        physicalStatus: document.getElementById('physicalStatus').value,
        passionStatus: document.getElementById('passionStatus').value,
        techniqueStatus: document.getElementById('techniqueStatus').value,
        visualStatus: document.getElementById('visualStatus').value,
        smartStatus: document.getElementById('smartStatus').value,
        physicalGrowth: document.getElementById('physicalGrowth').value,
        passionGrowth: document.getElementById('passionGrowth').value,
        techniqueGrowth: document.getElementById('techniqueGrowth').value,
        visualGrowth: document.getElementById('visualGrowth').value,
        smartGrowth: document.getElementById('smartGrowth').value,
        liveSkill: document.getElementById('liveSkill').value,
        liveSkillDetail: document.getElementById('liveSkillDetail').value,
        acquirableLiveSkill1: document.getElementById('acquirableLiveSkill1').value,
        acquirableLiveSkillDetail1: document.getElementById('acquirableLiveSkillDetail1').value,
        acquirableLiveSkill2: document.getElementById('acquirableLiveSkill2').value,
        acquirableLiveSkillDetail2: document.getElementById('acquirableLiveSkillDetail2').value,
        trainingSkill1: document.getElementById('trainingSkill1').value,
        trainingSkill2: document.getElementById('trainingSkill2').value,
        trainingSkill3: document.getElementById('trainingSkill3').value,
    };
}

function generateText() {
    const values = getInputValues();
    let output = "";

    let type = values.type;
    switch (type) {
        case "フィジカル": type = "BGCOLOR(#f698aa):''フィジカル''"; break;
        case "パッション": type = "BGCOLOR(#FFD18B):''パッション''"; break;
        case "テクニック": type = "BGCOLOR(#A6ED8D):''テクニック''"; break;
        case "ビジュアル": type = "BGCOLOR(#8ADBF8):''ビジュアル''"; break;
        case "スマート": type = "BGCOLOR(#C3ADF6):''スマート''"; break;
    }

    output += "|CENTER:200|CENTER:200|c\n";
    output += "|>|&attachref(./" + values.cardName + ".jpg,nolink);|\n";
    output += "|~レアリティ|" + values.rarity + "|\n";
    output += "|~タイプ|" + type + "|\n";
    output += "|~実装日|" + values.implementationDate + "|\n";
    output += "|~実装|" + values.implementation + "|\n\n";

    output += "-最大限界突破時\n";
    output += "|CENTER:100|CENTER:100|CENTER:100|c\n";
    output += "|タイプ|ステータス|成長率|h\n";
    output += "|BGCOLOR(#f698aa):''フィジカル''|" + values.physicalStatus + "|" + values.physicalGrowth + "%|\n";
    output += "|BGCOLOR(#FFD18B):''パッション''|" + values.passionStatus + "|" + values.passionGrowth + "%|\n";
    output += "|BGCOLOR(#A6ED8D):''テクニック''|" + values.techniqueStatus + "|" + values.techniqueGrowth + "%|\n";
    output += "|BGCOLOR(#8ADBF8):''ビジュアル''|" + values.visualStatus + "|" + values.visualGrowth + "%|\n";
    output += "|BGCOLOR(#C3ADF6):''スマート''|" + values.smartStatus + "|" + values.smartGrowth + "%|\n\n";

    output += "*スキル\n";
    output += "**ライブスキル\n";
    output += "-" + values.liveSkill + "\n";
    output += "--" + values.liveSkillDetail + "\n\n";

    output += "***獲得可能ライブスキル\n";
    output += "-" + values.acquirableLiveSkill1 + "\n";
    output += "--" + values.acquirableLiveSkillDetail1 + "\n";
    output += "-" + values.acquirableLiveSkill2 + "\n";
    output += "--" + values.acquirableLiveSkillDetail2 + "\n\n";

    output += "**育成スキル\n";
    output += "-" + values.trainingSkill1 + "\n";
    output += "-" + values.trainingSkill2 + "\n";
    output += "-" + values.trainingSkill3 + "\n\n";

    output += "*カードストーリー\n";
    output += "|ストーリー|獲得スキル|効果|h\n";
    output += "|第1話 Verse|-||\n";
    output += "|第2話 Bridge|" + values.acquirableLiveSkill1 + "||\n";
    output += "|第3話 Chorus|" + values.acquirableLiveSkill2 + "||\n\n";

    output += "&tag(" + values.type + "," + values.acquirableLiveSkill1 + "," + values.acquirableLiveSkill2 + "," + values.trainingSkill1 + "," + values.trainingSkill2 + "," + values.trainingSkill3 + "," + values.bandName + ");\n\n";

    document.getElementById('output').textContent = output;
}

function generateCardlist() {
    const values = getInputValues();
    let acquisition_method = values.implementation;

    if (acquisition_method.match(/^スカウト\(/)) {
        acquisition_method = "スカウト";
    } else if (acquisition_method.match(/^イベント\(/)) {
        acquisition_method = "イベント報酬";
    } else if (acquisition_method.match(/^誕生日スカウト\(/)) {
        acquisition_method = "誕生日スカウト";
    }

    const formatted_string = "|[[&attachref(" + values.characterName + "/" + values.cardName + "/icon_" + values.cardName + ".jpg,nolink,30×30);>" + values.characterName + "/" + values.cardName + "]]&br;[[" + values.cardName + ">" + values.characterName + "/" + values.cardName + "]]|[[" + values.characterName + "]]|" + values.type + "|" + acquisition_method + "|\n" + "|[[" + values.characterName + "/" + values.cardName + "]]|" + values.liveSkill + "|" + values.liveSkillDetail + "|";

    document.getElementById('output').textContent = formatted_string;
}


function copyToClipboard() {
// div要素からテキストコンテンツを取得する
var text = document.getElementById('output').innerText;

// 一時的なtextarea要素を作成する
var textarea = document.createElement('textarea');
textarea.value = text;

// textarea要素をドキュメントに追加する
document.body.appendChild(textarea);

// textarea要素内のテキストを選択する
textarea.select();

// テキストをクリップボードにコピーする
document.execCommand('copy');

// ドキュメントからtextarea要素を削除する
document.body.removeChild(textarea);

// オプション: テキストがコピーされたことをユーザーに通知する
alert('テキストがコピーされました');
}


//育成スキル
function createSkillSelector(fieldId) {
    const inputField = document.getElementById(fieldId);
    const container = document.createElement('div');
    container.className = 'skill-selector-container';
    inputField.parentNode.insertBefore(container, inputField.nextSibling);
  
    const selects = ['skill-type', 'attribute', 'effect'].map(className => {
      const select = document.createElement('select');
      select.className = className;
      container.appendChild(select);
      return select;
    });
  
    const [skillTypeSelect, attributeSelect, effectSelect] = selects;
  
    populateSkillTypeDropdown(skillTypeSelect);
  
    selects.forEach(select => select.addEventListener('change', () => updateSkill(fieldId)));
  
    updateSkill(fieldId);
  }
  
  function populateSkillTypeDropdown(skillTypeSelect) {
    for (const skillGroup in skillData) {
      const optgroup = document.createElement('optgroup');
      optgroup.label = skillGroup;
      
      for (const skillType in skillData[skillGroup]) {
        const option = document.createElement('option');
        option.value = JSON.stringify({ skillGroup, skillType });
        option.textContent = skillType;
        optgroup.appendChild(option);
      }
      
      skillTypeSelect.appendChild(optgroup);
    }
  }
  
  function updateSkill(fieldId) {
    const container = document.getElementById(fieldId).nextSibling;
    const skillTypeSelect = container.querySelector('.skill-type');
    const attributeSelect = container.querySelector('.attribute');
    const effectSelect = container.querySelector('.effect');
  
    if (skillTypeSelect.value) {
      const selectedSkillValue = JSON.parse(skillTypeSelect.value);
      const { skillGroup, skillType } = selectedSkillValue;
      const typeData = skillData[skillGroup][skillType];
  
      updateSelect(attributeSelect, typeData.attributes);
      updateSelect(effectSelect, typeData.effects);
  
      const selectedAttr = attributeSelect.value;
      const selectedEffect = effectSelect.value;
  
      const skillName = typeData.format
        .replace('(属性)', selectedAttr || '')
        .replace('{effect}', selectedEffect);
  
      document.getElementById(fieldId).value = skillName;
    }
  }
  
  function updateSelect(select, options) {
    const currentValue = select.value;
    select.innerHTML = '';
    options.forEach(option => {
      const el = document.createElement('option');
      el.value = el.textContent = option;
      select.appendChild(el);
    });
    select.style.display = options.length ? 'inline' : 'none';
    
    if (options.includes(currentValue)) {
      select.value = currentValue;
    } else if (options.length > 0) {
      select.value = options[0];
    }
  }

// function createSkillSelector(fieldId) {
//   const inputField = document.getElementById(fieldId);
//   const container = document.createElement('div');
//   container.className = 'skill-selector-container';
//   inputField.parentNode.insertBefore(container, inputField.nextSibling);

//   const selects = ['skill-type', 'attribute', 'effect'].map(className => {
//     const select = document.createElement('select');
//     select.className = className;
//     container.appendChild(select);
//     return select;
//   });

//   const [skillTypeSelect, attributeSelect, effectSelect] = selects;

//   Object.keys(skillData).forEach(type => {
//     const option = document.createElement('option');
//     option.value = option.textContent = type;
//     skillTypeSelect.appendChild(option);
//   });

//   selects.forEach(select => select.addEventListener('change', () => updateSkill(fieldId)));

//   updateSkill(fieldId);
// }

// function updateSkill(fieldId) {
//   const container = document.getElementById(fieldId).nextSibling;
//   const [skillTypeSelect, attributeSelect, effectSelect] = ['skill-type', 'attribute', 'effect'].map(className => container.querySelector(`.${className}`));

//   const selectedType = skillTypeSelect.value;
//   const typeData = skillData[selectedType];

//   updateSelect(attributeSelect, typeData.attributes);
//   updateSelect(effectSelect, typeData.effects);

//   const selectedAttr = attributeSelect.value;
//   const selectedEffect = effectSelect.value;

//   const skillName = typeData.format
//     .replace('(属性)', selectedAttr || '')
//     .replace('{effect}', selectedEffect);

//   document.getElementById(fieldId).value = skillName;
// }

// function updateSelect(select, options) {
//   const currentValue = select.value;
//   select.innerHTML = '';
//   options.forEach(option => {
//     const el = document.createElement('option');
//     el.value = el.textContent = option;
//     select.appendChild(el);
//   });
//   select.style.display = options.length ? 'inline' : 'none';
  
//   // 以前の選択値が新しいオプションリストに存在する場合、それを選択状態に保持
//   if (options.includes(currentValue)) {
//     select.value = currentValue;
//   } else if (options.length > 0) {
//     // そうでない場合、最初のオプションを選択
//     select.value = options[0];
//   }
// }

document.addEventListener('DOMContentLoaded', () => {
  ['trainingSkill1', 'trainingSkill2', 'trainingSkill3'].forEach(createSkillSelector);
});
