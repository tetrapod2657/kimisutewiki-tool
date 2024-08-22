
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
      "練習時(属性)数人以上獲得量アップ": {
        "2人以上(属性)獲得量アップ": {
          attributes: ["フィジカル", "パッション", "テクニック", "ビジュアル", "スマート"],
          effects: ["+25%", "+30%", "+35%"],
          format: "練習時(属性)獲得量アップ(2人以上){effect}"
        },
        "3人以上(属性)獲得量アップ": {
          attributes: ["フィジカル", "パッション", "テクニック", "ビジュアル", "スマート"],
          effects: ["+60%", "+70%", "+80%"],
          format: "練習時(属性)獲得量アップ(3人以上){effect}"
        },
        "4人以上(属性)獲得量アップ": {
          attributes: ["フィジカル", "パッション", "テクニック", "ビジュアル", "スマート"],
          effects: ["+130%"],
          format: "練習時(属性)獲得量アップ(4人以上){effect}"
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
        },
        "練習大成功時全ステータス獲得量アップ(4人以上)": {
          attributes: [],
          effects: ["+130%"],
          format: "練習大成功時全ステータス獲得量アップ(4人以上){effect}"
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
        },
        "練習大成功率アップ(4人以上)": {
          attributes: [],
          effects: ["+60"],
          format: "練習大成功率アップ(4人以上){effect}"
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

  const liveSkillsData = {
  "Argonavisのキズナ-スマート-": "ライブ開始時にArgonavisのメンバーのスマートを1.2%UP",
  "Argonavisのキズナ-テクニック-": "ライブ開始時にArgonavisのメンバーのテクニックを1.2%UP",
  "Argonavisのキズナ-パッション-": "ライブ開始時にArgonavisのメンバーのパッションを1.2%UP",
  "Argonavisのキズナ-ビジュアル-": "ライブ開始時にArgonavisのメンバーのビジュアルを1.2%UP",
  "Argonavisのキズナ-フィジカル-": "ライブ開始時にArgonavisのメンバーのフィジカルを1.2%UP",
  "Argonavis楽曲": "テーマ楽曲がArgonavisの楽曲の場合ライブ開始時に自分の全ステータスを0.6%UP",
  "Argonavis楽曲+": "テーマ楽曲がArgonavisの楽曲の場合ライブ開始時に自分の全ステータスを0.9%UP",
  "Argonavis楽曲巧者": "テーマ楽曲がArgonavisの楽曲の場合ライブ開始時に自分の全ステータスを1.5%UP",
  "Fantome Irisのキズナ-スマート-": "ライブ開始時にFantôme Irisのメンバーのスマートを1.2%UP",
  "Fantome Irisのキズナ-テクニック-": "ライブ開始時にFantôme Irisのメンバーのテクニックを1.2%UP",
  "Fantome Irisのキズナ-パッション-": "ライブ開始時にFantôme Irisのメンバーのパッションを1.2%UP",
  "Fantome Irisのキズナ-ビジュアル-": "ライブ開始時にFantôme Irisのメンバーのビジュアルを1.2%UP",
  "Fantome Irisのキズナ-フィジカル-": "ライブ開始時にFantôme Irisのメンバーのフィジカルを1.2%UP",
  "Fantome Iris楽曲": "テーマ楽曲がFantôme Irisの楽曲の場合ライブ開始時に自分の全ステータスを0.6%UP",
  "Fantome Iris楽曲+": "テーマ楽曲がFantôme Irisの楽曲の場合ライブ開始時に自分の全ステータスを0.9%UP",
  "Fantome Iris楽曲巧者": "テーマ楽曲がFantôme Irisの楽曲の場合ライブ開始時に自分の全ステータスを1.5%UP",
  "GYROAXIAのキズナ-スマート-": "ライブ開始時にGYROAXIAのメンバーのスマートを1.2%UP",
  "GYROAXIAのキズナ-テクニック-": "ライブ開始時にGYROAXIAのメンバーのテクニックを1.2%UP",
  "GYROAXIAのキズナ-パッション-": "ライブ開始時にGYROAXIAのメンバーのパッションを1.2%UP",
  "GYROAXIAのキズナ-ビジュアル-": "ライブ開始時にGYROAXIAのメンバーのビジュアルを1.2%UP",
  "GYROAXIAのキズナ-フィジカル-": "ライブ開始時にGYROAXIAのメンバーのフィジカルを1.2%UP",
  "GYROAXIA楽曲": "テーマ楽曲がGYROAXIAの楽曲の場合ライブ開始時に自分の全ステータスを0.6%UP",
  "GYROAXIA楽曲+": "テーマ楽曲がGYROAXIAの楽曲の場合ライブ開始時に自分の全ステータスを0.9%UP",
  "GYROAXIA楽曲巧者": "テーマ楽曲がGYROAXIAの楽曲の場合ライブ開始時に自分の全ステータスを1.5%UP",
  "PスマートUP": "ライブ中に30%の確率で、自分のスマートを6.7%UP",
  "PスマートUP+": "ライブ中に30%の確率で、自分のスマートを10%UP",
  "Pスマートスコア": "ライブ中に30%の確率で、自分のスマートの9%のスコアを獲得する。",
  "Pスマートスコア+": "ライブ中に30%の確率で、自分のスマートの13.5%のスコアを獲得する。",
  "PテクニックUP": "ライブ中に30%の確率で、自分のテクニックを6.7%UP",
  "PテクニックUP+": "ライブ中に30%の確率で、自分のテクニックを10%UP",
  "Pテクニックスコア": "ライブ中に30%の確率で、自分のテクニックの9%のスコアを獲得する。",
  "Pテクニックスコア+": "ライブ中に30%の確率で、自分のテクニックの13.5%のスコアを獲得する。",
  "PパッションUP": "ライブ中に30%の確率で、自分のパッションを6.7%UP",
  "PパッションUP+": "ライブ中に30%の確率で、自分のパッションを10%UP",
  "Pパッションスコア": "ライブ中に30%の確率で、自分のパッションの9%のスコアを獲得する。",
  "Pパッションスコア+": "ライブ中に30%の確率で、自分のパッションの13.5%のスコアを獲得する。",
  "PビジュアルUP": "ライブ中に30%の確率で、自分のビジュアルを6.7%UP",
  "PビジュアルUP+": "ライブ中に30%の確率で、自分のビジュアルを10%UP",
  "Pビジュアルスコア": "ライブ中に30%の確率で、自分のビジュアルの9%のスコアを獲得する。",
  "Pビジュアルスコア+": "ライブ中に30%の確率で、自分のビジュアルの13.5%のスコアを獲得する。",
  "PフィジカルUP": "ライブ中に30%の確率で、自分のフィジカルを6.7%UP",
  "PフィジカルUP+": "ライブ中に30%の確率で、自分のフィジカルを10%UP",
  "Pフィジカルスコア": "ライブ中に30%の確率で、自分のフィジカルの9%のスコアを獲得する。",
  "Pフィジカルスコア+": "ライブ中に30%の確率で、自分のフィジカルの13.5%のスコアを獲得する。",
  "SスマートUP": "ライブ中に一定確率で、自分のスマートを4.6%UP。自分のスマートが高いほど発動確率UP(最小30%最大70%)",
  "SスマートUP+": "ライブ中に一定確率で、自分のスマートを7%UP。自分のスマートが高いほど発動確率UP(最小30%最大70%)",
  "Sスマートスコア": "ライブ中に一定確率で、自分のスマートの6.3%のスコアを獲得する。自分のスマートが高いほど発動確率UP(最小30%最大70％)",
  "Sスマートスコア+": "ライブ中に一定確率で、自分のスマートの9.4%のスコアを獲得する。自分のスマートが高いほど発動確率UP(最小30%最大70％)",
  "SテクニックUP": "ライブ中に一定確率で、自分のテクニックを4.6%UP。自分のテクニックが高いほど発動確率UP(最小30%最大70%)",
  "SテクニックUP+": "ライブ中に一定確率で、自分のテクニックを7%UP。自分のテクニックが高いほど発動確率UP(最小30%最大70%)",
  "Sテクニックスコア": "ライブ中に一定確率で、自分のテクニックの6.3%のスコアを獲得する。自分のテクニックが高いほど発動確率UP(最小30%最大70％)",
  "Sテクニックスコア+": "ライブ中に一定確率で、自分のテクニックの9.4%のスコアを獲得する。自分のテクニックが高いほど発動確率UP(最小30%最大70％)",
  "SパッションUP": "ライブ中に一定確率で、自分のパッションを4.6%UP。自分のパッションが高いほど発動確率UP(最小30%最大70%)",
  "SパッションUP+": "ライブ中に一定確率で、自分のパッションを7%UP。自分のパッションが高いほど発動確率UP(最小30%最大70%)",
  "Sパッションスコア": "ライブ中に一定確率で、自分のパッションの6.3%のスコアを獲得する。自分のパッションが高いほど発動確率UP(最小30%最大70％)",
  "Sパッションスコア+": "ライブ中に一定確率で、自分のパッションの9.4%のスコアを獲得する。自分のパッションが高いほど発動確率UP(最小30%最大70％)",
  "SビジュアルUP": "ライブ中に一定確率で、自分のビジュアルを4.6%UP。自分のビジュアルが高いほど発動確率UP(最小30%最大70%)",
  "SビジュアルUP+": "ライブ中に一定確率で、自分のビジュアルを7%UP。自分のビジュアルが高いほど発動確率UP(最小30%最大70%)",
  "Sビジュアルスコア": "ライブ中に一定確率で、自分のビジュアルの6.3%のスコアを獲得する。自分のビジュアルが高いほど発動確率UP(最小30%最大70％)",
  "Sビジュアルスコア+": "ライブ中に一定確率で、自分のビジュアルの9.4%のスコアを獲得する。自分のビジュアルが高いほど発動確率UP(最小30%最大70％)",
  "SフィジカルUP": "ライブ中に一定確率で、自分のフィジカルを4.6%UP。自分のフィジカルが高いほど発動確率UP(最小30%最大70%)",
  "SフィジカルUP+": "ライブ中に一定確率で、自分のフィジカルを7%UP。自分のフィジカルが高いほど発動確率UP(最小30%最大70%)",
  "Sフィジカルスコア": "ライブ中に一定確率で、自分のフィジカルの6.3%のスコアを獲得する。自分のフィジカルが高いほど発動確率UP(最小30%最大70％)",
  "Sフィジカルスコア+": "ライブ中に一定確率で、自分のフィジカルの9.4%のスコアを獲得する。自分のフィジカルが高いほど発動確率UP(最小30%最大70％)",
  "εpsilonΦのキズナ-スマート-": "ライブ開始時にεpsilonΦのメンバーのスマートを1.2%UP",
  "εpsilonΦのキズナ-テクニック-": "ライブ開始時にεpsilonΦのメンバーのテクニックを1.2%UP",
  "εpsilonΦのキズナ-パッション-": "ライブ開始時にεpsilonΦのメンバーのパッションを1.2%UP",
  "εpsilonΦのキズナ-ビジュアル-": "ライブ開始時にεpsilonΦのメンバーのビジュアルを1.2%UP",
  "εpsilonΦのキズナ-フィジカル-": "ライブ開始時にεpsilonΦのメンバーのフィジカルを1.2%UP",
  "εpsilonΦ楽曲": "テーマ楽曲がεpsilonΦの楽曲の場合ライブ開始時に自分の全ステータスを0.6%UP",
  "εpsilonΦ楽曲+": "テーマ楽曲がεpsilonΦの楽曲の場合ライブ開始時に自分の全ステータスを0.9%UP",
  "εpsilonΦ楽曲巧者": "テーマ楽曲がεpsilonΦの楽曲の場合ライブ開始時に自分の全ステータスを1.5%UP",
  "アイテムGET": "ライブクリア時に獲得アイテムの数が増加する。このライブスキル効果は4回分まで重複可能。※プロデュース、フェス専用ライブスキル",
  "アップビート": "ライブ中に50%の確率で、自分の全ステータスを1.5%UP。連続で発動した場合はさらに効果がUP(最大4.5UP)",
  "スタートダッシュ！": "ライブ序盤に50%の確率で、自分の全ステータスの5%のスコアを獲得する。",
  "スマートDOWN": "ライブ中に40%の確率で、スマートが1番高い相手のスマートを3%DOWN※フェス、腕試し専用ライブスキル",
  "スマートDOWN-EX-": "ライブ中に50%の確率で、スマートが1番高い相手のスマートを6%DOWN※フェス、腕試し専用ライブスキル",
  "スマートUP": "ライブ開始時に自分のスマートを2%UP",
  "スマートUP+": "ライブ開始時に自分のスマートを3%UP",
  "スマートUP-EX-": "ライブ開始時に自分のスマートを5%UP",
  "スマートの気位": "編成メンバー全員が各ステータスにおいてスマートが1番高いときライブ開始時に自分のスマートを4%UP",
  "スマートの気位-EX-": "編成メンバー全員が各ステータスにおいてスマートが1番高いときライブ開始時に自分のスマートを6.6%UP",
  "スマートスコア": "ライブ終盤に100%の確率で、自分のスマートの10%のスコアを獲得する。",
  "スマートスコア+": "ライブ終盤に100%の確率で、自分のスマートの15%のスコアを獲得する。",
  "スマートスコア-EX-": "ライブ終盤に100%の確率で、自分のスマートの25%のスコアを獲得する。",
  "テクニックDOWN": "ライブ中に40%の確率で、テクニックが1番高い相手のテクニックを3%DOWN※フェス、腕試し専用ライブスキル",
  "テクニックDOWN-EX-": "ライブ中に50%の確率で、テクニックが1番高い相手のテクニックを6%DOWN※フェス、腕試し専用ライブスキル",
  "テクニックUP": "ライブ開始時に自分のテクニックを2%UP",
  "テクニックUP+": "ライブ開始時に自分のテクニックを3%UP",
  "テクニックUP-EX-": "ライブ開始時に自分のテクニックを5%UP",
  "テクニックの気位": "編成メンバー全員が各ステータスにおいてテクニックが1番高いときライブ開始時に自分のテクニックを4%UP",
  "テクニックの気位-EX-": "編成メンバー全員が各ステータスにおいてテクニックが1番高いときライブ開始時に自分のテクニックを6.6%UP",
  "テクニックスコア": "ライブ終盤に100%の確率で、自分のテクニックの10%のスコアを獲得する。",
  "テクニックスコア+": "ライブ終盤に100%の確率で、自分のテクニックの15%のスコアを獲得する。",
  "テクニックスコア-EX-": "ライブ終盤に100%の確率で、自分のテクニックの25%のスコアを獲得する。",
  "テンポキープ": "ライブ中盤に50%の確率で、自分の全ステータスを5.4%UP",
  "パッションDOWN": "ライブ中に40%の確率で、パッションが1番高い相手のパッションを3%DOWN※フェス、腕試し専用ライブスキル",
  "パッションDOWN-EX-": "ライブ中に50%の確率で、パッションが1番高い相手のパッションを6%DOWN※フェス、腕試し専用ライブスキル",
  "パッションUP": "ライブ開始時に自分のパッションを2%UP",
  "パッションUP+": "ライブ開始時に自分のパッションを3%UP",
  "パッションUP-EX-": "ライブ開始時に自分のパッションを5%UP",
  "パッションの気位": "編成メンバー全員が各ステータスにおいてパッションが1番高いときライブ開始時に自分のパッションを4%UP",
  "パッションの気位-EX-": "編成メンバー全員が各ステータスにおいてパッションが1番高いときライブ開始時に自分のパッションを6.6%UP",
  "パッションスコア": "ライブ終盤に100%の確率で、自分のパッションの10%のスコアを獲得する。",
  "パッションスコア+": "ライブ終盤に100%の確率で、自分のパッションの15%のスコアを獲得する。",
  "パッションスコア-EX-": "ライブ終盤に100%の確率で、自分のパッションの25%のスコアを獲得する。",
  "ビジュアルDOWN": "ライブ中に40%の確率で、ビジュアルが1番高い相手のビジュアルを3%DOWN※フェス、腕試し専用ライブスキル",
  "ビジュアルDOWN-EX-": "ライブ中に50%の確率で、ビジュアルが1番高い相手のビジュアルを6%DOWN※フェス、腕試し専用ライブスキル",
  "ビジュアルUP": "ライブ開始時に自分のビジュアルを2%UP",
  "ビジュアルUP+": "ライブ開始時に自分のビジュアルを3%UP",
  "ビジュアルUP-EX-": "ライブ開始時に自分のビジュアルを5%UP",
  "ビジュアルの気位": "編成メンバー全員が各ステータスにおいてビジュアルが1番高いときライブ開始時に自分のビジュアルを4%UP",
  "ビジュアルの気位-EX-": "編成メンバー全員が各ステータスにおいてビジュアルが1番高いときライブ開始時に自分のビジュアルを6.6%UP",
  "ビジュアルスコア": "ライブ終盤に100%の確率で、自分のビジュアルの10%のスコアを獲得する。",
  "ビジュアルスコア+": "ライブ終盤に100%の確率で、自分のビジュアルの15%のスコアを獲得する。",
  "ビジュアルスコア-EX-": "ライブ終盤に100%の確率で、自分のビジュアルの25%のスコアを獲得する。",
  "フィジカルDOWN": "ライブ中に40%の確率で、フィジカルが1番高い相手のフィジカルを3%DOWN※フェス、腕試し専用ライブスキル",
  "フィジカルDOWN-EX-": "ライブ中に50%の確率で、フィジカルが1番高い相手のフィジカルを6%DOWN※フェス、腕試し専用ライブスキル",
  "フィジカルUP": "ライブ開始時に自分のフィジカルを2%UP",
  "フィジカルUP+": "ライブ開始時に自分のフィジカルを3%UP",
  "フィジカルUP-EX-": "ライブ開始時に自分のフィジカルを5%UP",
  "フィジカルの気位": "編成メンバー全員が各ステータスにおいてフィジカルが1番高いときライブ開始時に自分のフィジカルを4%UP",
  "フィジカルの気位-EX-": "編成メンバー全員が各ステータスにおいてフィジカルが1番高いときライブ開始時に自分のフィジカルを6.6%UP",
  "フィジカルスコア": "ライブ終盤に100%の確率で、自分のフィジカルの10%のスコアを獲得する。",
  "フィジカルスコア+": "ライブ終盤に100%の確率で、自分のフィジカルの15%のスコアを獲得する。",
  "フィジカルスコア-EX-": "ライブ終盤に100%の確率で、自分のフィジカルの25%のスコアを獲得する。",
  "フィナーレ！": "ライブ終盤に50%の確率で、自分の全ステータスの5%のスコアを獲得する。",
  "中盤のつなぎ": "ライブ中盤の間、100%の確率で自分の全ステータスを1.8%UP",
  "中盤のつなぎ+": "ライブ中盤の間、100%の確率で自分の全ステータスを2.7%UP",
  "安定感": "ライブ開始時に自分の全てのライブスキル発動率を2%UP",
  "安定感+": "ライブ開始時に自分の全てのライブスキル発動率を4%UP",
  "抜群の安定感": "ライブ開始時に自分の全てのライブスキル発動率を6%UP",
  "序盤のつかみ": "ライブ序盤の間、100%の確率で自分の全ステータスを1.8%UP",
  "序盤のつかみ+": "ライブ序盤の間、100%の確率で自分の全ステータスを2.7%UP",
  "終盤の盛り上げ": "ライブ終盤の間、100%の確率で自分の全ステータスを1.8%UP",
  "終盤の盛り上げ+": "ライブ終盤の間、100%の確率で自分の全ステータスを2.7%UP",
  "集中力": "ライブ中に自分に対する相手からのDOWN系のライブスキルをそれぞれの区間で1回分防ぐ。※フェス、腕試し専用ライブスキル",
  "風神RIZING！のキズナ-スマート-": "ライブ開始時に風神RIZING！のメンバーのスマートを1.2%UP",
  "風神RIZING！のキズナ-テクニック-": "ライブ開始時に風神RIZING！のメンバーのテクニックを1.2%UP",
  "風神RIZING！のキズナ-パッション-": "ライブ開始時に風神RIZING！のメンバーのパッションを1.2%UP",
  "風神RIZING！のキズナ-ビジュアル-": "ライブ開始時に風神RIZING！のメンバーのビジュアルを1.2%UP",
  "風神RIZING！のキズナ-フィジカル-": "ライブ開始時に風神RIZING！のメンバーのフィジカルを1.2%UP",
  "風神RIZING！楽曲": "テーマ楽曲が風神RIZING！の楽曲の場合ライブ開始時に自分の全ステータスを0.6%UP",
  "風神RIZING！楽曲+": "テーマ楽曲が風神RIZING！の楽曲の場合ライブ開始時に自分の全ステータスを0.9%UP",
  "風神RIZING！楽曲巧者": "テーマ楽曲が風神RIZING！の楽曲の場合ライブ開始時に自分の全ステータスを1.5%UP",
  "ST//RAYRIDE楽曲": "テーマ楽曲がST//RAYRIDEの楽曲の場合ライブ開始時に自分の全ステータスを0.6%UP",
  "ST//RAYRIDE楽曲+": "テーマ楽曲がST//RAYRIDEの楽曲の場合ライブ開始時に自分の全ステータスを0.9%UP",
  "ST//RAYRIDE楽曲巧者": "テーマ楽曲がST//RAYRIDEの楽曲の場合ライブ開始時に自分の全ステータスを1.5%UP",
  "ST//RAYRIDEのキズナ-オール-": "ライブ開始時にST//RAYRIDEのメンバーの全ステータスを0.8%UP",
  "華麗の才覚": "ライブ中に50％の確率で、全員のビジュアルを1.9%UP",
  "技巧の才覚": "ライブ中に50％の確率で、全員のテクニックを1.9%UP",
  "屈強の才覚": "ライブ中に50％の確率で、全員のフィジカルを1.9%UP",
  "聡明の才覚": "ライブ中に50％の確率で、全員のスマートを1.9%UP",
  "情熱の才覚": "ライブ中に50％の確率で、全員のパッションを1.9%UP",
  "フィジカルリーダー":"編成の中でフィジカル属性が自分だけの場合、ライブ中に50%の確率で、自分のフィジカルを8%UP※フェス、腕試し専用ライブスキル",
  "パッションリーダー":"編成の中でパッション属性が自分だけの場合、ライブ中に50%の確率で、自分のパッションを8%UP※フェス、腕試し専用ライブスキル",
  "テクニックリーダー":"編成の中でテクニック属性が自分だけの場合、ライブ中に50%の確率で、自分のテクニックを8%UP※フェス、腕試し専用ライブスキル",
  "ビジュアルリーダー":"編成の中でビジュアル属性が自分だけの場合、ライブ中に50%の確率で、自分のビジュアルを8%UP※フェス、腕試し専用ライブスキル",
  "スマートリーダー":"編成の中でスマート属性が自分だけの場合、ライブ中に50%の確率で、自分のスマートを8%UP※フェス、腕試し専用ライブスキル",
  "フィジカルリーダー+":"編成の中でフィジカル属性が自分だけの場合、ライブ中に50%の確率で、自分のフィジカルを13.3%UP※フェス、腕試し専用ライブスキル",
  "パッションリーダー+":"編成の中でパッション属性が自分だけの場合、ライブ中に50%の確率で、自分のパッションを13.3%UP※フェス、腕試し専用ライブスキル",
  "テクニックリーダー+":"編成の中でテクニック属性が自分だけの場合、ライブ中に50%の確率で、自分のテクニックを13.3%UP※フェス、腕試し専用ライブスキル",
  "ビジュアルリーダー+":"編成の中でビジュアル属性が自分だけの場合、ライブ中に50%の確率で、自分のビジュアルを13.3%UP※フェス、腕試し専用ライブスキル",
  "スマートリーダー+":"編成の中でスマート属性が自分だけの場合、ライブ中に50%の確率で、自分のスマートを13.3%UP※フェス、腕試し専用ライブスキル",
  "(特定キャラ)との協奏":"(特定キャラ)と一緒に編成すると100%の確率でライブ開始時に自分のテクニックを5%UP"
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



function setupLiveSkillAutocomplete(skillInputId, detailInputId) {
    const skillInput = document.getElementById(skillInputId);
    const detailInput = document.getElementById(detailInputId);
    const suggestionList = document.createElement('ul');
    suggestionList.className = 'suggestion-list';
    skillInput.parentNode.insertBefore(suggestionList, skillInput.nextSibling);

    skillInput.addEventListener('input', function() {
        const inputValue = this.value.toLowerCase();
        const suggestions = Object.keys(liveSkillsData).filter(skill => 
            skill.toLowerCase().includes(inputValue)
        );

        suggestionList.innerHTML = '';
        suggestions.forEach(skill => {
            const li = document.createElement('li');
            li.textContent = skill;
            li.addEventListener('click', function() {
                skillInput.value = skill;
                detailInput.value = liveSkillsData[skill];
                suggestionList.innerHTML = '';
            });
            suggestionList.appendChild(li);
        });
    });

    // 入力フィールド外のクリックでサジェストリストを閉じる
    document.addEventListener('click', function(e) {
        if (e.target !== skillInput && e.target !== suggestionList) {
            suggestionList.innerHTML = '';
        }
    });
}
document.addEventListener('DOMContentLoaded', () => {
  ['trainingSkill1', 'trainingSkill2', 'trainingSkill3'].forEach(createSkillSelector);
});

document.addEventListener('DOMContentLoaded', function() {
  setupLiveSkillAutocomplete('acquirableLiveSkill1', 'acquirableLiveSkillDetail1');
  setupLiveSkillAutocomplete('acquirableLiveSkill2', 'acquirableLiveSkillDetail2');
});