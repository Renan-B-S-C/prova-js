function apagarTr(dado, classe){

    let apagar = document.createElement('td', 'corpoT')

    apagar.textContent = 'X'

    apagar.addEventListener ('dblclick', function(evento){

        evento.target.parentNode.classList.add('fadeOut')

        setTimeout(function(){

            evento.target.parentNode.remove()

        })
    })
    return apagar
}