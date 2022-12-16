$(document).ready(function(){

    $('.add').on('click', function(){
        const inputTarefa = $('#inputTarefa').val()
        const li = document.createElement('li')
        li.innerHTML = `${inputTarefa}`
        $('ul').append(li)
        $('#inputTarefa').val('')
        $(li).click(function(){
            $(li).toggleClass('feito')
        })
    })
})