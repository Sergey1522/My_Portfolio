$(document).ready(function(){
    let burger = $('#burger');
    let close = $('#close');
    let nav = $('#menu');
    burger.on('click',function(){
        nav.show('slow');
    });
    close.on('click',function(event){
        console.log($(event).target)
        nav.hide('slow');
    });
    // nav.on('click',function(){
    //     nav.hide('slow');
    // })
})