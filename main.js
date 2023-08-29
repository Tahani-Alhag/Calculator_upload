
  function insert(num) {
    var myString = document.form.textview.value;
    var lastchar = myString[myString.length - 1]  ;
    if (myString.length < 30) {
      if (!isNaN(lastchar) || lastchar== null  || !isNaN(num) ) {
        document.form.textview.value = myString + num;
      }else if (num != lastchar) {
        document.form.textview.value = myString.replase(lastchar , num);
      }
    }
  }

function equal() {
  var sum = document.form.textview.value;
  if (sum) {
  document.form.result.value = eval(sum) ;
  }
}

  function clean() {
    document.form.textview.value ='';
    document.form.result.value = '';
  }
  function back() {
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0 , exp.length - 1 )
    if (exp.length==1){
    document.form.result.value = '';
    }
  }
