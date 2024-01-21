Vue.filter('number_format', function(val) {
    return val.toLocaleString();
  });
  
  var app = new Vue ({
      el: '#app',
    data: {
        itemsPerPage: 3,
          currentPage: 1,
      //チェック状態 true:チェックあり false:チェックなし
      showcover: false,
      showfaunda: false,
      showtone: false,
      showsoap: false,
      showallergy: false,
      showpatch: false,
      showcomedo: false,
      showstinging : false,
      showchemical: false,
      showalcohol : false,
      showpetro: false,
      showsynthe: false,
      showparaben : false,
      showmineral: false,

      showtuya: false,
  
      showSPFPA: false,

      //「並び替え」の選択値 1:標準 2:価格が安い順・・・
      sortOrder: 1,
      budget:10000,

      selectedProduct: null,
        favorites: [],

      // 商品リスト
      products: [
  
      ////////////////////////////////////////////

        {
          id: 3,
          normal: "T",
          desert: "T",
          mix: "T",
          sensitive: "T",
          name: "乾燥さん 保湿力スキンケア下地",
          maker: "スタイリングライフ・ホールディングス",
          brand: "BCL",
          URL: "https://amazon.co.jp/dp/B09QVJKFJY?tag=mybest_presses_7933-22",
          img: "img/picdata03.png",
          officialURL: "https://www.bcl-brand.jp/product/product-48701/",
          price: 1430,
          perprice: 47.666666666666664,
          gram: 30,
          memo1: "1本で化粧水・美容液・乳液・クリーム・UVカット・化粧下地の6役を担うオールインワンの商品",
          color: 1,
          compo: "水、BG、安息香酸アルキル（C12-15）、メトキシケイヒ酸エチルヘキシル、グリセリン、ナイアシンアミド、水添レシチン、ペンチレングリコール、ビスエチルヘキシルオキシフェノールメトキシフェニルトリアジン、アラニン、アラントイン、アルギニン、イソロイシン、イノシトール、グリシン、グルタミン酸、シロキクラゲ多糖体、セラミドAP、セラミドEOP、セラミドNG、セラミドNP、セリン、タウリン、トレオニン、バリン、ヒアルロン酸Na、ヒスチジンHCl、フィトステロールズ、フェニルアラニン、プロリン、ベタイン、マカデミア種子油、リシンHCl、ロイシン、加水分解コラーゲン、加水分解ヒアルロン酸、アクリレーツコポリマー、エチルヘキシルトリアゾン、エリスリトール、カルボマー、ペンテト酸5Na、ワセリン、水酸化Na、フェノキシエタノール",
          SPF: 37,
          PA: "+++",
          state: "つや",
          soap: 1,
          alcoholfree: 1,
          parabenfree: 1,
          syntheticfragrancefree: 1,
          petroleumbasedsurfactantfree: 1
        },
        {
          id: 6,
          normal: "T",
          desert: "T",
          mix: "T",
          sensitive: "T",
          name: "UVイデア XL プロテクショントーンアップ",
          maker: "日本ロレアル",
          brand: "LA ROCHE POSAY",
          URL: "https://www.amazon.co.jp/dp/B0851ZPQQF?tag=mybest_presses_7933-22",
          img: "img/picdata06.png",
          officialURL: "https://www.laroche-posay.jp/product/toneup-uv.html?gad_source=1&gclid=CjwKCAiA9dGqBhAqEiwAmRpTC06FXFSNTW7FR-78NVSphOm1p9XBM3_3So_yv1_qIPC6wdEPMMgDxRoCD2cQAvD_BwE",
          price: 3740,
          perprice: 124.66666666666667,
          gram: 30,
          memo1: "高い紫外線防御力があるUVトーンアップ下地。敏感肌でも使いやすく、肌のバリア機能をサポートする",
          color: 3,
          SPF: "50+",
          PA: "++++",
          state: "つや",
          toneup: 1,
          soap: 1,
          allergytest: 1,
          syntheticfragrancefree: 1
        },
        {
          id: 15,
          normal: "T",
          mix: "T",
          sensitive: "T",
          name: "ラスティングベース",
          maker: "チャコット",
          brand: "Chacott",
          URL: "https://amazon.co.jp/dp/B094XX6DJ4?tag=mybest_presses_7933-22",
          img: "img/picdata15.png",
          officialURL: "https://shop.chacott.co.jp/product/detail505607-0550-18_000.php",
          price: 1760,
          perprice: 41.904761904761905,
          gram: 42,
          memo1: "肌の凹凸やキメをぼかすソフトフォーカス効果で、肌表面をなめらかに見せる",
          color: 1,
          SPF: "50+",
          PA: "++++",
          state: "マット",
          cover: 1,
          nonchemicalprescription: 1,
          syntheticfragrancefree: 1
        },
        {
          id: 16,
          normal: "T",
          mix: "T",
          sensitive: "T",
          name: "皮脂テカリ防止下地 保湿タイプ",
          maker: "セザンヌ化粧品",
          brand: "CEZANNE",
          URL: "https://amazon.co.jp/dp/B082PF7CWF?tag=mybest_presses_7933-22",
          img: "img/picdata16.png",
          officialURL: "https://www.cezanne.co.jp/lineup/4939553041542/",
          price: 770,
          perprice: 25.666666666666668,
          gram: 30,
          memo1: "メイク崩れの原因となる、皮脂を吸収。ベタつかずサラサラの感触",
          color: 1,
          compo: "シクロペンタシロキサン、水、酸化亜鉛、酸化チタン、BG、ジメチコン、PEG-9ポリジメチルシロキシエチルジメチコン、PEG-10ジメチコン、DPG、トリ(カプリル酸/カプリン酸)グリセリル、(ジメチコン/ビニルジメチコン)クロスポリマー、ポリメチルシルセスキオキサン、シリカ、トリフルオロアルキルジメチルトリメチルシロキシケイ酸、マイカ、含水シリカ、水酸化Al、ハイドロゲンジメチコン、酸化鉄、ポリメタクリル酸メチル、水添ポリイソブテン、グリチルリチン酸2K、ノバラ油、ローマカミツレ花油、オリーブ果実油、ホホバ種子油、ヒマワリ種子油、カニナバラ果実油、スクワラン、アマニ油、アセチルヒアルロン酸Na、グリセリン、トコフェロール、α-グルカン、セージ葉エキス、グルコシルセラミド、セラミド3、温泉水、ユーカリ葉エキス、ザクロ果実エキス、フェノキシエタノール、エチルヘキシルグリセリン、ヒドロキシプロピルシクロデキストリン、ブチルカルバミン酸ヨウ化プロピニル",
          SPF: 28,
          PA: "+++",
          state: "セミマット",
          alcoholfree: 1,
          nonchemicalprescription: 1,
          syntheticfragrancefree: 1
        },
        {
          id: 17,
          normal: "T",
          mix: "T",
          sensitive: "T",
          name: "スキンイリュージョンプライマーUV",
          maker: "カネボウ化粧品",
          brand: "COFFRET D'OR",
          URL: "https://amazon.co.jp/dp/B08599RBMX?tag=mybest_presses_7933-22",
          img: "img/picdata17.png",
          officialURL: "https://www.kanebo-cosmetics.jp/coffretdor/products/base/item08/",
          price: 3049,
          perprice: 121.96,
          gram: 25,
          memo1: "つけた瞬間、顔の全方位が明るくつるんとした印象の仕上がりへ。ひと塗りで、くすみを飛ばし毛穴をカバー。",
          color: 4,
          SPF: "50+",
          PA: "+++",
          state: "マット",
          allergytest: 1,
          parabenfree: 1,
          syntheticfragrancefree: 1
        },
        {
          id: 18,
          normal: "T",
          mix: "T",
          oil: "T ",
          sensitive: "T",
          name: "スキンプロテクトベース＜乾燥くずれ防止＞",
          maker: "花王",
          brand: "SOFINA Primavista",
          URL: "https://amazon.co.jp/dp/B09DNZND99?tag=mybest_presses_7933-22",
          img: "img/picdata18.png",
          officialURL: "https://www.sofina.co.jp/primavista/products/moisturizing_primer/",
          price: 3080,
          perprice: 123.2,
          gram: 25,
          memo1: "伸びがよく軽いつけ心地が特徴。乾燥が気になる環境でも肌にしっとりなじみ 夕方までつっぱり感なく過ごせる。 小鼻のテカりまで防ぐ。",
          color: 4,
          compo: "ジメチコン、水、グリセリン、エタノール、メトキシケイヒ酸エチルヘキシル、ジフェニルシロキシフェニルトリメチコン、ＰＥＧ-１２ジメチコン、ポリシリコーン-９、ヒアルロン酸Ｎａ、アスナロ枝エキス、チューベロース多糖体、トリポリヒドロキシステアリン酸ジペンタエリスリチル、ＢＧ、ＰＥＧ-３２、水添ポリイソブテン、ステアリン酸、水酸化Ａｌ、（ジメチコン／ビニルジメチコン）クロスポリマー、タルク、マイカ、酸化チタン、酸化亜鉛、酸化鉄、含水シリカ、酸化スズ",
          SPF: 20,
          PA: "++",
          state: "セミマット",
          toneup: 1
        },
        {
          id: 19,
          normal: "T",
          mix: "T",
          sensitive: "T",
          name: "エッセンス グロウ プライマー",
          maker: "コーセー",
          brand: "ESPRIQUE",
          URL: "https://amazon.co.jp/dp/B08TD6CHQ2?tag=mybest_presses_7933-22",
          img: "img/picdata19.png",
          officialURL: "https://www.kose.co.jp/esprique/basemake/10.html",
          price: 2860,
          perprice: 95.33333333333333,
          gram: 30,
          memo1: "みずみずしいツヤ肌が、テカらず持続。美容液90%配合の化粧下地。 ",
          color: 3,
          compo: "水・BG・グリセリン・メトキシケイヒ酸エチルヘキシル・DPG・タルク・ジカプリン酸ネオペンチルグリコール・メチレンビスベンゾトリアゾリルテトラメチルブチルフェノール・エタノール・ジメチコン・アスコルビン酸・シロキクラゲエキス・ラベンダー油・加水分解コラーゲン・加水分解ヒアルロン酸・BHT・TEA・ (アクリレーツ/アクリル酸アルキル (C10-30) ) クロスポリマー・ (ビニルジメチコン/メチコンシルセスキオキサン) クロスポリマー・アクリレーツコポリマー・アルムK・カルボマー・キサンタンガム・ステアリン酸・セスキオレイン酸ソルビタン・セテアリルアルコール・トリエチルヘキサノイン・トリセテアレス-4リン酸・ヒドロキシアパタイト・ヒドロキシプロピルメチルセルロース・ベヘニルアルコール・ポリステアリン酸スクロース・ポリソルベート80・ポリソルベート85・ポリメチルシルセスキオキサン・ラウリル硫酸Na・ラウリン酸ポリグリセリル-10・レシチン・酸化スズ・水酸化Al・水添レシチン・フェノキシエタノール・メチルパラベン・マイカ・酸化チタン・酸化亜鉛・酸化鉄",
          SPF: 20,
          PA: "++",
          state: "マット",
          patchtest: 1,
          syntheticfragrancefree: 1
        },
        {
          id: 20,
          normal: "T",
          mix: "T",
          oil: "T",
          sensitive: "T",
          name: "&be マットプライマー",
          maker: "Clue",
          brand: "&be",
          URL: "https://amazon.co.jp/dp/B0C2NSH2Q7?tag=mybest_presses_7933-22",
          img: "img/picdata20.png",
          officialURL: "https://andbe-official.com/c/basemake/163",
          price: 2750,
          perprice: 83.33333333333333,
          gram: 33,
          memo1: "メイクキープ膜は内側にうるおいを抱え込みながらも表面はサラサラとした質感で、ソフトフォーカス効果により気になる毛穴やシワを目立ちにくくする。",
          color: 1,
          compo: "酸化亜鉛、シクロペンタシロキサン、水、メチルトリメチコン、イソノナン酸イソトリデシル、(スチレン/DVB)クロスポリマー、オクテニルコハク酸デンプンAl、ジメチコン、BG、ポリメチルシルセスキオキサン、PEGー9ポリジメチルシロキシエチルジメチコン、シリカ、イソステアリン酸、水酸化Al、PEGー11メチルエーテルジメチコン、セスキイソステアリン酸ソルビタン、ペンチレングリコール、トリエトキシカプリリルシラン、硫酸Ba、(ジメチコン/ビニルジメチコン)クロスポリマー、アクリレーツコポリマー、ジイソステアリン酸ポリグリセリルー2、トリメチルシロキシケイ酸、窒化ホウ素、ソルビトール、オレンジ油、オオベニミカン果皮油、マンダリンオレンジ果皮油、ベルガモット果実油、ラバンデュラハイブリダ油、ローズマリー葉油、ティーツリー葉油、フェノキシエタノール、塩化Na、グリセリン、ジカプリル酸ピリドキシン、ポリヒドロキシステアリン酸、ハイドロゲンジメチコン、トコフェロール、アーチチョーク葉エキス、ヒメフウロエキス、ダイズ種子エキス、酸化チタン、酸化鉄 ",
          SPF: "50+",
          PA: "++++",
          state: "マット",
          patchtest: 1,
          noncomedogenictest: 1,
          parabenfree: 1,
          nonchemicalprescription: 1,
          syntheticfragrancefree: 1
        },
        {
          id: 21,
          normal: "T",
          mix: "T",
          sensitive: "T",
          name: "THREE アドバンスドハーモニープライマー",
          maker: "ACRO",
          brand: "THREE",
          URL: "http://hb.afl.rakuten.co.jp/ichiba/15fa9210.e15d27f8.15fa9211.9e1f82bc/mybest_presses_7933-22?m=https%3A%2F%2Fitem.rakuten.co.jp%2Fcosmediva%2F4562248605592%2F&pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fcosmediva%2F4562248605592%2F",
          img: "img/picdata21.png",
          officialURL: "https://www.threecosmetics.com/onlineshop/g/gt2m193/",
          price: 4950,
          perprice: 165,
          gram: 30,
          memo1: "天然由来の整肌成分を配合した化粧下地。乾燥する季節でも肌をしっかりと守る保湿力と、時間が経ってもベースメイクを崩さないオイルコントロール力をあわせ持つ。",
          color: 1,
          SPF: 22,
          PA: "++",
          state: "つや",
          parabenfree: 1,
          nonchemicalprescription: 1,
          syntheticfragrancefree: 1,
          mineraloilfree: 1
        },
        {
          id: 22,
          normal: "T",
          mix: "T",
          oil: "T",
          sensitive: "T",
          name: "ツヤピッタプライマー",
          maker: "Rainmakers",
          brand: "muice",
          URL: "https://amazon.co.jp/dp/B0C2PSKZ24?tag=mybest_presses_7933-22",
          img: "img/picdata22.png",
          officialURL: "https://muice.jp/basemake/tsuyapitta-primer/",
          price: 1089,
          perprice: 43.56,
          gram: 25,
          memo1: "美容系動画クリエイターかわにしみきプロデュースのブランドmuiceから発売された化粧下地。皮脂崩れ防止成分や保湿成分を配合し、ツヤ肌なのに崩れにくい。",
          color: 1,
          compo: "【保湿成分】セラミドEOP・加水分解コラーゲン・ヒアルロン酸Na・グリセリン・ツボクサエキス・ローズマリー葉エキス ",
          SPF: "50+",
          PA: "++++",
          state: "つや"
        },
        {
          id: 23,
          normal: "T",
          mix: "T",
          sensitive: "T",
          name: "ミネラルインナートリートメントベース",
          maker: "エトヴォス",
          brand: "ETVOS",
          URL: "https://amazon.co.jp/dp/B08HCRFK1R?tag=mybest_presses_7933-22",
          img: "img/picdata23.png",
          officialURL: "https://etvos.com/shop/g/gAC10342/",
          price: 4950,
          perprice: 198,
          gram: 25,
          memo1: "微細なパールの効果で上品なツヤ肌に仕上げる。複数の整肌成分を配合し、透明感のあるハリ肌に導く。",
          color: 3,
          compo: "水、酸化チタン、BG、メドウフォーム油、ミリスチン酸オクチルドデシル、グリセリン、イソステアリン酸メチルヘプチル、ステアリン酸ポリグリセリル-10、酸化亜鉛、セスキイソステアリン酸ソルビタン、ヤシ脂肪酸ソルビタン、アラキジルアルコール、トリ(カプリル酸/カプリン酸)グリセリル、セラミドNG、セラミドNP、セラミドAP、クダモノトケイソウ種子油、ツバキ種子油、フランスラベンダーエキス、テトラヘキシルデカン酸アスコルビル、ポリクオタニウム-51、クロフサスグリ種子油、ヒマワリ種子油、ヒマワリ種子油不けん化物、ウメ果実エキス、加水分解オクラ種子エキス、クインスシードエキス、フウセンカズラ花/葉/つるエキス、ユキノシタエキス、ローズマリー葉エキス、フィトスフィンゴシン、フィトステロールズ、リノール酸レチノール、ホホバエステル、水添野菜油、ベタイン、ペンチレングリコール、キサンタンガム、スクレロチウムガム、デキストリン、パルミチン酸セチル、ダイマージリノール酸ダイマージリノレイル、オクチルドデカノール、ベヘニルアルコール、(ベヘン酸/エイコサン二酸)グリセリル、アラキルグルコシド、水添レシチン、ステアロイルラクチレートNa、ペンタステアリン酸ポリグリセリル-10、ジイソステアリン酸ポリグリセリル-3、トコフェロール、乳酸、メタリン酸Na、フェノキシエタノール、カニナバラ果実油、ニオイテンジクアオイ油、(+/-)酸化鉄、水酸化Al、ステアリン酸、マイカ、ラウロイルリシン",
          SPF: 31,
          PA: "+++",
          state: "つや",
          toneup: 1,
          cover: 1,
          soap: 1,
          patchtest: 1,
          alcoholfree: 1,
          parabenfree: 1,
          nonchemicalprescription: 1,
          syntheticfragrancefree: 1,
          stingingtest: 1,
          memo2: "メドウフォーム油・ツバキ種子油と複数のセラミドが配合されており、肌の保湿やバリア機能のサポートに期待ができる。ただし、酸化亜鉛と精油が肌に合わない人は注意は必要。"
        },
        {
          id: 36,
          normal: "T",
          desert: "T",
          mix: "T",
          sensitive: "T",
          name: "なめらか本舗 スキンケアUV下地",
          maker: "常盤薬品工業",
          brand: "SANA",
          URL: "https://amazon.co.jp/dp/B08TB33W7P?tag=mybest_presses_7933-22",
          img: "img/picdata36.png",
          officialURL: "https://noevirgroup.jp/sana/g/g70076/",
          price: 1100,
          perprice: 22,
          gram: 50,
          memo1: "スキンケア・日焼け止め・化粧下地の3役を担う。肌への刺激が少ない成分となめらか本舗オリジナルの豆乳発酵液が、素肌にうるおいを与えます。",
          color: 3,
          compo: "水、酸化亜鉛、シクロペンタシロキサン、ＢＧ、ジカプリン酸ネオペンチルグリコール、グリセリン、ＰＥＧ－９ポリジメチルシロキシエチルジメチコン、豆乳発酵液、ダイズ種子エキス、ダイズタンパク、 グリチルリチン酸２Ｋ、テトラ（ヒドロキシステアリン酸／イソステアリン酸）ジペンタエリスリチル、シリカ、レシチン、バチルアルコール、（ＰＥＧ－２４０／デシルテトラデセス－２０／ＨＤＩ）コポリマー、エタ ノール、エチルヘキシルグリセリン、キサンタンガム、クエン酸、ジェランガム、ステアリン酸、トコフェロール、トリ（カプリル酸／カプリン酸）グリセリル、ハイドロゲンジメチコン、ポリアクリル酸アンモニウ ム、ポリリノール酸スクロース、マイカ、水酸化Ａｌ、フェノキシエタノール、酸化チタン、酸化鉄",
          SPF: 40,
          PA: "+++",
          state: "つや",
          toneup: 1,
          cover: 1,
          soap: 1,
          patchtest: 1,
          allergytest: 1,
          parabenfree: 1,
          nonchemicalprescription: 1,
          syntheticfragrancefree: 1,
          mineraloilfree: 1,
          memo2: "保湿成分として豆乳発酵液・ダイズ種子エキスが配合されているほか、肌荒れ防止作用があるグリチルリチン酸2Kも入っている。ただし、酸化亜鉛で肌が荒れやすい人は注意。"
        },
        {
          id: 37,
          normal: "T",
          desert: "T",
          mix: "T",
          sensitive: "T",
          name: "スキンモイスチャーベース",
          maker: "オルビス",
          brand: "ORBIS",
          URL: "https://www.amazon.co.jp/dp/B07HN2LK5X?tag=mybest_presses_7933-22",
          img: "img/picdata37.png",
          officialURL: "https://www.orbis.co.jp/small/1253050/",
          price: 1540,
          perprice: 51.333333333333336,
          gram: 30,
          memo1: "うるおいベールがファンデの粉体とピタッと密着することで、仕上がりの美しさと化粧もちが格段にUP。ファンデの仕上がりを格上げし、美しくキープします。",
          color: 1,
          compo: "水、シクロペンタシロキサン、BG、酸化チタン、グリセリン、シクロヘキサシロキサン、ジフェニルシロキシフェニルトリメチコン、ベヘニルアルコール、ジメチコン、ヒアルロン酸ヒドロキシプロピルトリモニウム、ハチミツ、トコフェロール、ベントナイト、シリカ、含水シリカ、タルク、ポリクオタニウム-61、(アクリル酸アルキル/ジメチコン)コポリマー、ホウケイ酸(Ca/Na)、酸化銀、ハイドロゲンジメチコン、ポリアクリル酸Na、水酸化Al、キサンタンガム、ペンタステアリン酸ポリグリセリル-10、ポリグリセリル-3ポリジメチルシロキシエチルジメチコン、トリステアリン酸ポリグリセリル-10、ステアロイルラクチレートNa、クエン酸、セスキイソステアリン酸ソルビタン、ココグリセリル硫酸Na、メチルパラベン、プロピルパラベン、酸化鉄",
          SPF: 28,
          PA: "+++",
          state: "つや",
          toneup: 1,
          allergytest: 1,
          nonchemicalprescription: 1,
          syntheticfragrancefree: 1,
          mineraloilfree: 1,
          memo2: "ハチミツのほかには、特徴的な保湿成分は入っていない。"
        },
        {
          id: 40,
          normal: "T",
          desert: "T",
          mix: "T",
          sensitive: "T",
          name: "CCパーフェクトクリーム ベース",
          maker: "ジョンソン・エンド・ジョンソン",
          brand: "Dr.Ci Labo",
          URL: "https://amazon.co.jp/dp/B071X6BXGN?tag=mybest_presses_2468-22",
          img: "img/picdata40.png",
          officialURL: "https://www.ci-labo.com/shop/item/MakeUp/BaseMake/Bbcc/00049004.html",
          price: 3630,
          perprice: 145.2,
          gram: 25,
          memo1: "肌悩みをカバーしながら透明感のあるツヤ肌を作れる",
          color: 1,
          compo: "水、シクロペンタシロキサン、トリエチルヘキサノイン、酸化亜鉛、メトキシケイヒ酸エチルヘキシル、BG、ジメチコン、合成フルオロフロゴパイト、ラウリルPEG-9ポリジメチルシロキシエチルジメチコン、パルミチン酸エチルヘキシル、ペンチレングリコール、メタクリル酸メチルクロスポリマー、リンゴ酸ジイソステアリル、塩化Na、グリセリン、ノイバラ果実エキス、アーチチョーク葉エキス、エブリコエキス、セイヨウシロヤナギ樹皮エキス、オニイチゴ根エキス、ジ酢酸ジペプチドジアミノブチロイルベンジルアミド、マンダリンオレンジ果皮エキス、フェニルエチルレゾルシノール、アルブチン、水溶性コラーゲンクロスポリマー、水溶性コラーゲン、加水分解コラーゲン、ヒアルロン酸Na、ヒアルロン酸ヒドロキシプロピルトリモニウム、加水分解ヒアルロン酸、セラミドNG、セラミドNP、セラミドAP、ポリクオタニウム-51、トコフェロール、ジステアルジモニウムヘクトライト、トリメチルシロキシケイ酸、シリカ、タルク、(ジメチコン/ビニルジメチコン)クロスポリマー、PEG-3ジメチコン、ハイドロゲンジメチコン、マイカ、アルミナ、炭酸Ca、ジミリスチン酸Al、ヒドロキシアパタイト、ベヘニルアルコール、ペンタステアリン酸ポリグリセリル-10、ステアロイルラクチレートNa、イソステアリン酸フィトステリル、フェノキシエタノール、酸化チタン、酸化鉄、水酸化Al",
          SPF: "50+",
          PA: "++++",
          state: "セミマット",
          toneup: 1,
          cover: 1,
          faundation: 1,
          allergytest: 1,
          alcoholfree: 1,
          parabenfree: 1,
          syntheticfragrancefree: 1,
          mineraloilfree: 1,
          petroleumbasedsurfactantfree: 1,
          memo2: "保湿成分としてコラーゲン・ヒアルロン酸Na・セラミドが配合されているほか、アルブチンも含まれている。ただし、酸化亜鉛と紫外線吸収剤が刺激になる人は注意。"
        },
        {
          id: 41,
          normal: "T",
          desert: "T",
          mix: "T",
          sensitive: "T",
          name: " UVベースコントロールカラー",
          maker: "良品計画",
          brand: "無印良品",
          URL: "https://amazon.co.jp/dp/B087RXBG3T?tag=mybest_presses_2468-22",
          img: "img/picdata41.png",
          officialURL: "https://www.muji.com/jp/ja/store/cmdty/detail/4550002124755",
          price: 950,
          perprice: 31.666666666666668,
          gram: 30,
          memo1: "くすんだ肌をトーンアップし、明るく健康的な肌に見せる。",
          color: 5,
          compo: "シクロペンタシロキサン、酸化亜鉛、水、ジメチコン、ホホバ種子油、グリセリン、リンゴ酸ジイソステアリル、ＢＧ、ＤＰＧ、ＰＥＧ－９ポリジメチルシロキシエチルジメチコン、ポリグリセリル－３ポリジメチルシロキシエチルジメチコン、水酸化Ａｌ、カミツレ花エキス、シア脂、アンズ核油、ヒアルロン酸Ｎａ、トコフェロール、ポリメタクリル酸メチル、塩化Ｎａ、ステアリン酸、イソステアリン酸ソルビタン、ジステアルジモニウムヘクトライト、ハイドロゲンジメチコン、イソステアリン酸、（ビニルジメチコン／メチコンシルセスキオキサン）クロスポリマー、ジフェニルシロキシフェニルトリメチコン、フェノキシエタノール、酸化チタン、マイカ、酸化鉄",
          SPF: 32,
          PA: "+++",
          state: "つや",
          toneup: 1,
          alcoholfree: 1,
          parabenfree: 1,
          nonchemicalprescription: 1,
          syntheticfragrancefree: 1,
          mineraloilfree: 1,
          memo2: "保湿成分としてホホバ種子油・シア脂・ヒアルロン酸Naが配合。ただし、酸化亜鉛で肌が荒れる人は注意。"
        },
        {
          id: 44,
          normal: "T",
          desert: "T",
          mix: "T",
          oil: "T",
          sensitive: "T",
          name: "24 ミネラルコントロールベースカラー",
          maker: "ナチュラピュリファイ研究所",
          brand: "24h cosme",
          URL: "https://amazon.co.jp/dp/B079JXL7F2?tag=mybest_presses_2468-22",
          img: "img/picdata44.png",
          officialURL: "https://www.24h-cosme.jp/c/10/101/101013/P0000804",
          price: 1980,
          perprice: 99,
          gram: 20,
          memo1: "天然由来成分で開発された、長時間メイクにもお肌に優しい化粧下地。汗や皮脂に強く、てかりを防止する。",
          color: 2,
          compo: "水、オリーブ果実油、グリセリン、エタノール、酸化チタン、ステアリン酸、レシチン、マイカ、アルガニアスピノサ核油、ツバキ種子油、ウメ果実エキス、ビワ葉エキス、ヨモギ葉エキス、クマザサ葉エキス、コシロノセンダングサエキス、ニオイテンジクアオイ油、シア脂、トコフェロール、クエン酸、クエン酸Ｎａ、水酸化Ａｌ、アルギニン、キサンタンガム、銀、BG、（＋／－）タルク、酸化鉄、グンジョウ",
          SPF: 20,
          PA: "++",
          state: "マット",
          toneup: 1,
          soap: 1,
          parabenfree: 1,
          nonchemicalprescription: 1,
          syntheticfragrancefree: 1,
          memo2: "植物オイル・植物エキスが豊富に含まれており、オーガニック好きな人におすすめ。ただし、エタノール・精油で刺激を感じる人は注意"
        },
        {
          id: 45,
          normal: "T",
          desert: "T",
          mix: "T",
          oil: "T",
          sensitive: "T",
          name: "キールズ ブラー",
          maker: "日本ロレアル",
          brand: "KIEHL'S",
          URL: "https://amazon.co.jp/dp/B00L93LA6A?tag=mybest_presses_2468-22",
          img: "img/picdata45.png",
          officialURL: "https://www.kiehls.jp/skincare/face-product/face-sun-care/micro-blur-skin-perfector/511.html",
          price: 13999,
          perprice: 466.6333333333333,
          gram: 30,
          memo1: "肌の細かい凹凸や毛穴をなめらかに整え、柔らかい印象に。",
          color: 1,
          SPF: 0,
          PA: 0,
          state: "つや",
          memo2: "保湿成分は少なめ。香料が刺激になる人は注意。"
        },
        {
          id: 47,
          normal: "T",
          desert: "T",
          mix: "T",
          oil: "T",
          sensitive: "T",
          name: "スムーススキンカバー",
          maker: "ミムラ",
          brand: "NAPO",
          URL: "https://amazon.co.jp/dp/B01DT8G08A?tag=mybest_presses_2468-22",
          img: "img/picdata47.png",
          officialURL: "https://mimuraofficial.com/c/item/ss",
          price: 4620,
          perprice: 231,
          gram: 20,
          memo1: "「塗るあぶらとり紙」肌をフラットに整える。パリコレで活躍したプロ仕様化粧下地。",
          color: 1,
          compo: "ジメチコン、シクロペンタシロキサン、ポリシリコーン－１クロスポリマー、イソノナン酸イソノニル、メトキシケイヒ酸エチルヘキシル、酸化亜鉛、（ジメチコン／ビニルジメチコン）クロスポリマー、シリカ、ＰＥＧ－１０ジメチコン、パルミトイルトリペプチド－１、パルミトイルテトラペプチド－７、ジ酢酸ジペプチドジアミノブチロイルベンジルアミド、テトラヘキシルデカン酸アスコルビル、ＢＧ、グリセリン、水、カルボマー、ポリソルベート２０、トコフェロール、トリエトキシカプリリルシラン、ニオイテンジクアオイ花油",
          SPF: 20,
          PA: "++",
          state: "マット",
          alcoholfree: 1,
          parabenfree: 1,
          syntheticfragrancefree: 1,
          mineraloilfree: 1,
          memo2: "保湿成分は少なめだが、肌をすこやかに保つテトラへキシルデカン酸アスコルビルが入っている。酸化亜鉛・精油が肌に合わない人は注意。"
        },
        {
          id: 50,
          normal: "T",
          mix: "T",
          sensitive: "T",
          name: "すっぴんメイカー トーンアップUV",
          maker: "資生堂ジャパン ",
          brand: "INTEGRATE",
          URL: "https://amazon.co.jp/dp/B0BY2MHY8D?tag=mybest_presses_3977-22",
          img: "img/picdata50.png",
          officialURL: "https://www.shiseido.co.jp/ie/base/suppin-maker-toneup-uv/",
          price: 1540,
          perprice: 61.6,
          gram: 25,
          memo1: "毛穴の凹凸をカバーしながら、トーンアップし素肌以上の透明感を実現する。保湿成分と皮脂吸着パウダーを配合し、うるおうのにテカらずつるんとした肌が続く。",
          color: 1,
          compo: "水,メトキシケイヒ酸エチルヘキシル,エタノール,ジメチコン,BG,DPG,オクトクリレン,シリカ,水添ポリデセン,ビスエチルヘキシルオキシフェノールメトキシフェニルトリアジン,PPG-8セテス-20,グリセリン,ジエチルアミノヒドロキシベンゾイル安息香酸ヘキシル,トレハロース,PEG/PPG-17/4ジメチルエーテル,アミノプロピルジメチコン,ポリウレタン-10,エリスリトール,PEG/PPG-14/7ジメチルエーテル,マカデミアナッツ脂肪酸フィトステリル,(ジメチルアクリルアミド/アクリロイルジメチルタウリンNa)クロスポリマー,PEG-12ジメチコン,サクシノグリカン,水酸化Al,PEG-11メチルエーテルジメチコン,トリエトキシカプリリルシラン,クエン酸Na,メタリン酸Na,ステアロキシヒドロキシプロピルメチルセルロース,EDTA-3Na,BHT,ピロ亜硫酸Na,トコフェロール,フェノキシエタノール,酸化チタン,硫酸Ba,酸化鉄 ",
          SPF: "50+",
          PA: "++++",
          state: "つや",
          toneup: 1,
          cover: 1,
          soap: 1,
          allergytest: 1,
          noncomedogenictest: 1,
          syntheticfragrancefree: 1
        },
        {
          id: 51,
          normal: "T",
          mix: "T",
          sensitive: "T",
          name: "RMK メイクアップベース",
          maker: "カネボウ化粧品",
          brand: "RMK ",
          URL: "https://amazon.co.jp/dp/B07NHZS79H?tag=mybest_presses_3977-22",
          img: "img/picdata51.png",
          officialURL: "https://onlineshop.rmkrmk.com/ja/Root-Category/Positive-Base-Makeup/Makeup-Base/RMK-%E3%83%A1%E3%82%A4%E3%82%AF%E3%82%A2%E3%83%83%E3%83%97%E3%83%99%E3%83%BC%E3%82%B9/p/431396",
          price: 4070,
          perprice: 135.66666666666666,
          gram: 30,
          memo1: "乳液のようなテクスチャで、肌に溶け込むようになじむ。肌表面をつるんとなめらかな状態に整え、ファンデーションが薄くムラなくフィットする化粧下地。",
          color: 1,
          SPF: 4,
          PA: 0,
          state: "つや",
          allergytest: 1
        },
        {
          id: 52,
          normal: "T",
          mix: "T",
          sensitive: "T",
          name: "プロテクティング ファンデーション プライマー",
          maker: "アルビオン",
          brand: "PAUL & JOE",
          URL: "https://amazon.co.jp/dp/B0861FM8N8?tag=mybest_presses_3977-22",
          img: "img/picdata52.png",
          officialURL: "https://www.paul-joe-beaute.com/products/apaavw01",
          price: 3850,
          perprice: 128.33333333333334,
          gram: 30,
          memo1: "肌にピタっと密着し、崩れにくく美しい仕上がりをキープする",
          color: 2,
          SPF: "50+",
          PA: "++++",
          state: "つや"
        },
        {
          id: 53,
          normal: "T",
          desert: "T",
          mix: "T",
          sensitive: "T",
          name: "キス マットシフォン UVモイストベース",
          maker: "伊勢半",
          brand: "kiss",
          URL: "https://amazon.co.jp/dp/B01HWE59CK?tag=mybest_presses_3977-22",
          img: "img/picdata53.png",
          officialURL: "https://onlinestore.isehangroup.jp/products/000000000114",
          price: 1760,
          perprice: 47.567567567567565,
          gram: 37,
          memo1: "優れた保湿力で肌を守りながら、過剰な皮脂を吸収しメイク崩れを防ぐ",
          color: 2,
          compo: "シクロペンタシロキサン、水、酸化亜鉛、メタクリル酸メチルクロスポリマー、ジグリセリン、DPG、PEG-9ジメチコン、ジメチコン、ジステアルジモニウムヘクトライト、カミツレ花エキス、アセチルヒアルロン酸Na、水溶性コラーゲン、コメヌカスフィンゴ糖脂質、レシチン、コメヌカ油、クエン酸Na、トリエチルヘキサノイン、ラウロイルグルタミン酸ジ(フィトステリル/オクチルドデシル)、水酸化Al、メチコン、トリメチルシロキシケイ酸、ステアリン酸、(ジメチコン/ビニルジメチコン)クロスポリマー、BG、ハイドロゲンジメチコン、ポリクオタニウム-51、グリセリン、オレイン酸ポリグリセリル-10、トリ(カプリル酸/カプリン酸)グリセリル、酸化チタン、タルク、酸化鉄",
          SPF: 26,
          PA: "++",
          state: "マット",
          toneup: 1,
          cover: 1,
          faundation: 1,
          noncomedogenictest: 1,
          nonchemicalprescription: 1,
          syntheticfragrancefree: 1
        },
        {
          id: 54,
          normal: "T",
          desert: "T",
          mix: "T",
          sensitive: "T",
          name: "ラディアント タッチ ブラープライマー",
          maker: "日本ロレアル",
          brand: "YVES SAINT LAURENT",
          URL: "https://amazon.co.jp/dp/B00Y1GVHE2?tag=mybest_presses_3977-22",
          img: "img/picdata54.png",
          officialURL: "https://www.yslb.jp/makeup/makeup-complexion/makeup-primer/touche-eclat-blur-primer/WW-20210YSL.html",
          price: 7810,
          perprice: 260.3333333333333,
          gram: 30,
          memo1: "息をのむほど上質な肌へのファーストステップ。 「均一でなめらかな透明肌」に整え、ファンデーションの仕上がりを高めます。",
          color: 1,
          SPF: 0,
          PA: 0,
          state: "マット"
        },
        {
          id: 55,
          normal: "T",
          desert: "T",
          mix: "T",
          sensitive: "T",
          name: "ルフレ バランシング おしろいミルク",
          maker: "資生堂",
          brand: "ELIXIR",
          URL: "https://amazon.co.jp/dp/B079M8G8CY?tag=mybest_presses_3977-22",
          img: "img/picdata55.png",
          officialURL: "https://www.shiseido.co.jp/elixir/reflet/products/oshiroimilk/",
          price: 1980,
          perprice: 56.57142857142857,
          gram: 35,
          memo1: "おしろい効果でテカリを抑え、毛穴を隠す化粧下地効果つきの朝用乳液。皮脂と水分のバランスを整えることでうるおい、ツヤ玉のある肌になる。",
          color: 1,
          compo: "水,エタノール,メトキシケイヒ酸エチルヘキシル,酸化亜鉛,PEG-8,BG,オクトクリレン,カプリリルメチコン,グリセリン,ポリブチレングリコール/PPG-9/1コポリマー,ポリシリコーン-15,ジエチルアミノヒドロキシベンゾイル安息香酸ヘキシル,ビスPEG-18メチルエーテルジメチルシラン,エチルヘキサン酸セチル,シリカ,ビスエチルヘキシルオキシフェノールメトキシフェニルトリアジン,PEG/PPG-17/4ジメチルエーテル,グリシルグリシン,マカデミアナッツ脂肪酸フィトステリル,ポリクオタニウム-51,アセチルヒアルロン酸Na,リシンHCl,オウゴン根エキス,PCA-Na,モモ種子エキス,ユキノシタエキス,チャエキス,水溶性コラーゲン,トリエトキシカプリリルシラン,(ジメチルアクリルアミド/アクリロイルジメチルタウリンNa)クロスポリマー,ステアロキシヒドロキシプロピルメチルセルロース,BHT,サクシノグリカン,水酸化Al,テトラヒドロテトラメチルシクロテトラシロキサン,テトラデセン,ローズマリー葉エキス,トコフェロール,フェノキシエタノール,香料,硫酸Ba,酸化チタン,酸化鉄",
          SPF: "50+",
          PA: "++++",
          state: "セミマット",
          soap: 1,
          allergytest: 1,
          noncomedogenictest: 1,
          parabenfree: 1
        },
        {
          id: 56,
          normal: "T",
          desert: "T",
          mix: "T",
          sensitive: "T",
          name: "ルフレ バランシング おしろいミルク C",
          maker: "資生堂",
          brand: "ELIXIR",
          URL: "https://amazon.co.jp/dp/B079M8G8CY?tag=mybest_presses_3977-22",
          img: "img/picdata56.png",
          officialURL: "https://www.shiseido.co.jp/elixir/reflet/products/oshiroimilk/",
          price: 1980,
          perprice: 56.57142857142857,
          gram: 35,
          memo1: "おしろい効果でテカりをおさえ、毛穴を隠して透明感をアップ。さらに、皮脂と水分のバランスを整えるから、うるおって毛穴の目立たない「つや玉」のある肌でいられます。くすみ・色むらを隠す、自然なカバー効果。",
          color: 1,
          compo: "水,エタノール,メトキシケイヒ酸エチルヘキシル,酸化亜鉛,PEG-8,BG,オクトクリレン,カプリリルメチコン,グリセリン,ポリブチレングリコール/PPG-9/1コポリマー,ポリシリコーン-15,ジエチルアミノヒドロキシベンゾイル安息香酸ヘキシル,ビスPEG-18メチルエーテルジメチルシラン,エチルヘキサン酸セチル,ビスエチルヘキシルオキシフェノールメトキシフェニルトリアジン,PEG/PPG-17/4ジメチルエーテル,マカデミアナッツ脂肪酸フィトステリル,ポリクオタニウム-51,グリシルグリシン,アセチルヒアルロン酸Na,リシンHCl,オウゴン根エキス,PCA-Na,モモ種子エキス,ユキノシタエキス,チャエキス,水溶性コラーゲン,トリエトキシカプリリルシラン,(ジメチルアクリルアミド/アクリロイルジメチルタウリンNa)クロスポリマー,ステアロキシヒドロキシプロピルメチルセルロース,セスキイソステアリン酸ソルビタン,水酸化Al,BHT,トコフェロール,テトラヒドロテトラメチルシクロテトラシロキサン,サクシノグリカン,タルク,テトラデセン,シリカ,ジメチコン,ハイドロゲンジメチコン,ローズマリー葉エキス,フェノキシエタノール,香料,酸化チタン,硫酸Ba,酸化鉄",
          SPF: "50+",
          PA: "++++",
          state: "つや",
          toneup: 1,
          cover: 1,
          faundation: 1,
          soap: 1,
          allergytest: 1,
          noncomedogenictest: 1,
          parabenfree: 1
        },
        {
          id: 57,
          normal: "T",
          desert: "T",
          mix: "T",
          sensitive: "T",
          name: "ヴォワールイドラタンロングトゥニュ",
          maker: "資生堂インターナショナル",
          brand: "cle de peau BEAUTE",
          URL: "https://amazon.co.jp/dp/B08DRF9JZH?tag=mybest_presses_3977-22",
          img: "img/picdata57.png",
          officialURL: "https://www.cledepeau-beaute.com/jp/4514254971895.html",
          price: 7150,
          perprice: 238.33333333333334,
          gram: 30,
          memo1: "乾燥・皮脂によるテカリ・汗などによるさまざまな化粧崩れを防ぎ、美しいファンデーションの仕上がりを持続。素肌のような質感に整え、なめらかで明るく輝く肌へと導きます。",
          color: 1,
          SPF: 25,
          PA: "++",
          state: "つや",
          allergytest: 1,
          noncomedogenictest: 1
        },
        {
          id: 58,
          normal: "T",
          desert: "T",
          mix: "T",
          oil: "T",
          sensitive: "T",
          name: "ドラマティックスキンセンサーベース NEO",
          maker: "資生堂",
          brand: "MAQuillAGE",
          URL: "https://amazon.co.jp/dp/B0BR7L3VMN?tag=mybest_presses_3977-22",
          img: "img/picdata58.png",
          officialURL: "https://maquillage.shiseido.co.jp/features/dramatic-skin-sensor-base-neo/",
          price: 2970,
          perprice: 118.8,
          gram: 25,
          memo1: "テカリとカサつきをダブルで防ぐ。皮脂・水分量をコントロールして、うるおっているのにテカリのない状態を長時間キープ。",
          color: 2,
          compo: "ジメチコン,水,セバシン酸ジイソプロピル,酸化亜鉛,メトキシケイヒ酸エチルヘキシル,シリカ,エタノール,カプリリルメチコン,BG,オクトクリレン,ポリアミド-8,PEG-9ポリジメチルシロキシエチルジメチコン,グリセリン,酸化チタン,ジエチルアミノヒドロキシベンゾイル安息香酸ヘキシル,トリメチルシロキシケイ酸,パルミチン酸デキストリン,ジフェニルシロキシフェニルトリメチコン,コメ胚芽油,グリシルグリシン,水添ポリイソブテン,グリチルリチン酸2K,ポリクオタニウム-51,アセチルヒアルロン酸Na,水溶性コラーゲン,コウホネエキス,PEG-10ジメチコン,PPG-17,ジステアルジモニウムヘクトライト,イソステアリン酸,水酸化Al,ステアリン酸,EDTA-3Na,BHT,トコフェロール,クエン酸,クエン酸Na,ジステアリルジモニウムクロリド,トリ(カプリル酸/カプリン酸)グリセリル,ミリスチン酸イソプロピル,ピロ亜硫酸Na,トリエトキシカプリリルシラン,PEG/PPG-19/19ジメチコン,テトラ(ジ-t-ブチルヒドロキシヒドロケイヒ酸)ペンタエリスリチル,ニオイテンジクアオイ油,タルク,テトラヒドロテトラメチルシクロテトラシロキサン,ハイドロゲンジメチコン,ポリビニルアルコール,テトラデセン,フェノキシエタノール,マイカ,グンジョウ,酸化鉄 ",
          SPF: "50+",
          PA: "++++",
          state: "セミマット",
          toneup: 1,
          cover: 1,
          allergytest: 1,
          syntheticfragrancefree: 1
        },
        {
          id: 67,
          normal: "T",
          desert: "T",
          mix: "T",
          oil: "T",
          sensitive: "T",
          name: "サンシェルター マルチ プロテクション トーンアップCC",
          maker: "コスメデコルテ",
          brand: "コスメデコルテ",
          URL: "https://www.cosme.com/products/detail.php?product_id=283238&_gl=1*1eqcmun*_ga*MTM3MDk5MTkxLjE2ODg1NTMxMzM.*_ga_HEKY12CWNG*MTY5NzI1NTg1Ny4xOC4xLjE2OTcyNjExNjcuNTguMC4w*_gcl_au*NTA0OTY5MzM5LjE2OTY1NzAzMjc.&_ga=2.94177181.1806254124.1697255859-137099191.1688553133",
          img: "img/picdata67.png",
          officialURL: "https://www.decorte.com/site/g/gJSUL001/",
          price: 3300,
          perprice: 110,
          gram: 30,
          memo1: "なめらかなスキンケアタッチで心地よくのび広がり、透明感あふれる素肌美を演出しながら肌をトーンアップする。",
          color: 3,
          compo: "水・シクロメチコン・メトキシケイヒ酸エチルヘキシル・エタノール・ジメチコン・PEG-9ポリジメチルシロキシエチルジメチコン・ジエチルアミノヒドロキシベンゾイル安息香酸ヘキシル・パルミチン酸オクチル・メチルトリメチコン・タルク・メチレンビスベンゾトリアゾリルテトラメチルブチルフェノール・グリセリン・BG・アロエベラ葉エキス・ウメ果実エキス・シロキクラゲエキス・ゼニアオイエキス・テトラヘキシルデカン酸アスコルビル・トコフェロール・ヒドロキシプロリン・ライチー種子エキス・ルイボスエキス・ローズマリー葉エキス・ローズマリー葉水・ワサビノキ種子油・加水分解コラーゲン・水溶性コラーゲン・BHT・DPG・アルミナ・オクチルドデカノール・キサンタンガム・ジステアルジモニウムヘクトライト・ステアラルコニウムヘクトライト・ステアリン酸・ステアロイルグルタミン酸2Na・ダイマージリノール酸(フィトステリル/イソステアリル/セチル/ステアリル/ベヘニル)・トリエトキシカプリリルシラン・ナイロン-12・ポリエチレン・ポリメチルシルセスキオキサン・ラウリルPEG-9ポリジメチルシロキシエチルジメチコン・ラウリン酸ポリグリセリル-10・ラウロイルグルタミン酸ジ(フィトステリル/オクチルドデシル)・ラウロイルリシン・リンゴ酸ジイソステアリル・塩化Na・水酸化Al・フェノキシエタノール・香料・酸化チタン・酸化亜鉛・酸化鉄",
          SPF: "50+",
          PA: "++++",
          state: "セミマット",
          toneup: 1,
          cover: 1
        },
        {
          id: 68,
          normal: "T",
          desert: "T",
          mix: "T",
          oil: "T",
          name: "ニベアUV ディープ プロテクト＆ケア ジェル",
          maker: "ニベア花王",
          brand: "ニベア",
          URL: "https://www.cosme.com/products/detail.php?product_id=218607&_gl=1*1fho5hw*_ga*MTM3MDk5MTkxLjE2ODg1NTMxMzM.*_ga_HEKY12CWNG*MTY5NzI1NTg1Ny4xOC4xLjE2OTcyNTY1MDUuNTguMC4w*_gcl_au*NTA0OTY5MzM5LjE2OTY1NzAzMjc.&_ga=2.260965901.1806254124.1697255859-137099191.1688553133",
          img: "img/picdata68.png",
          officialURL: "https://www.nivea.co.jp/products/uv-deep-protect-and-care-gel-49013013904240052.html",
          price: 1078,
          perprice: 13.475,
          gram: 80,
          memo1: "ハリ・弾力低下の原因となるUV-Aも、主にシミの原因となるUV-Bもしっかり防ぎます。",
          color: 1,
          compo: "水、エタノール、メトキシケイヒ酸エチルヘキシル、BG、カプリリルメチコン、ジエチルアミノヒドロキシベンゾイル安息香酸ヘキシル、パルミチン酸イソプロピル、ビスエチルヘキシルオキシフェノールメトキシフェニルトリアジン、セバシン酸ジイソプロピル、エチルヘキシルトリアゾン、ポリシリコーン-15、ジメチルシリル化シリカ、スイカズラ花エキス、加水分解コンキオリン、ダマスクバラ花水、ヒアルロン酸Na、クインスシードエキス、ポリメチルシルセスキオキサン、(アクリレーツ/アクリル酸アルキル(C10-30))クロスポリマー、ラウロイルリシン、ヒドロキシプロピルメチルセルロースステアロキシエーテル、ジラウラミドグルタミドリシンNa、アルキル(C30-45)メチコン、オレフィン(C30-45)、メントキシプロパンジオール、フェノキシエタノール、水酸化Na、BHT、メチルパラベン、香料",
          SPF: "50+",
          PA: "++++",
          state: "つや",
          soap: 1
        },
        {
          id: 69,
          normal: "T",
          desert: "T",
          mix: "T",
          oil: "T",
          name: "パーフェクトＵＶ　スキンケアミルク　Ｎ",
          maker: "資生堂",
          brand: "アネッサ",
          URL: "https://www.shiseido.co.jp/sw/c/products/SWFG070410.seam?&shohin_pl_c_cd=G04301&online_shohin_ctlg_kbn=1&inflowcd=ad_affiliate_00162112&argument=qmMDZaNT&dmai=62d9ea815eeeb&vc_lpp=MSZjYjI0YjllMzdhJjY1MmExNTViJjJhYWRiOSY2NTc5MmY1YiZaU29WV3dBQkVXR0ZZNlA5d0tocHZNQ29hU2NNb3cmNAlaU29WV3dBQkVXR0ZZNlA5d0tocHZNQ29hU2NNb3cJMDg4MDkxMzUyNTAyNTUyMDg3MjMxMDE0MDQxMzE1CQkJ",
          img: "img/picdata69.png",
          officialURL: "https://www.shiseido.co.jp/anessa/products/suncare/perfect_uv_sm/",
          price: 3300,
          perprice: 55,
          gram: 60,
          memo1: "透明美肌仕上げの最強UVスキンケアミルク。ビューティーアップ効果、透明美肌仕上げ。マスク蒸れ対応・耐こすれ・スーパーウォータープルーフ・せっけんで落とせます。",
          color: 1,
          compo: "ジメチコン,水,酸化亜鉛,エタノール,タルク,イソドデカン,セバシン酸ジイソプロピル,オクトクリレン,サリチル酸エチルヘキシル,安息香酸アルキル（Ｃ１２－１５）,ＰＥＧ／ＰＰＧ－９／２ジメチルエーテル,コーンスターチ,シリカ,ミリスチン酸イソプロピル,ジエチルアミノヒドロキシベンゾイル安息香酸ヘキシル,酸化チタン,ＰＥＧ－９ポリジメチルシロキシエチルジメチコン,パルミチン酸デキストリン,グリセリン,ホモサレート,ポリシリコーン－１５,ビスエチルヘキシルオキシフェノールメトキシフェニルトリアジン,塩化Ｎａ,ＰＥＧ／ＰＰＧ－１４／７ジメチルエーテル,異性化糖,グリチルリチン酸２Ｋ,チャエキス,トルメンチラ根エキス,アセチルヒアルロン酸Ｎａ,水溶性コラーゲン,エチルヘキシルトリアゾン,ＰＥＧ－１０ジメチコン,イソステアリン酸,トリエトキシカプリリルシラン,ジステアルジモニウムヘクトライト,水酸化Ａｌ,ステアリン酸,ＥＤＴＡ－３Ｎａ,ＰＥＧ－６,トコフェロール,ＢＨＴ,ＢＧ,ピロ亜硫酸Ｎａ,クエン酸,クエン酸Ｎａ,トリエトキシシリルエチルポリジメチルシロキシエチルジメチコン,フェノキシエタノール,香料,合成金雲母 ",
          SPF: "50+",
          PA: "++++",
          state: "マット",
          soap: 1,
          allergytest: 1,
          noncomedogenictest: 1
        },
        {
          id: 70,
          normal: "T",
          desert: "T",
          mix: "T",
          oil: "T",
          name: "アリィー クロノビューティ ジェルUV EX",
          maker: "カネボウ化粧品",
          brand: "アリィー(ALLIE)",
          URL: "https://www.cosme.com/products/detail.php?product_id=252986&_gl=1*qc99yz*_ga*MTM3MDk5MTkxLjE2ODg1NTMxMzM.*_ga_HEKY12CWNG*MTY5NzI1NTg1Ny4xOC4xLjE2OTcyNTcyODUuMjUuMC4w*_gcl_au*NTA0OTY5MzM5LjE2OTY1NzAzMjc.&_ga=2.97520159.1806254124.1697255859-137099191.1688553133",
          img: "img/picdata70.png",
          officialURL: "https://www.kanebo-cosmetics.jp/allie/product/item/item01/",
          price: 2728,
          perprice: 30.31111111111111,
          gram: 90,
          memo1: "うるおってベタつかずキレイがつづく　汗・水こすれに強いUVジェル",
          color: 1,
          compo: "水、酸化亜鉛、エタノール、セバシン酸ジイソプロピル、炭酸ジカプリリル、エチルヘキシルトリアゾン、グリセリン、安息香酸アルキル(C12-15)、ジメチコン、ドロメトリゾールトリシロキサン、(アクリル酸Na/アクリロイルジメチルタウリンNa)コポリマー、ビスエチルヘキシルオキシフェノールメトキシフェニルトリアジン、BG、イソヘキサデカン、トリエトキシカプリリルシラン、ポリアクリル酸アルキル(C10-30)、(アクリレーツ/メタクリル酸ポリトリメチルシロキシ)コポリマー、PEG-400、ポリソルベート80、アルキル(C30-45)メチコン、キサンタンガム、オレフィン(C30-45)、オレイン酸ソルビタン、ポリシリコーン-9、EDTA-2Na、ヒアルロン酸Na",
          SPF: "50+",
          PA: "++++",
          state: "つや",
          soap: 1
        },
        {
          id: 71,
          normal: "T",
          desert: "T",
          mix: "T",
          oil: "T",
          sensitive: "T",
          name: "カネボウ ヴェイル オブ デイ",
          maker: "KANEBO",
          brand: "KANEBO",
          URL: "https://www.cosme.com/products/detail.php?product_id=296469&_gl=1*1x96uuv*_ga*MTM3MDk5MTkxLjE2ODg1NTMxMzM.*_ga_HEKY12CWNG*MTY5NzI1NTg1Ny4xOC4xLjE2OTcyNTg3MTQuNTkuMC4w*_gcl_au*NTA0OTY5MzM5LjE2OTY1NzAzMjc.&_ga=2.101658497.1806254124.1697255859-137099191.1688553133",
          img: "img/picdata71.png",
          officialURL: "https://global.kanebo.com/ja/categories/skincare/serum/p/25990045",
          price: 5500,
          perprice: 137.5,
          gram: 40,
          memo1: "水相成分を約75％配合し、継続的に肌ヘ補水する日中用美容液。強力な紫外線をカットしながら、肌に適した水分環境をつくり、日中の肌を守ります。",
          color: 1,
          compo: "水、メトキシケイヒ酸エチルヘキシル、ジメチコン、セバシン酸ジイソプロピル、ベヘニルアルコール、グリセリン、フェニルベンズイミダゾールスルホン酸、トリエチルヘキサノイン、BG、ビスエチルヘキシルオキシフェノールメトキシフェニルトリアジン、ステアリン酸ソルビタン、TEA、t-ブチルメトキシジベンゾイルメタン、ジエチルアミノヒドロキシベンゾイル安息香酸ヘキシル、エチルヘキシルトリアゾン、カルボマー、ヤシ脂肪酸スクロース、水酸化Na、ステアロイルグルタミン酸Na、キサンタンガム、香料、EDTA-2Na、ヒアルロン酸Na、ビルベリー葉エキス、アルテア根エキス、チャ葉エキス、フェノキシエタノール、クロルフェネシン、赤504",
          SPF: 50,
          PA: "+++",
          state: "つや"
        },
        {
          id: 72,
          normal: "T",
          desert: "T",
          mix: "T",
          sensitive: "T",
          name: "コスメデコルテ フローレススキン グロウライザー ",
          maker: "コスメデコルテ",
          brand: "コスメデコルテ",
          URL: "https://www.cosme.com/products/detail.php?product_id=302093&_gl=1*1onglqy*_ga*MTM3MDk5MTkxLjE2ODg1NTMxMzM.*_ga_HEKY12CWNG*MTY5NzI1NTg1Ny4xOC4xLjE2OTcyNTkxNzIuNTguMC4w*_gcl_au*NTA0OTY5MzM5LjE2OTY1NzAzMjc.&_ga=2.106712835.1806254124.1697255859-137099191.1688553133",
          img: "img/picdata72.png",
          officialURL: "https://www.decorte.com/site/g/gJETG/",
          price: 4950,
          perprice: 165,
          gram: 30,
          memo1: "肌にとけ込むようになめらかにのび広がり、内側からにじみ出るような艶感をあたえながら、くすみ・色ムラ・赤み・毛穴・凹凸・小ジワなどのあらゆる肌悩みを瞬時にカバー。",
          color: 1,
          compo: "水・シクロメチコン・エタノール・ジカプリン酸ネオペンチルグリコール・メトキシケイヒ酸エチルヘキシル・ジカプリン酸PG・エチルヘキサン酸セチル・(ジフェニルジメチコン/ビニルジフェニルジメチコン/シルセスキオキサン)クロスポリマー・ラウリルPEG-9ポリジメチルシロキシエチルジメチコン・メチルグルセス-10・リンゴ酸ジイソステアリル・PEG-9ポリジメチルシロキシエチルジメチコン・タルク・ポリメチルシルセスキオキサン・グリセレス-26・ジメチコン・(ビニルジメチコン/メチコンシルセスキオキサン)クロスポリマー・BG・メチルトリメチコン・(フッ化/水酸化/酸化)/(Mg/K/ケイ素)・窒化ホウ素・アイ葉/茎エキス・アストロカリウムムルムル種子脂・セイヨウニワトコ花エキス・ゼニアオイ花/葉/茎エキス・ダマスクバラ花エキス・トコフェロール・マツリカ花エキス・レモン果実エキス・BHT・(ジメチコン/ビニルジメチコン)クロスポリマー・キサンタンガム・ジステアルジモニウムヘクトライト・ジフェニルシロキシフェニルトリメチコン・スクワラン・ステアラルコニウムヘクトライト・セスキオレイン酸ソルビタン・トリエトキシカプリリルシラン・ビスエチルヘキシルオキシフェノールメトキシフェニルトリアジン・ラウロイルリシン・レシチン・塩化Na・含水シリカ・合成フルオロフロゴパイト・酸化スズ・水酸化Al・麻セルロース・フェノキシエタノール・香料・酸化チタン・酸化亜鉛・酸化鉄",
          SPF: 20,
          PA: "++",
          state: "つや",
          toneup: 1,
          cover: 1,
          allergytest: 1,
          noncomedogenictest: 1,
          parabenfree: 1
        }
      ]
    
  },
  computed: {
      // 絞り込み後の商品リストを返す算出プロパティ
      filleredList: function() {
        
        
        // 絞り込み後の商品リストの格納
        var newList = [];
        for (var i = 0; i < this.products.length; i++) {
          var isShow = 1;
          // i番目の商品が表示対象か判定
  
  
          // 「つや」チェックありで、つやではない場合
          if (this.showtuya && this.products[i].state !=="つや") {
            isShow = false;
          }
          if (this.showcover && this.products[i].cover !==1) {
            isShow = false;
          }
          if (this.showfaunda && this.products[i].faundation !==1) {
            isShow = false;
          }
          if (this.showtone && this.products[i].toneup !==1) {
            isShow = false;
          }
          if (this.showsoap && this.products[i].soap !==1) {
            isShow = false;
          }
          if (this.showallergy && this.products[i].allergytest !==1) {
            isShow = false;
          }
          if (this.showpatch && this.products[i].patchtest !==1) {
            isShow = false;
          }
          if (this.showcomedo && this.products[i].noncomedogenictest !==1) {
            isShow = false;
          }
          if (this.showstinging && this.products[i].stingingtest !==1) {
            isShow = false;
          }
          if (this.showchemical && this.products[i].nonchemicalprescription !==1) {
            isShow = false;
          }
          if (this.showalcohol && this.products[i].alcoholfree !==1) {
            isShow = false;
          }
          if (this.showpetro && this.products[i].petroleumbasedsurfactantfree !==1) {
            isShow = false;
          }
          if (this.showsynthe && this.products[i].syntheticfragrancefree !==1) {
            isShow = false;
          }
          if (this.showparaben && this.products[i].parabenfree !==1) {
            isShow = false;
          }
          if (this.showmineral && this.products[i].mineraloilfree !==1) {
            isShow = false;
          }
        
  
          //日焼け止め効果ありにチェックが入っててSPFが0の場合
          if (this.showSPFPA && this.products[i].SPF == 0) {
              isShow = false;
            }
            
          // 表示対象の商品だけを新しい配列に追加する
          if (isShow) {
            newList.push(this.products[i]);
          }
        }
        // 並び替え機能
        if (this.sortOrder == 1) {
  
        }
        else if (this.sortOrder == 2) {
          // 価格が安い順に並び替える
          newList.sort(function(a,b) {
            return a.price - b.price;
          });
        }
        else if (this.sortOrder == 3) {
          // 価格が高い順に並び替える
          newList.sort(function(a,b) {
            return b.price - a.price;
          });
      }else if (this.sortOrder == 4) {
              // コスパが高い順に並び替える
              newList.sort(function(a,b) {
                return a.perprice - b.perprice;
              });
        }
       
        // 絞り込み後の商品リストを返す
        return newList;
     
      },
      totalPages() {
        return Math.ceil(this.filleredList.length / this.itemsPerPage);
      },
      paginatedList() {
        const start = (this.currentPage - 1) * this.itemsPerPage;
        const end = start + this.itemsPerPage;
        return this.filleredList.slice(start, end);
      },
    },
    methods: {
        nextPage() {
          if (this.currentPage < this.totalPages) {
            this.currentPage++;
          }
        },
        prevPage() {
          if (this.currentPage > 1) {
            this.currentPage--;
          }
        },
        showDetails: function(product) {
            // モーダル表示のロジックを追加
            
            alert(`Showing details for product: ${product.name}\nPrice: ${product.price}\nBrand: ${product.brand}`);
            console.log("Showing details for product: ", product);
        },
        addToFavorites: function(product) {
            this.favorites.push(product);
          },
          removeFromFavorites: function(product) {
            this.favorites = this.favorites.filter(fav => fav.id !== product.id);
          },
          isFavorite: function(product) {
            return this.favorites.some(fav => fav.id === product.id);
          },
    }

  });
  
