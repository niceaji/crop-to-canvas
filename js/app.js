

// $('#range').noUiSlider({
//         range : [20,300]
//     ,   start : 100
//     ,   step : 5
//     ,   handles : 1
//     ,   slide : function(){
//             // var value = $(this).val();
//             // $('.jcrop-holder img').css("width",value+"%");
//     }

// });

$('#jcropImage').Jcrop({
        onChange : updatePreview
    ,   onSelect : updatePreview
        // aspectRatio : 1
});
 
function updatePreview(c) {
    
    $('#saveBtn').css('display','block');
    $("#preview").css('display','block');


    if(parseInt(c.w) > 0) {
        // Show image preview
        var imageObj = $("#jcropImage")[0];
        var canvas = $("#preview")[0];
        var context = canvas.getContext("2d");
        // $("#preview").width(c.w).height(c.h);

        canvas.width = c.w;
        canvas.height = c.h;
        context.drawImage(imageObj, c.x, c.y, c.w, c.h, 0, 0, canvas.width, canvas.height);
    }
};

$('#saveBtn').click(function(){

    var canvas = $("#preview")[0];
    var dataurl = canvas.toDataURL("image/jpeg",1);

    console.log(dataurl);

    window.open(dataurl);

});