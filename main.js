$( document ).ready(function() {
  var showTotal = 0;
  var displayTotal_page1 = 0;
  var valueSaved = window.location.search.substring(1);
//styling

$(".select-containerhousing").mouseout(function(){
    $(".a10-reward-saver-cross-sell-proposed3 .basic-housing-and-pr").css("color", "black");
    $(".a10-reward-saver-cross-sell-proposed3 .totalhousing").css("color", "black");

});

$(".select-containerhousing").mouseover(function(){
    $(".a10-reward-saver-cross-sell-proposed3 .basic-housing-and-pr").css("color", "white");
    $(".a10-reward-saver-cross-sell-proposed3 .totalhousing").css("color", "white");
    $(".a10-reward-saver-cross-sell-proposed3 .totalhousing").css("cursor", "pointer");

});




$(".select-containercommunication").mouseover(function(){
    $(".a10-reward-saver-cross-sell-proposed3 .communications-and-m").css("color", "white");
    $(".a10-reward-saver-cross-sell-proposed3 .totalcommunication").css("color", "white");
});
$(".select-containercommunication").mouseout(function(){
    $(".a10-reward-saver-cross-sell-proposed3 .communications-and-m").css("color", "black");
    $(".a10-reward-saver-cross-sell-proposed3 .totalcommunication").css("color", "black");
});



$(".select-containerentertainment").mouseover(function(){
    $(".a10-reward-saver-cross-sell-proposed3 .recreation-and-enter").css("color", "white");
    $(".a10-reward-saver-cross-sell-proposed3 .total-entertainment").css("color", "white");

});
$(".select-containerentertainment").mouseout(function(){
    $(".a10-reward-saver-cross-sell-proposed3 .recreation-and-enter").css("color", "black");
    $(".a10-reward-saver-cross-sell-proposed3 .total-entertainment").css("color", "black");
});



$(".select-containerfood").mouseover(function(){
    $(".a10-reward-saver-cross-sell-proposed3 .food-and-groceries").css("color", "white");
    $(".a10-reward-saver-cross-sell-proposed3 .totalfood").css("color", "white");

});
$(".select-containerfood").mouseout(function(){
    $(".a10-reward-saver-cross-sell-proposed3 .food-and-groceries").css("color", "black");
    $(".a10-reward-saver-cross-sell-proposed3 .totalfood").css("color", "black");
});


$(".select-containermedical").mouseover(function(){
    $(".a10-reward-saver-cross-sell-proposed3 .medical-and-health").css("color", "white");
    $(".a10-reward-saver-cross-sell-proposed3 .total-medical").css("color", "white");

});
$(".select-containermedical").mouseout(function(){
    $(".a10-reward-saver-cross-sell-proposed3 .medical-and-health").css("color", "black");
    $(".a10-reward-saver-cross-sell-proposed3 .total-medical").css("color", "black");
});


$(".select-containereducation").mouseover(function(){
    $(".a10-reward-saver-cross-sell-proposed3 .education-eg-scho").css("color", "white");
    $(".a10-reward-saver-cross-sell-proposed3 .total-education").css("color", "white");

});
$(".select-containereducation").mouseout(function(){
    $(".a10-reward-saver-cross-sell-proposed3 .education-eg-scho").css("color", "black");
    $(".a10-reward-saver-cross-sell-proposed3 .total-education").css("color", "black");
});




$(".select-containerclothing").mouseover(function(){
    $(".a10-reward-saver-cross-sell-proposed3 .clothing-and-persona").css("color", "white");
    $(".a10-reward-saver-cross-sell-proposed3 .total-clothing").css("color", "white");

});
$(".select-containerclothing").mouseout(function(){
    $(".a10-reward-saver-cross-sell-proposed3 .clothing-and-persona").css("color", "black");
    $(".a10-reward-saver-cross-sell-proposed3 .total-clothing").css("color", "black");
});



$(".select-containerchildcare").mouseover(function(){
    $(".a10-reward-saver-cross-sell-proposed3 .childcare-eg-crc").css("color", "white");
    $(".a10-reward-saver-cross-sell-proposed3 .total-childcare").css("color", "white");

});
$(".select-containerchildcare").mouseout(function(){
    $(".a10-reward-saver-cross-sell-proposed3 .childcare-eg-crc").css("color", "black");
    $(".a10-reward-saver-cross-sell-proposed3 .total-childcare").css("color", "black");
});



$(".select-containertransport").mouseover(function(){
    $(".a10-reward-saver-cross-sell-proposed3 .transport-eg-vehi").css("color", "white");
    $(".a10-reward-saver-cross-sell-proposed3 .total-transport").css("color", "white");

});
$(".select-containertransport").mouseout(function(){
    $(".a10-reward-saver-cross-sell-proposed3 .transport-eg-vehi").css("color", "black");
    $(".a10-reward-saver-cross-sell-proposed3 .total-transport").css("color", "black");
});



$(".select-containerinsurance").mouseover(function(){
    $(".a10-reward-saver-cross-sell-proposed3 .insurance-eg-heal").css("color", "white");
    $(".a10-reward-saver-cross-sell-proposed3 .total-insurance").css("color", "white");

});
$(".select-containerinsurance").mouseout(function(){
    $(".a10-reward-saver-cross-sell-proposed3 .insurance-eg-heal").css("color", "black");
    $(".a10-reward-saver-cross-sell-proposed3 .total-insurance").css("color", "black");
});



// function





$(window).on('keyup',function(e){
  saveAll()
  var total = calculateTotal()
  $('.a000').text('$ ' + total);
  showTotal = total;
})

  $('.select-containerhousing').click(function()
  {
    window.location.href='a12rewardsavercrosssellproposed3.html';
  });


  $('.a12-reward-saver-cross-sell-proposed3 .group5 .rectangle6-copy').click(function()
  {
    window.location.href='index.html' ;
  });


  $('.a12-reward-saver-cross-sell-proposed3 .view7 .group4 .rectangle6').click(function()
  {
    window.location.href='index.html?showTotal=' +showTotal ;
  });


 // $('.a12-reward-saver-cross-sell-proposed3 .group5').click(function()
 //  {
 //    $('input[type="number"]').val("");
 //      $('.a000').text('$ ' + '0.00');
 //      window.location.href='index.html';
 // })

 $( '.a12-reward-saver-cross-sell-proposed3 .group5' ).keyup(function() {
   displayTotal_page1 = $('.field-border').val();
   if(displayTotal_page1 != ''){

   $('.a10-reward-saver-cross-sell-proposed3 .totalhousing').text('$  '+ displayTotal_page1);
   $('.a000_page1').text('$  '+ displayTotal_page1);
 }
 else{
     $('.a10-reward-saver-cross-sell-proposed3 .totalhousing').text('$  '+ '0.00');
     $('.a000_page1').text('$  '+ '0.00');
 }
 });



loadAll()
var total = calculateTotal()
$('.a000').text('$ ' + total);

if(valueSaved){
  testCall()
}
})

function calculateTotal(){
  var total = 0
  $('input[type="number"]').each(function(i,v){
    total += +$(v).val();
  });
  return total
}

function saveAll(){
  $('input[type="number"]').each(function(i,v){
    sessionStorage.setItem($(v).attr('name'), $(v).val());
  });
}
function loadAll(){
  //var fields = ["field1", "field2"]
  //$.each(fields, function( index, value ) {

    $('input[type="number"]').each(function(i,v){
      var value = sessionStorage.getItem($(v).attr('name'));

      if (value !== null){
          $(v).val(value)
      }
    });

  //}
}



function testCall(){

var valueSaved = window.location.search.substring(1);
var savedTotal = valueSaved.split("=").pop();
$('.a10-reward-saver-cross-sell-proposed3 .totalhousing').text('$  '+ savedTotal);
$('.a000_page1').text('$  '+ savedTotal);
}
