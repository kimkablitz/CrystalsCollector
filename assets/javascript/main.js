//Math.floor(Math.random() * (max - min)) + min

$(document).ready(function () {
    var win = 0
    var currentTotal = 0;
    var selectedNumber = Math.floor(Math.random() * (50 - 10)) + 10;
    $(".number").html(selectedNumber)

    var hiddenValue1 = Math.floor(Math.random() * 9) + 1;
    var hiddenValue2 = Math.floor(Math.random() * 9) + 1;
    var hiddenValue3 = Math.floor(Math.random() * 9) + 1;
    var hiddenValue4 = Math.floor(Math.random() * 9) + (-1);

 $('figure').click(function(e){

     var $target = $(e.currentTarget)
     if($target.is('.crystal1')){
         currentTotal +=hiddenValue1
     } else if ($target.is('.crystal2')){
        currentTotal +=hiddenValue2
     }else if ($target.is('.crystal3')){
        currentTotal +=hiddenValue3
     }else if ($target.is('.crystal4')){
        currentTotal +=hiddenValue4
     }
     if(currentTotal === selectedNumber){
         alert("You won")
         win++
     }
     else if (currentTotal>selectedNumber){
         alert("You lost")
     }
     $(".currentTotal").html(currentTotal)
     $(".score").html(win)
 })

  
console.log(selectedNumber)
console.log(hiddenValue1)
console.log(hiddenValue2)
console.log(hiddenValue3)
console.log(hiddenValue4)
})





