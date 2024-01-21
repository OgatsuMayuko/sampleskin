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
  
