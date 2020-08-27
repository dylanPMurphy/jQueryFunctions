var isVisable = true;

$('#clickButton').click(function(){
    $('div').addClass("divclass");
    $('button').addClass("buttonclass")
});

$('#hideButton').click(function(){
    isVisable = false;
    $('#toHide').hide();
});


$('#showButton').click(function(){
    if(isVisable === true){
        alert("The div is not hidden");
    }
    else{
        isVisable = true;
        $('#toHide').show();
    }
    
});
$('#toggleButton').click(function(){

        $('#lightOff').hide();

});