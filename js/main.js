$('#skills tbody').on('click','button', function(){ 
    $(this).closest('tr').fadeOut(500, function(){
        $(this).remove();
    })
})


$('#submit').on('click', function(evt){
    if ($('input[name="trait"]').val() === '') return;

    let tempS = $('input[name="trait"]').val();

    let newRow = `<tr>
                    <td><button class="btn remove">X</button></td>
                        <td>${tempS}</td>  
                    </tr>`
    
    $('#skills tbody').append(newRow);

})


