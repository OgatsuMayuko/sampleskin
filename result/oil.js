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
          id: 24,
          normal: "T",
          oil: "T",
          sensitive: "T",
          name: "メイク キープ プライマー ",
          maker: "コーセー",
          brand: "コーセー",
          URL: "https://amazon.co.jp/dp/B0C1MLGRZC?tag=mybest_presses_7933-22",
          img: "img/picdata24.png",
          officialURL: "https://www.kose.co.jp/makekeep/primer/",
          price: 1320,
          perprice: 52.8,
          gram: 25,
          memo1: "蒸し暑い環境でも皮脂テカリを防いでサラサラ肌を1日キープ。厚塗り感・白浮き感のない自然な美しい仕上がりが持続する。",
          color: 1,
          compo: "水・シクロメチコン・エタノール・タルク・シリカ・ジメチコン・(ジメチコン/ビニルトリメチルシロキシケイ酸)クロスポリマー・(ビニルジメチコン/メチコンシルセスキオキサン)クロスポリマー・PEG-9ジメチコン・PEG-9ポリジメチルシロキシエチルジメチコン・アセチルヒアルロン酸Na・トコフェロール・ヒアルロン酸Na・プロリン・加水分解ヒアルロン酸・BG・(アクリレーツ/アクリル酸エチルヘキシル/メタクリル酸ジメチコン)コポリマー・スクワラン・ステアリン酸・トリエトキシカプリリルシラン・トリメチルシロキシケイ酸・フェノキシエタノール・酸化亜鉛・酸化鉄",
          SPF: 0,
          PA: 0,
          state: "マット",
          allergytest: 1,
          noncomedogenictest: 1,
          syntheticfragrancefree: 1
        },
        {
          id: 25,
          normal: "T",
          oil: "T",
          sensitive: "T",
          name: "ピュア キャンバス プライマー ブラーリング",
          maker: "エトバス",
          brand: "Laura Mercier",
          URL: "https://amazon.co.jp/dp/B083HJ4CX1?tag=mybest_presses_7933-22",
          img: "img/picdata25.png",
          officialURL: "https://www.lauramercierjapan.com/%E3%83%94%E3%83%A5%E3%82%A2-%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%90%E3%82%B9-%E3%83%97%E3%83%A9%E3%82%A4%E3%83%9E%E3%83%BC-%E3%83%96%E3%83%A9%E3%83%BC%E3%83%AA%E3%83%B3%E3%82%B0-12706580.html",
          price: 5610,
          perprice: 112.2,
          gram: 50,
          memo1: "配合されたブラーリングパウダーが余分な皮脂を吸着し、テカリの気にならない状態をキープする",
          color: 1,
          state: "マット",
          cover: 1,
          syntheticfragrancefree: 1
        },
        {
          id: 26,
          normal: "T",
          oil: "T",
          sensitive: "T",
          name: "RMK ロングラスティングUVベース",
          maker: "カネボウ化粧品",
          brand: "RMK",
          URL: "https://amazon.co.jp/dp/B0B8CFH4MC?tag=mybest_presses_7933-22",
          img: "img/picdata26.png",
          officialURL: "https://onlineshop.rmkrmk.com/ja/Root-Category/Positive-Base-Makeup/Makeup-Base/RMK-%E3%83%AD%E3%83%B3%E3%82%B0%E3%83%A9%E3%82%B9%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0UV%E3%83%99%E3%83%BC%E3%82%B9/p/418213",
          price: 4070,
          perprice: 135.66666666666666,
          gram: 30,
          memo1: "うるおい感のある塗布膜で、テカリ・皮脂くずれを防ぎ、乾燥感を感じづらい心地よい肌をキープします。",
          color: 1,
          SPF: 50,
          PA: "++",
          state: "セミマット",
          cover: 1,
          allergytest: 1
        },
        {
          id: 27,
          normal: "T",
          oil: "T",
          sensitive: "T",
          name: "ラスティングタッチベース シルキースムージング",
          maker: "常盤薬品工業",
          brand: "SANA excel",
          URL: "https://amazon.co.jp/dp/B084MHWSYL?tag=mybest_presses_7933-22",
          img: "img/picdata27.png",
          officialURL: "https://www.tokiwayakuhin.co.jp/cojp/t/t2875/",
          price: 1870,
          perprice: 62.333333333333336,
          gram: 30,
          memo1: "テカリを徹底防止し快適な肌を保つ薄膜タッチの皮脂崩れ防止下地。",
          color: 1,
          compo: "シクロペンタシロキサン、水、BG、トリイソステアリン酸ポリグリセリル-2、ジフェニルシロキシフェニルトリメチコン、ジカプリン酸ネオペンチルグリコール、ジメチコン、PEG-9ポリジメチルシロキシエチルジメチコン、グリセリン、ステアリン酸イヌリン、シリカ、水酸化Al、オクテニルコハク酸デンプンAl、トリメチルシロキシケイ酸、酸化亜鉛、リン酸アスコルビルMg、セラミドNP、ノイバラ果実エキス、ポリクオタニウム-51、(ジメチコン/ビニルジメチコン)クロスポリマー、イソステアリン酸、キサンタンガム、グリチルリチン酸2K、コレステロール、ステアリルジメチコン、ステアロイルグルタミン酸2Na、ステアロイルグルタミン酸Na、トコフェロール、ハイドロゲンジメチコン、水添レシチン、フェノキシエタノール、酸化チタン、酸化鉄",
          SPF: 32,
          PA: "+++",
          state: "マット",
          toneup: 1
        },
        {
          id: 29,
          normal: "T",
          oil: "T",
          sensitive: "T",
          name: "ケイト プロテクションエキスパート ラスティング",
          maker: "カネボウ化粧品",
          brand: "KATE",
          URL: "https://amazon.co.jp/dp/B09NCR1XJR?tag=mybest_presses_7933-22",
          img: "img/picdata29.png",
          officialURL: "https://www.kao-kirei.com/ja/item/kbb/kate/4973167027400/?tw=kbb",
          price: 1540,
          perprice: 61.6,
          gram: 25,
          memo1: "メイクくずれ・テカリを長時間防止し、サラサラマット仕上がりの肌を守るプロテクション下地",
          color: 1,
          compo: "メチルトリメチコン、酸化亜鉛、水、エタノール、イソドデカン、メトキシケイヒ酸エチルヘキシル、カプリリルメチコン、酸化チタン、シリカ、ＤＰＧ、炭酸Ｃａ、ジカプリン酸ネオペンチルグリコール、セチルＰＥＧ／ＰＰＧ-１０／１ジメチコン、トリエトキシカプリリルシラン、（アクリレーツ／ジメチコン）コポリマー、ステアリン酸、ビスエチルヘキシルオキシフェノールメトキシフェニルトリアジン、イソステアリン酸ソルビタン、ジステアルジモニウムヘクトライト、水酸化Ａｌ、ジエチルアミノヒドロキシベンゾイル安息香酸ヘキシル、炭酸プロピレン、ジメチコン、トリポリヒドロキシステアリン酸ジペンタエリスリチル、メタリン酸Ｎａ、ヒアルロン酸Ｎａ、ＢＨＴ、ニオイテンジクアオイ油、水溶性コラーゲン、フェノキシエタノール",
          SPF: "50+",
          PA: "+++",
          state: "マット",
          cover: 1
        },
        {
          id: 30,
          normal: "T",
          oil: "T",
          sensitive: "T",
          name: "フェイスエディション スキンベース フォーオイリースキン",
          maker: "ettusais(エテュセ)",
          brand: "ettusais",
          URL: "https://amazon.co.jp/dp/B08Y1GKL4V?tag=mybest_presses_7933-22",
          img: "img/picdata30.png",
          officialURL: "https://www.ettusais.co.jp/face/skinbase/",
          price: 1980,
          perprice: 66,
          gram: 30,
          memo1: "肌に軽やかに広がりながら瞬時になじみフィット、 サラサラの感触に。圧迫感のない薄膜仕上げ。 ",
          color: 1,
          compo: "水,ジメチコン,メトキシケイヒ酸エチルヘキシル,エタノール,メタクリル酸メチルクロスポリマー,酸化亜鉛,酸化チタン,ジフェニルシロキシフェニルトリメチコン,トリメチルシロキシケイ酸,グリセリン,ビスエチルヘキシルオキシフェノールメトキシフェニルトリアジン,メタケイ酸アルミン酸Mg,カミツレ花エキス,ハマメリス葉エキス,アセチルヒアルロン酸Na,ヒアルロン酸Na,ワセリン,PPG-17,PEG-10ジメチコン,パルミチン酸デキストリン,水酸化Al,ステアリン酸,イソステアリン酸,セスキイソステアリン酸ソルビタン,BG,オレンジ油,トリエトキシカプリリルシラン,タルク,BHT,合成ワックス,シリカ,テトラヒドロテトラメチルシクロテトラシロキサン,ハイドロゲンジメチコン,EDTA-3Na,テトラデセン,トコフェロール,ローズマリー葉エキス,クエン酸Na,クエン酸,フェノキシエタノール,硫酸Ba,酸化鉄,マイカ ",
          SPF: 35,
          PA: "++",
          state: "マット",
          toneup: 1,
          allergytest: 1,
          noncomedogenictest: 1,
          syntheticfragrancefree: 1
        },
        {
          id: 31,
          normal: "T",
          oil: "T",
          sensitive: "T",
          name: "毛穴パテ職人 テカリ防止下地 ",
          maker: "常盤薬品工業",
          brand: "SANA",
          URL: "https://amazon.co.jp/dp/B08482YRMK?tag=mybest_presses_7933-22",
          img: "img/picdata31.png",
          officialURL: "https://www.sana.jp/keanapate/tb_shitaji_cool.htm",
          price: 1320,
          perprice: 52.8,
          gram: 25,
          memo1: "皮脂を固化させる独自の新原料を配合し、テカリ防止に特化した化粧下地。乾燥しにくいさらさら肌が続く。",
          color: 1,
          compo: "シクロペンタシロキサン、水、(HDI/トリメチロールヘキシルラクトン)クロスポリマー、メトキシケイヒ酸エチルヘキシル、酸化亜鉛、エタノール、トリエチルヘキサノイン、BG、ジフェニルシロキシフェニルトリメチコン、ラウリルPEG-10トリス(トリメチルシロキシ)シリルエチルジメチコン、ジメチコン、(ジメチコン/ビニルジメチコン)クロスポリマー、(ビニルジメチコン/メチコンシルセスキオキサン)クロスポリマー、シリカ、トリベヘニン、トリメチルシロキシケイ酸、合成フルオロフロゴパイト、ハイドロゲンジメチコン、ノイバラ果実エキス、ラウロイルグルタミン酸ジ(オクチルドデシル/フィトステリル/ベヘニル)、シリル化シリカ、ステアリルジメチコン、アーチチョーク葉エキス、海塩、セラミドNP、スクワラン、オクテニルコハク酸デンプンAl、アロエベラ葉エキス、グリチルリチン酸2K、サリチル酸ブチルオクチル、ステアリン酸、トコフェロール、トリイソステアリン酸ポリグリセリル-2、ビスエチルヘキシルオキシフェノールメトキシフェニルトリアジン、ポリメチルシルセスキオキサン、メタクリル酸メチルクロスポリマー、含水シリカ、水酸化Al、フェノキシエタノール、タルク、酸化チタン、酸化鉄",
          SPF: 30,
          PA: "++",
          state: "セミマット",
          toneup: 1,
          syntheticfragrancefree: 1
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
          id: 59,
          normal: "T",
          oil: "T",
          sensitive: "T",
          name: "インテグレート スーパーキープベース",
          maker: "資生堂",
          brand: "INTEGRATE",
          URL: "https://amazon.co.jp/dp/B01NC0UF52?tag=mybest_presses_2365-22",
          img: "img/picdata59.png",
          officialURL: "https://www.shiseido.co.jp/sw/c/products/SWFG070410.seam?shohin_pl_c_cd=760301&online_shohin_ctlg_kbn=1",
          price: 1100,
          perprice: 44,
          gram: 25,
          memo1: "余分な皮脂を吸着して、テカリやヨレを未然にブロックする、化粧もち効果の高い化粧下地。ひと塗りでキメ・毛穴を絶妙カバーしながら、ファンデーションをしっかり密着させる。",
          color: 1,
          compo: "水,シクロペンタシロキサン,メトキシケイヒ酸エチルヘキシル,酸化亜鉛,エタノール,シリカ,ジメチコン,カプリリルメチコン,酸化チタン,PEG/PPG-17/4ジメチルエーテル,ビスエチルヘキシルオキシフェノールメトキシフェニルトリアジン,PEG-100水添ヒマシ油,アモジメチコン,エチルヘキシルトリアゾン,ラベンダー油,ポリメタクリル酸メチル,PPG-17,イソステアリン酸,トリエトキシカプリリルシラン,PEG-10ジメチコン,含水シリカ,(ジメチルアクリルアミド/アクリロイルジメチルタウリンNa)クロスポリマー,セスキイソステアリン酸ソルビタン,サクシノグリカン,メタリン酸Na,EDTA-2Na,クエン酸,クエン酸Na,ジステアリルジモニウムクロリド,BHT,ピロ亜硫酸Na,オレンジ油,トコフェロール,パルミチン酸デキストリン,フェノキシエタノール,硫酸Ba,酸化鉄,マイカ",
          SPF: 30,
          PA: "+++",
          state: "マット",
          toneup: 1,
          cover: 1,
          noncomedogenictest: 1,
          syntheticfragrancefree: 1
        },
        {
          id: 60,
          normal: "T",
          oil: "T",
          sensitive: "T",
          name: "パーフェクト キープ ベース",
          maker: "コーセー",
          brand: "ESPRIQUE",
          URL: "https://amazon.co.jp/dp/B07MXFR6F6?tag=mybest_presses_2365-22",
          img: "img/picdata60.png",
          officialURL: "https://www.kose-th.com/esprique/basemake/04.html",
          price: 6000,
          perprice: 200,
          gram: 30,
          memo1: "テカリ・皮脂崩れを徹底して防ぎ、つけたての美しさをキープする。",
          color: 1,
          compo: "水、シクロメチコン、ジメチコン、メトキシケイヒ酸エチルヘキシル、ポリメチルシルセスキオキサン、エタノール、メチルトリメチコン、トリフルオロアルキルジメチルトリメチルシロキシケイ酸、トリメチルシロキシケイ酸、トリフルオロプロピルシクロペンタシロキサン、メタクリル酸メチルクロスポリマー、PEG-9ジメチコン、トリフルオロプロピルシクロテトラシロキサン、PEG-9ポリジメチルシロキシエチルジメチコン、グリコシルトレハロース、セージ油、トコフェロール、ヒアルロン酸Na、水溶性コラーゲン、BG、BHT、EDTA-2Na、 (アクリレーツ/アクリル酸エチルヘキシル/メタクリル酸ジメチコン) コポリマー、アルムK、キサンタンガム、シリカ、スクワラン、ステアリン酸、ステアロイルグルタミン酸2Na、タルク、トリエトキシカプリリルシラン、ハイドロゲンジメチコン、ヒドロキシアパタイト、ポリシリコーン-14、ポリメタクリル酸メチル、ラウリルPEG-9ポリジメチルシロキシエチルジメチコン、ラウリルポリグリセリル-3ポリジメチルシロキシエチルジメチコン、ラウロイルグルタミン酸ジ (フィトステリル/オクチルドデシル) 、加水分解水添デンプン、含水シリカ、水酸化Al、水添ポリイソブテン、水添レシチン、フェノキシエタノール、メチルパラベン、マイカ、酸化チタン、酸化亜鉛、酸化鉄",
          SPF: 30,
          PA: "++",
          state: "マット",
          toneup: 1,
          cover: 1,
          noncomedogenictest: 1,
          syntheticfragrancefree: 1
        },
        {
          id: 61,
          normal: "T",
          oil: "T",
          sensitive: "T",
          name: "メーキャップ ベースミルク UV",
          maker: "ちふれ化粧品",
          brand: "ちふれ",
          URL: "https://amazon.co.jp/dp/B071KX48YM?tag=mybest_presses_2365-22",
          img: "img/picdata61.png",
          officialURL: "https://www.chifure.co.jp/products/makeupbase/2541",
          price: 770,
          perprice: 25.666666666666668,
          gram: 30,
          memo1: "カバー効果のあるイエローベースの下地。皮脂吸着成分とクリアアップパウダーを配合し、過剰な皮脂によるメイク崩れを防ぎながら、明るい印象の肌に仕上げる。",
          color: 1,
          compo: "着色成分 酸化チタン 適量 〃 マイカ 適量 〃 タルク 適量 〃 酸化亜鉛 適量 〃 酸化鉄 適量 〃 酸化スズ 適量 油性エモリエント成分 シクロペンタシロキサン 28.05% 〃 トリエチルヘキサノイン 4.00% 〃 ジフェニルシロキシフェニルトリメチコン 3.50% 〃 イソノナン酸イソノニル 2.00% 〃 ジメチコン 1.56% 〃 (ジメチコン/ビニルジメチコン)クロスポリマー 0.10% 保湿成分 BG 3.00% 〃 DPG 0.01% 〃 ヒアルロン酸Na 適量 清涼成分 エタノール 3.00% サンスクリーン成分 メトキシケイヒ酸エチルヘキシル 2.60% 感触改良成分 ナイロン-12 2.00% 皮脂吸着成分 ヒドロキシアパタイト 0.45% 乳化剤 PEG‐9ポリジメチルシロキシエチルジメチコン 1.50% 〃 ポリグリセリル‐3ポリジメチルシロキシエチルジメチコン 1.05% 〃 (ジメチコン/(PEG-10/15))クロスポリマー 0.48% 表面処理剤 シリカ 適量 〃 (ハイドロゲンジメチコン/オクチルシルセスキオキサン)コポリマー 適量 〃 水酸化Al 適量 〃 ステアリン酸 適量 〃 トリエトキシカプリリルシラン 適量 〃 ステアロイルグルタミン酸2Na 適量 防腐剤 フェノキシエタノール 0.30% 〃 メチルパラベン 適量 乳化安定剤 塩化Na 0.10% 〃 クエン酸Na 適量 キレート剤 EDTA-2Na 0.10% 成分の酸化防止剤 BHT 適量 〃 トコフェロール 適量 基剤 水 全量を100%とする",
          SPF: 34,
          PA: "+++",
          state: "マット",
          toneup: 1,
          cover: 1,
          syntheticfragrancefree: 1
        },
        {
          id: 62,
          normal: "T",
          oil: "T",
          sensitive: "T",
          name: "スキンプロテクトベース ＜皮脂くずれ防止＞ 超オイリー肌用",
          maker: "花王",
          brand: "SOFINA Primavista",
          URL: "https://amazon.co.jp/dp/B094VKVD2V?tag=mybest_presses_2365-22",
          img: "img/picdata62.png",
          officialURL: "https://www.sofina.co.jp/primavista/products/primaforoilyskin_base/",
          price: 3080,
          perprice: 123.2,
          gram: 25,
          memo1: "とにかく肌のテカリ、ベタつきが気になる方に 超オイリー肌用の、黒のプリマヴィスタ ",
          color: 1,
          SPF: 0,
          PA: 0,
          state: "マット",
          toneup: 1,
          cover: 1,
          allergytest: 1,
          noncomedogenictest: 1,
          syntheticfragrancefree: 1
        },
        {
          id: 63,
          normal: "T",
          oil: "T",
          sensitive: "T",
          name: "エアリーステイ オイルブロッカー",
          maker: "コーセー",
          brand: "FASIO",
          URL: "https://amazon.co.jp/dp/B08Z94KJ4S?tag=mybest_presses_2365-22",
          img: "img/picdata63.png",
          officialURL: "https://www.kose.co.jp/fasio/catalog/base/airy_stay_oil_blocker/",
          price: 1100,
          perprice: 36.666666666666664,
          gram: 30,
          memo1: "スキンケアのような軽いつけ心地が特徴。汗・皮脂に強く、つけたての美しさを長時間キープする。",
          color: 1,
          compo: "水・シクロメチコン・エタノール・メトキシケイヒ酸エチルヘキシル・イソノナン酸イソトリデシル・ジメチコン・DPG・PEG-9ジメチコン・ジエチルアミノヒドロキシベンゾイル安息香酸ヘキシル・セチルジメチコン・ビスエチルヘキシルオキシフェノールメトキシフェニルトリアジン・エチルヘキサン酸セチル・グリセリン・オリーブ果実油・ゴマ種子油・サフラワー油・シア脂・トコフェロール・ホホバ種子油・BG・BHT・ (アクリレーツ/アクリル酸エチルヘキシル/メタクリル酸ジメチコン) コポリマー・ (アクリレーツ/ジメチコン) コポリマー・ (ジメチコン/ (PEG-10/15) ) クロスポリマー・ (パルミチン酸/エチルヘキサン酸) デキストリン・クエン酸Na・シリカ・スクワラン・セスキイソステアリン酸ソルビタン・セラミドNG・タルク・トリイソステアリン酸イソプロピルチタン・トリエトキシカプリリルシラン・フェニルトリメチコン・ブチルポリジメチルシロキシエトキシプロピルリン酸・ポリメチルシルセスキオキサン・酸化スズ・水酸化Al・マイカ・酸化チタン・酸化亜鉛・酸化鉄",
          SPF: 50,
          PA: "++++",
          state: "マット",
          toneup: 1,
          cover: 1,
          patchtest: 1,
          allergytest: 1,
          noncomedogenictest: 1,
          syntheticfragrancefree: 1
        },
        {
          id: 64,
          normal: "T",
          oil: "T",
          sensitive: "T",
          name: " スムースキープベースUV",
          maker: "オルビス",
          brand: "ORBIS",
          URL: "https://www.amazon.co.jp/dp/B084TBJ11D?tag=mybest_presses_2365-22",
          img: "img/picdata64.png",
          officialURL: "https://www.orbis.co.jp/small/1253055/",
          price: 1540,
          perprice: 55,
          gram: 28,
          memo1: "くずれとくすみ、2つの悩みをカバーして、冴えわたる肌に整える化粧下地です。サッとのばすと皮脂ブロックパウダーが皮脂を抱え込み、固定化してくずさず、ツヤめく仕上がりをキープ。凹凸補正粉体が毛穴や凹凸を自然にカバーします。",
          color: 1,
          compo: "水、シクロペンタシロキサン、トリシロキサン、メトキシケイヒ酸エチルヘキシル、エタノール、PET、(HDI/トリメチロールヘキシルラクトン)クロスポリマー、BG、ジメチコン、イソノナン酸イソノニル、酸化チタン、PEG-10ジメチコン、PEG-9ポリジメチルシロキシエチルジメチコン、ｔ-ブチルメトキシジベンゾイルメタン、サッカロミセス/ハトムギ種子発酵液、セスキイソステアリン酸ソルビタン、ジフェニルシロキシフェニルトリメチコン、ヒドロキシアパタイト、トリメトキシシリルジメチコン、トコフェロール、トリイソステアリン酸ポリグリセリル-2、硫酸Mｇ、シリカ、マイカ、(アクリレーツ/ジメチコン)コポリマー、水酸化Aｌ、酸化鉄、酸化亜鉛、アルミナ、メチルパラベン、青1、赤227",
          SPF: 40,
          PA: "+++",
          state: "マット",
          allergytest: 1,
          syntheticfragrancefree: 1
        },
        {
          id: 65,
          normal: "T",
          oil: "T",
          sensitive: "T",
          name: "キス マットシフォン UVハイカバーベース",
          maker: "伊勢半",
          brand: "kiss",
          URL: "https://amazon.co.jp/dp/B07TZLJLGP?tag=mybest_presses_2365-22",
          img: "img/picdata65.png",
          officialURL: "https://onlinestore.isehangroup.jp/products/000000000115",
          price: 1760,
          perprice: 47.567567567567565,
          gram: 37,
          memo1: "マットシフォンベースシリーズのなかでもUVカット指数が高い化粧下地。毛穴の凹凸・くすみ・色ムラなどを自然にカバーしながら、透明感のあるワントーン明るい美肌を演出する。",
          color: 2,
          compo: "水、酸化亜鉛、シクロペンタシロキサン、イソノナン酸イソノニル、メタクリル酸メチルクロスポリマー、PG、メトキシケイヒ酸エチルヘキシル、PEG-9ジメチコン、ジメチコン、トリメチルシロキシケイ酸、(メタクリル酸ラウリル/ジメタクリル酸グリコール)クロスポリマー、イソドデカン、イソペンチルジオール、グリチルリチン酸2K、ポリクオタニウム-51、レシチン、コメヌカ油、カミツレ花エキス、ヒアルロン酸Na、コメヌカスフィンゴ糖脂質、クエン酸Na、ジエチルアミノヒドロキシベンゾイル安息香酸ヘキシル、ジステアルジモニウムヘクトライト、ハイドロゲンジメチコン、タルク、(ジメチコン/ビニルジメチコン)クロスポリマー、水酸化Al、(アクリレーツ/アクリル酸エチルヘキシル/メタクリル酸ジメチコン)コポリマー、セルロース、メチルパラベン、EDTA-2Na、BHT、メチコン、BG、グリセリン、オレイン酸ポリグリセリル-10、トリ(カプリル酸/カプリン酸)グリセリル、酸化チタン、酸化鉄、酸化スズ",
          SPF: "50+",
          PA: "+++",
          state: "マット",
          toneup: 1,
          cover: 1,
          faundation: 1,
          noncomedogenictest: 1,
          syntheticfragrancefree: 1
        },
        {
          id: 66,
          normal: "T",
          oil: "T",
          sensitive: "T",
          name: "ソフトマットプライマー",
          maker: "資生堂",
          brand: "NARS",
          URL: "https://ck.jp.ap.valuecommerce.com/servlet/referral?sid=3180269&pid=885009063&vc_url=https%3A%2F%2Fstore.shopping.yahoo.co.jp%2Fenewlife%2Fnars017.html&vcptn=mybest_presses_2365-22",
          img: "img/picdata66.png",
          officialURL: "https://www.narscosmetics.jp/soft-matte-primer/4535683128780.html",
          price: 5170,
          perprice: 172.33333333333334,
          gram: 30,
          memo1: "どんなシーンでも、瞬時にマットな仕上がりに。みずみずしいジェル状のテクスチャーが肌の上をやさしく滑り、ベルベットのようにソフトマットな仕上がりへと導くつけ心地の軽い新プライマー。乾燥している気候ではうるおいを保ち、湿度の高い気候では余分な水分を吸収するといった、環境に合わせて調整するデュアルアクションシステムを搭載。",
          color: 1,
          state: "マット",
          toneup: 1,
          cover: 1,
          noncomedogenictest: 1,
          alcoholfree: 1,
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
  
