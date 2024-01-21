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
  
