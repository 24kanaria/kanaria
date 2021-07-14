// 入力要素を取得
var height = document.getElementById('height-input'); // LS入力欄
var weight = document.getElementById('weight-input'); // SLS入力欄
var atk = document.getElementById('atk-input');
var oenn = document.getElementById('oenn-input');
var TB     = document.getElementById('TB-input');     // タワーボーナス入力欄
var ennha     = document.getElementById('ennha-input');
var betuwaku   = document.getElementById('betuwaku-input');
var yodame    = document.getElementById('yodame-input');
var renngeki    = document.getElementById('renngeki-input');
var bannmenn    = document.getElementById('bannmenn-input');
var button = document.getElementById('button-submit'); // 計測開始ボタン

// 出力要素を取得
var output = document.getElementById('bmi-output'); // 表示場所

// 入力値からBMIを計算して指定場所に表示する関数
var calcBmi = function () {
  // 1.入力されたlsの値 を取得
  var h_value = height.value;
  // 2.入力されたslsの値 を取得
  var w_value = weight.value;
  var a_value = atk.value;
  var o_value = oenn.value;
  // 入力されたタワーボーナスの値を取得
  var T_value = TB.value;
  var e_value = ennha.value;
  var b_value = betuwaku.value;
  var y_value = yodame.value;
  var r_value = renngeki.value;
  var ba_value = bannmenn.value;
  // 4.ls*slsを計算する：(ls × sls)
  var bmi =  (w_value * h_value*T_value*e_value*b_value*y_value*a_value*o_value*r_value*ba_value);
  // 6.BMIを表示
  output.innerHTML = bmi;
}

// 計測開始ボタンが押されたときの処理を登録（イベントリスナー）
button.addEventListener('click', calcBmi);