var inpT = $("#newText");
var list = $(".Lista");

$(".agregar").on("click", function(e){
    e.preventDefault();
    list.append(`<div class="lis"> <li> <p class="itemShop"> ${inpT.val()} </p> </li>
                    <button type="button" class="checar"> check </button>
                    <button type="button" class="del"> delete </button> </div>`);
    inpT.val("");
});

list.on("click", ".checar", function(){
   
    $(this).prev().toggleClass("chec");
});

list.on("click", ".del", function(){
   
    $(this).parent().remove();
});


