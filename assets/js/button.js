$(document).ready(function() { 
    $('button').click(function() { 
        $('button.btn.active').removeClass("active"); 
            $(this).addClass("active"); 
    }); 
}); 