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
  
      
          {
            id: 32,
            normal: "T",
            desert: "T",
            sensitive: "T",
            name: "MINON Amino Moist ブライトアップベース UV",
            maker: "第一三共ヘルスケア",
            brand: "MINON",
            URL: "https://amazon.co.jp/dp/B00SAS1BAW?tag=mybest_presses_7933-22",
            img: "img/picdata32.png",
            officialURL: "https://www.daiichisankyo-hc.co.jp/site_minon-aminomoist/products/au.html",
            price: 1373,
            perprice: 54.92,
            gram: 25,
            memo1: "紫外線、乾燥などから肌を守る化粧下地。肌色を自然な明るさに補整。",
            color: 1,
            compo: "水、シクロペンタシロキサン、酸化チタン、ジフェニルシロキシフェニルトリメチコン、PEG-9ポリジメチルシロキシエチルジメチコン、ミリスチン酸オクチルドデシル、トリエチルヘキサノイン、ペンチレングリコール、BG、セチルPEG/PPG-10/1ジメチコン、ジステアルジモニウムヘクトライト、トリメチルシロキシケイ酸、ラウロイルリシン、(ビニルジメチコン/メチコンシルセスキオキサン)クロスポリマー、塩化Na、水酸化Al、ステアリン酸、トリポリヒドロキシステアリン酸ジペンタエリスリチル、ラウロイルグルタミン酸ジ(フィトステリル/オクチルドデシル)、トリベヘニン、フェノキシエタノール、(ジメチコン/ビニルジメチコン)クロスポリマー、トコフェロール、グリチルレチン酸ステアリル、メチコン、ソルビトール発酵多糖、ナイロン-12、シリカ、メドウフォーム油、カルノシン、タウリン、グリセリン、リシンHCl、ポリクオタニウム-61、グルタミン酸、グリシン、ロイシン、ヒスチジンHCl、セリン、バリン、酸化スズ、アスパラギン酸Na、トレオニン、アラニン、イソロイシン、アラントイン、フェニルアラニン、アルギニン、プロリン、チロシン、イノシン酸2Na、グアニル酸2Na、タルク、ジメチコン、窒化ホウ素、酸化鉄",
            SPF: 47,
            PA: "+++",
            state: "つや",
            toneup: 1,
            patchtest: 1,
            allergytest: 1,
            alcoholfree: 1,
            parabenfree: 1,
            nonchemicalprescription: 1,
            syntheticfragrancefree: 1,
            stingingtest: 1,
            memo2: "肌がもつ天然由来の保湿因子であるNMFの約半分を構成するアミノ酸を豊富に含んでいるうえ、肌荒れ防止作用のあるグリチルレチン酸ステアリルも配合"
          },
          {
            id: 35,
            normal: "T",
            desert: "T",
            sensitive: "T",
            name: "ミネラルプラスベース",
            maker: "ヤーマン",
            brand: "ONLY　MINERALS",
            URL: "https://amazon.co.jp/dp/B014SMYYIE?tag=mybest_presses_7933-22",
            img: "img/picdata35.png",
            officialURL: "https://www.onlyminerals.jp/products/base-makeup/mineral-plus-base.html",
            price: 3080,
            perprice: 123.2,
            gram: 25,
            memo1: "厳選されたミネラルと天然由来成分100%を使用。ノンケミカル処方でありながら、SPF27/PA+++で日常の紫外線から肌を守ります。",
            color: 2,
            compo: "水、プロパンジオール、酸化チタン、グリセリン、イソステアリン酸イソステアリル、オクチルドデカノール、ジステアリン酸ポリグリセリル-10、ステアリン酸ソルビタン、水酸化AL、イソステアリン酸、レウコノストック/ダイコン根発酵液、トリイソステアリン酸ポリグリセリル-2、キサンタンガム、ステアロイルグルタミン酸NA、パルミチン酸デキストリン、ヤシ脂肪酸スクロース、水酸化K、トコフェロール、シア脂、ケイ酸 (AL/MG)、ステアリン酸グリセリル (SE)、アルカリゲネス産生多糖体、ミリスチン酸ポリグリセリル-10、ステアリン酸グリセリル、トリ (カプリル酸/カプリン酸) グリセリル、ラミナリアオクロロイカエキス、セイヨウニワトコ花エキス、アスコフィルムノドスムエキス、センチフォリアバラ花エキス、アルゲエキス、(+/-)、ラウロイルリシン、酸化鉄、グンジョ",
            SPF: 27,
            PA: "+++",
            state: "つや",
            toneup: 1,
            cover: 1,
            soap: 1,
            alcoholfree: 1,
            parabenfree: 1,
            nonchemicalprescription: 1,
            syntheticfragrancefree: 1,
            mineraloilfree: 1,
            petroleumbasedsurfactantfree: 1,
            memo2: "ミネラル成分と天然由来成分のみで作られた商品で、植物エキスが豊富に含まれている。"
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
            id: 38,
            normal: "T",
            desert: "T",
            sensitive: "T",
            name: "ノブ モイスチュアベース UV",
            maker: "常盤薬品工業",
            brand: "NOV",
            URL: "https://amazon.co.jp/dp/B01M5JFONR?tag=mybest_presses_7933-22",
            img: "img/picdata38.png",
            officialURL: "https://noevirgroup.jp/nov/g/g52306/",
            price: 2750,
            perprice: 91.66666666666667,
            gram: 30,
            memo1: "かさつきがちなお肌になめらかにのびて、紫外線からお肌をまもる化粧下地。なめらかでみずみずしく、きめ細かなお肌に仕上げます。",
            color: 1,
            SPF: 25,
            PA: "++",
            state: "セミマット",
            soap: 1,
            patchtest: 1,
            allergytest: 1,
            noncomedogenictest: 1,
            nonchemicalprescription: 1,
            syntheticfragrancefree: 1,
            memo2: "保湿成分としてスクワランなどが入っている、配合量は少なめ。また、酸化亜鉛・パラベンが合わない人は注意。"
          },
          {
            id: 39,
            normal: "T",
            desert: "T",
            sensitive: "T",
            name: "dプログラム ｜ アレルバリア エッセンス BB N",
            maker: "資生堂インターナショナル",
            brand: "dプログラム",
            URL: "https://amazon.co.jp/dp/B08P7FTHHH?tag=mybest_presses_2468-22",
            img: "img/picdata39.png",
            officialURL: "https://www.shiseido.co.jp/sw/c/products/SWFG070410.seam?shohin_pl_c_cd=F39801&online_shohin_ctlg_kbn=1",
            price: 2860,
            perprice: 95.33333333333333,
            gram: 30,
            memo1: "花粉・ちり・ほこりなど、空気中の微粒子汚れから肌を守りながら赤み・くすみをカバーする",
            color: 2,
            compo: "ジメチコン,酸化チタン,水,酸化亜鉛,グリセリン,DPG,ジフェニルシロキシフェニルトリメチコン,PEG-10ジメチコン,セバシン酸ジイソプロピル,シリカ,PEG-9ポリジメチルシロキシエチルジメチコン,ビスブチルジメチコンポリグリセリル-3,水酸化Al,ジフェニルジメチコン,エリスリトール,トレハロース,キシリトール,トリメチルシロキシケイ酸,メタケイ酸アルミン酸Mg,オウゴン根エキス,グルタチオン,ポリクオタニウム-51,アセチルヒアルロン酸Na,ステアリン酸,イソステアリン酸,トリエトキシカプリリルシラン,ハイドロゲンジメチコン,含水シリカ,ジステアルジモニウムヘクトライト,BG,テトラヒドロテトラメチルシクロテトラシロキサン,トコフェロール,メタリン酸Na,テトラデセン,クエン酸Na,クエン酸,ピロ亜硫酸Na,フトモモ葉エキス,フェノキシエタノール,酸化鉄,マイカ",
            SPF: "50+",
            PA: "+++",
            state: "つや",
            toneup: 1,
            cover: 1,
            faundation: 1,
            patchtest: 1,
            allergytest: 1,
            noncomedogenictest: 1,
            alcoholfree: 1,
            parabenfree: 1,
            syntheticfragrancefree: 1,
            mineraloilfree: 1,
            stingingtest: 1,
            memo2: "酸化亜鉛が肌に合わない人は使用を避ける。"
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
            id: 42,
            normal: "T",
            desert: "T",
            sensitive: "T",
            name: "CR ディフェンス モイスチャライザー",
            maker: "ベアエッセンシャル",
            brand: "bareMinerals",
            URL: "https://amazon.co.jp/dp/B0CJ2FRZZW?tag=mybest_presses_2468-22",
            img: "img/picdata42.png",
            officialURL: "https://www.bareminerals.jp/item/BE86002",
            price: 5500,
            perprice: 110,
            gram: 50,
            memo1: "紫外線・大気汚染・乾燥から肌を守る乳液・日焼け止め・化粧下地の3in1。",
            color: 1,
            SPF: 30,
            PA: "+++",
            state: "セミマット",
            toneup: 1,
            cover: 1,
            allergytest: 1,
            parabenfree: 1,
            nonchemicalprescription: 1,
            mineraloilfree: 1,
            memo2: "保湿成分としてセラミド・ヒアルロン酸が配合。ただし、酸化亜鉛・エタノール・香料・EDTAが肌に刺激となる人は注意。"
          },
          {
            id: 43,
            normal: "T",
            desert: "T",
            sensitive: "T",
            name: "キュレル ベースメイク BBクリーム",
            maker: "花王",
            brand: "Curel",
            URL: "https://amazon.co.jp/dp/B00INROEFY?tag=mybest_presses_2468-22",
            img: "img/picdata43.png",
            officialURL: "https://www.kao-kirei.com/ja/item/kbb/curel/4901301286505/?tw=kbb",
            price: 1980,
            perprice: 56.57142857142857,
            gram: 35,
            memo1: "スキンケア・日焼け止め・化粧下地・ファンデーションの4役を担う、乾燥性敏感肌を考えた、キュレルのBBクリーム。 ",
            color: 2,
            compo: "ジメチコン、水、グリセリン、BG、ポリシリコーン-9、PEG-12ジメチコン、水添ポリイソブテン、トリメチルシロキシケイ酸、セチルPGヒドロキシエチルパルミタミド、アスナロ枝エキス、ユーカリ葉エキス、パルミチン酸デキストリン、イソステアリン酸ソルビタン、フェノキシエタノール、酸化亜鉛、含水シリカ、マイカ、タルク、合成フルオロフロゴパイト、メチコン、トリエトキシカプリリルシラン、ハイドロゲンジメチコン、酸化チタン、酸化鉄、水酸化Aｌ",
            SPF: 30,
            PA: "+++",
            state: "セミマット",
            cover: 1,
            faundation: 1,
            patchtest: 1,
            allergytest: 1,
            noncomedogenictest: 1,
            alcoholfree: 1,
            parabenfree: 1,
            nonchemicalprescription: 1,
            syntheticfragrancefree: 1,
            memo2: "全体的に成分がシンプルで保湿成分の配合量は少なめ。酸化亜鉛が肌に合わない人は注意。"
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
            id: 46,
            normal: "T",
            desert: "T",
            sensitive: "T",
            name: "THREE アドバンスドハーモニープライマー ",
            maker: "ACRO",
            brand: "THREE",
            URL: "http://hb.afl.rakuten.co.jp/ichiba/15fa9210.e15d27f8.15fa9211.9e1f82bc/mybest_presses_2468-22?m=https%3A%2F%2Fitem.rakuten.co.jp%2Fcosmediva%2F4562248605592%2F&pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fcosmediva%2F4562248605592%2F",
            img: "img/picdata46.png",
            officialURL: "https://www.threecosmetics.com/onlineshop/g/gt2m193/",
            price: 4950,
            perprice: 165,
            gram: 30,
            memo1: "メイクオフした後にまで感じる「もっちり」とした肌の質感は、86%以上の天然由来成分からなるスキンケア成分の効果。やわらかくしなやかな素肌へと導く。",
            color: 2,
            SPF: 22,
            PA: "++",
            state: "セミマット",
            parabenfree: 1,
            nonchemicalprescription: 1,
            syntheticfragrancefree: 1,
            mineraloilfree: 1,
            petroleumbasedsurfactantfree: 1,
            memo2: "特にお肌に刺激を与えるものは入っていない。"
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
            id: 48,
            normal: "T",
            desert: "T",
            sensitive: "T",
            name: "アンブリオリス モイスチャークリーム",
            maker: "アンブリオリス・ジャパン",
            brand: "Embryolisse",
            URL: "https://amazon.co.jp/dp/B07D636SFQ?tag=mybest_presses_2468-22",
            img: "img/picdata48.png",
            officialURL: "https://www.embryolisse.co.jp/c/skincare/lcc",
            price: 3245,
            perprice: 43.266666666666666,
            gram: 75,
            memo1: "1950年にパリの皮膚科医の処方から生まれ、世界中のメイクアップアーティストも愛用中のロングセラーの保湿クリーム。一日中乾燥知らずのお肌に!",
            color: 1,
            compo: "水・ミネラルオイル・ステアリン酸・パルミチン酸・ステアリン酸グリセリル(SE)・TEA・ミツロウ・パルミチン酸セチル・シア脂・1,2-ヘキサンジオール・カプリリルグリコール・ステアレス-10・ポリアクリルアミド・(C13,14)イソパラフィン・香料・ラウレス-8・PG・トロポロン・加水分解ダイズタンパク・アロエベラ葉エキス[III]",
            SPF: 0,
            PA: 0,
            state: "つや",
            patchtest: 1,
            alcoholfree: 1,
            parabenfree: 1,
            nonchemicalprescription: 1,
            memo2: "保湿成分としてシア脂が配合。香料があわあない人は使用を避ける。"
          },
          {
            id: 49,
            normal: "T",
            desert: "T",
            sensitive: "T",
            name: "ナチュラグラッセ メイクアップ クリーム",
            maker: "ネイチャーズウェイ",
            brand: "naturaglace",
            URL: "https://amazon.co.jp/dp/B073S8BGJD?tag=mybest_presses_2468-22",
            img: "img/picdata49.png",
            officialURL: "https://www.naturesway.jp/products/detail/18012000",
            price: 3300,
            perprice: 110,
            gram: 30,
            memo1: "スキンケア・日焼け止め・化粧下地・ファンデーションの4in1で、ブルーライトカット効果もある。多様な仕込みパールのソフトフォーカス効果で上質なツヤ肌へ導く。",
            color: 4,
            compo: "水、オリーブ果実油、プロパンジオール、イソステアリン酸エチル、スクワラン、グリセリン、野菜油、水添ナタネ油アルコール、ミリスチン酸ポリグリセリル−１０、セスキイソステアリン酸ソルビタン、ダイマージリノール酸ダイマージリノレイル、ホホバ種子油＊、ヒポファエラムノイデス果実油＊、キサントフィル、プルケネチアボルビリス種子油＊、ゼニアオイ花／葉／茎エキス＊、ダマスクバラ花油、センチフォリアバラ花油、ローマカミツレ花油、ラベンダー油、パルマローザ油、オニサルビア油、ニオイテンジクアオイ油、セイヨウネズ果実油、グレープフルーツ果皮油、セイヨウシロヤナギ樹皮エキス、シロキクラゲ多糖体、アラビアゴム、キサンタンガム、パルミチン酸デキストリン、カプリン酸ポリグリセリル−３、水添レシチン、アニス酸、アニス酸Ｎａ、スクロース、タピオカデンプン、クエン酸、ＢＧ、（＋／−）酸化チタン、酸化鉄、マイカ、シリカ、ラウロイルリシン、水酸化Ａｌ、アルミナ、ステアリン酸、ステアリン酸Ｍｇ　＊オーガニック成分",
            SPF: 44,
            PA: "+++",
            state: "つや",
            toneup: 1,
            cover: 1,
            faundation: 1,
            soap: 1,
            alcoholfree: 1,
            parabenfree: 1,
            nonchemicalprescription: 1,
            syntheticfragrancefree: 1,
            mineraloilfree: 1,
            petroleumbasedsurfactantfree: 1,
            memo2: "保湿成分としてオリーブ果実油やスクワランが配合されていますが、精油・植物油が肌に合わない人は注意。"
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
  
