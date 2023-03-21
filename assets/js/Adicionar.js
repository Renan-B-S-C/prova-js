let btnEnviar = document.querySelector('#enviar')

btnEnviar.addEventListener('click', function(evento){

    evento.preventDefault()

    let projeto=valorform(form)

    addProjeto(projeto)
})

function addProjeto (projeto){
    let projetoTr = montarTr(projeto)
    let tabela = document.querySelector('#corpoT')
    tabela.appendChild(projetoTr)
}

function montarTr(projeto){
    let projetoTr = document.createElement('tr')

    projetoTr.classList.add('projeto')

    projetoTr.appendChild(montarTd(projeto.nome,'nome'))
    projetoTr.appendChild(montarTd(projeto.desc,'desc'))
    projetoTr.appendChild(montarTd(projeto.inicio,'inicio'))
    projetoTr.appendChild(montarTd(projeto.conclusao,'conclusao'))
    projetoTr.appendChild(montarTd(projeto.statusAtual,'statusAtual'))
    projetoTr.appendChild(apagarTr('X', 'apagar'))

    return projetoTr
}

function montarTd(dado, classe){

    let td = document.createElement('td')

    td.textContent = dado

    td.classList.add(classe)

    return td
}

function valorform (form){
    let projeto = {
        nome: form.nome.value,
        desc: form.desc.value,
        inicio: form.inicio.value,
        conclusao: form.conclusao.value,
        statusAtual: form.statusAtual.value
    }
    return projeto
}

if ('#inicio') {
    Date.now = function now() {
      return new Date().getTime();
    };
  }
