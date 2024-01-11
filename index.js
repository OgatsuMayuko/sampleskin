
function showResult() {
  let answers = {
    'e': false,
    'f': false,
    'g': false,
    'h': false
  };

  // jqueryのid selectorの＃を使うためにinputタグにidを追加
  $('#q_04:checked').each(function() {
    // jqueryの.val()関数を使うためにはinputタグにvalueを追加

    const key = $(this).val()

    if (key == 'e') answers['e'] = true
    else answers['g'] = true
  })

  $('#q_05:checked').each(function() {
    const key = $(this).val()

    if (key == 'f') answers['f'] = true
    else answers['h'] = true
  })

  return answers
}

$(document).ready(function () {
    $(".btn").on("click", function () {
        $(this).closest("div").hide();
        var id = $(this).attr("href");
        $(id).addClass("fit").fadeIn("slow").show();
    });

    $(".btn.end-q_05").on("click", function () {
        // 結果の表示
        const answers = showResult();

        // 結果の計算
        let resultType = '';

        if (answers['e'] && !answers['f'] && !answers['g'] && answers['h']) {
            resultType = '乾燥肌';
            $('#q_07').css("display", "block");
        } else if (answers['f'] && !answers['e'] && answers['g'] && !answers['h']) {
            resultType = '脂性肌';
            $('#q_09').css("display", "block");
        } else if (answers['h'] && !answers['e'] && !answers['f'] && answers['g']) {
            resultType = '普通肌';
            $('#q_06').css("display", "block");
        } else if (answers['e'] && answers['f'] && !answers['g'] && !answers['h']) {
            resultType = '混合肌';
            $('#q_08').css("display", "block");
        } else {
            resultType = '混合肌';
            $('#q_08').css("display", "block");
        }

    });


// "診断結果を表示"ボタンがクリックされたときに実行される処理
$(".btn.end-result14").on("click", function () {
  // 各カテゴリの選択された数を格納する変数
  let countA = 0;
  let countB = 0;
  let countD = 0;
  
  // チェックボックスのリストを取得
  const checkboxes = $('input[type="checkbox"]');
  
  // チェックボックスの状態を確認し、各カテゴリの数を更新
  checkboxes.each(function () {
    if ($(this).prop("checked")) {
      const dataValue = $(this).attr("data-value");
      if (dataValue === "a") {
        countA++;
      } else if (dataValue === "b") {
        countB++;
      } else if (dataValue === "d") {
        countD++;
      }
    }
  });
  
  
    // 診断結果を表示する要素の取得
  const resultElement = $("#q_14");
  
  // 診断結果をクリア
  resultElement.html("");
  
  
  // 条件に基づいて診断結果を表示
  if (countA > 0) {
  
    $('#answer_hbs').css("display", "block");
  } else if (countB > 0) {
  
    $('#answer_hb').css("display", "block");
  } else if (countD > 0) {
  
    $('#answer_hk').css("display", "block");
  } else {
    //resultElement.html("<p>不安定肌</p>");
    $('#q_015').css("display", "block");
  
  }
  
  // 診断結果を表示する要素を表示
  resultElement.show();
  });
$(".btn.end-result15").on("click", function () {
// 各カテゴリの選択された数を格納する変数
let countA = 0;
let countB = 0;
let countD = 0;

// チェックボックスのリストを取得
const checkboxes = $('input[type="checkbox"]');

// チェックボックスの状態を確認し、各カテゴリの数を更新
checkboxes.each(function () {
  if ($(this).prop("checked")) {
    const dataValue = $(this).attr("data-value");
    if (dataValue === "a") {
      countA++;
    } else if (dataValue === "b") {
      countB++;
    } else if (dataValue === "d") {
      countD++;
    }
  }
});


  // 診断結果を表示する要素の取得
const resultElement = $("#q_15");

// 診断結果をクリア
resultElement.html("");


// 条件に基づいて診断結果を表示
if (countA > 0) {

  $('#answer_kbs').css("display", "block");
} else if (countB > 0) {

  $('#answer_kb').css("display", "block");
} else if (countD > 0) {

  $('#answer_kk').css("display", "block");
} else {
  //resultElement.html("<p>不安定肌</p>");
  $('#q_015').css("display", "block");

}

// 診断結果を表示する要素を表示
resultElement.show();
});
$(".btn.end-result16").on("click", function () {
  // 各カテゴリの選択された数を格納する変数
  let countA = 0;
  let countB = 0;
  let countD = 0;
  
  // チェックボックスのリストを取得
  const checkboxes = $('input[type="checkbox"]');
  
  // チェックボックスの状態を確認し、各カテゴリの数を更新
  checkboxes.each(function () {
    if ($(this).prop("checked")) {
      const dataValue = $(this).attr("data-value");
      if (dataValue === "a") {
        countA++;
      } else if (dataValue === "b") {
        countB++;
      } else if (dataValue === "d") {
        countD++;
      }
    }
  });
  
  
    // 診断結果を表示する要素の取得
  const resultElement = $("#q_16");
  
  // 診断結果をクリア
  resultElement.html("");
  
  
  // 条件に基づいて診断結果を表示
  if (countA > 0) {
  
    $('#answer_cbs').css("display", "block");
  } else if (countB > 0) {
  
    $('#answer_cb').css("display", "block");
  } else if (countD > 0) {
  
    $('#answer_ck').css("display", "block");
  } else {
    //resultElement.html("<p>不安定肌</p>");
    $('#q_015').css("display", "block");
  
  }
  
  // 診断結果を表示する要素を表示
  resultElement.show();
  });
  $(".btn.end-result17").on("click", function () {
    // 各カテゴリの選択された数を格納する変数
    let countA = 0;
    let countB = 0;
    let countD = 0;
    
    // チェックボックスのリストを取得
    const checkboxes = $('input[type="checkbox"]');
    
    // チェックボックスの状態を確認し、各カテゴリの数を更新
    checkboxes.each(function () {
      if ($(this).prop("checked")) {
        const dataValue = $(this).attr("data-value");
        if (dataValue === "a") {
          countA++;
        } else if (dataValue === "b") {
          countB++;
        } else if (dataValue === "d") {
          countD++;
        }
      }
    });
    
    
      // 診断結果を表示する要素の取得
    const resultElement = $("#q_17");
    
    // 診断結果をクリア
    resultElement.html("");
    
    
    // 条件に基づいて診断結果を表示
    if (countA > 0) {
    
      $('#answer_sbs').css("display", "block");
    } else if (countB > 0) {
    
      $('#answer_sb').css("display", "block");
    } else if (countD > 0) {
    
      $('#answer_sk').css("display", "block");
    } else {
      //resultElement.html("<p>不安定肌</p>");
      $('#q_015').css("display", "block");
    
    }
    
    // 診断結果を表示する要素を表示
    resultElement.show();
    });
});

