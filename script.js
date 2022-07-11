var nome = document.getElementById('nome')
var email = document.getElementById('email')
var senha = document.getElementById('senha')
var repSenha = document.getElementById('repSenha')

var emailAprovado = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g



function validar() {

  var nomeStr = nome.value
  var nomeWrapper = document.getElementById('nome')

  var emailStr = email.value
  var emailWrapper = document.getElementById('email')

  var senhaStr = senha.value
  var senhaWrapper = document.getElementById('senha')

  var senhaRep = repSenha.value
  var senhaRepWrapper = document.getElementById('repSenha')



  if ( nomeStr.length < 8 ) {
    nomeWrapper = document.getElementById('nome').classList.add('error')
  } else {
    nomeWrapper = document.getElementById('nome').classList.add('sucess')
    nomeWrapper = true
  }


  if ( emailAprovado.test(emailStr)) {
    emailWrapper = document.getElementById('email').classList.add('sucess')
    emailWrapper = true
  } else {
    emailWrapper = document.getElementById('email').classList.add('error')

  }


  if ( senhaStr.length < 8 ) {
    senhaWrapper = document.getElementById('senha').classList.add('error')
  } else {
    senhaWrapper = document.getElementById('senha').classList.add('sucess')
    senhaWrapper = true
  }


  if ( senhaRep === senhaStr ) {
    senhaRepWrapper = document.getElementById('repSenha').classList.add('sucess')
    senhaRepWrapper = true
  } else {
    senhaRepWrapper = document.getElementById('repSenha').classList.add('error')
  }

  if( nomeWrapper && senhaWrapper && senhaRepWrapper && emailWrapper) {
    document.getElementById('tudo-certo').classList.add('tudocerto', 'mostrar')
    var h1 = document.querySelector('h1').innerText = "aaaaaaa"
  }

}




