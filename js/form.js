$(document).ready(function() {

    // Add Inputs 

    $(this).on("click" , ".add_more_row" , function () {
        var html =  '<div class="form-group form-inline">' +'<input style="margin-right: 4px;" type="text" class="form-control" name="courses[]" ><input type="text" class="form-control" name="courses[]" >';
            html += '<button class= "btn btn-danger remove_input bx bx-x"> </button></div>'
        $(".row_inputs").append(html);    
    })

    // Remove Button 

    $(this).on("click" , ".remove_input" , function() {
        
    var remove_parent = $(this).parent();
    remove_parent.remove();
    });

});