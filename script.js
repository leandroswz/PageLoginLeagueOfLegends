
const form = document.forms.login;
const botao = document.querySelector(".button");

form.addEventListener("input",event =>{
  if (form.nome.value && form.pass.value.length >=8){
    botao.disabled = false
  }
  else{
    botao.disabled = true;
  }
})

