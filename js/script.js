$("#next").click(function(event){

   var parent=$(".slider-item").parent();
   var elem=parent.find(".active");
   if(elem.next().length)
   {
    elem.removeClass("active");
    elem.next().addClass("active");
    console.log(elem.next());
   }
   else
   {
    elem.removeClass("active");
    $(".slider-item").first().addClass("active");
   }


});

$("#prev").click(function(event){
       var parent=$(".slider-item").parent();
       var elem=parent.find(".active");
       if(elem.prev().length)
       {
        elem.removeClass("active");
        elem.prev().addClass("active");
        console.log(elem.prev());
       }
       else
       {
        elem.removeClass("active");
        $(".slider-item").last().addClass("active");
       }
    
    
    });

    $("#addElem").click(function(){
        var counter=0;
        counter=$(".slider-item").length+1;
        $("#slider").append("<li class='slider-item'><img src='images/slider"+counter+".jpg'/></li>");
    });