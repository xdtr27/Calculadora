let visor = document.getElementById('visor')


function click_button(numero) {
  visor.innerHTML += numero 
}
function limpar() {
  visor.innerHTML = "";
}
function deletar() {
 let resultado = visor.innerHTML
 visor.innerHTML = resultado.substring(0, resultado.length - 1)
}
function calcular() {
  let resultado = visor.innerHTML;
  if(resultado) {
    visor.innerHTML = eval(resultado) 
  } 
}
function uau(event) {
  console.log(event)
}

/* ======= utilizando as teclas do teclado para calcular ======= */

document.addEventListener('keydown', (event) => {
  if (event.key === "Enter") {
    calcular()
  } else if (event.key === "Backspace") {
    deletar()
  } else {
    visor.innerHTML += event.key
  }
})