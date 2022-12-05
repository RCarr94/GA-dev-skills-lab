$('#skills tbody').on('click','button', function(){ 
    $(this).closest('tr').fadeOut(500, function(){
        $(this).remove();
    })
})

