// contador
function contar () {
  let nInicial = document.querySelector("#inicio")
  let nFinal = document.querySelector("#fim")
  let pNumero = document.querySelector("#passo")
  let resultado = document.querySelector("#res")

  if (nInicial.value.length == 0 || nFinal.value.length == 0 || pNumero.value.length == 0) {
        alert("[ERRO] Preencha todos os compos!!")
  } else {
    resultado.innerHTML = `contando: `
    let i = Number(nInicial.value)
    let f = Number(nFinal.value)
    let p = Number(pNumero.value)
    if(i < f) {
    // contagem crescente
      for(let c = i; c <= f; c += p) {
        resultado.innerHTML += `${c} \u{1F449}`
      }
      } else {
      //contagem regressiva
      for(let c = i; c >= f; c -= p){
      resultado.innerHTML += `${c} \u{1F604}` 
      }
        }
          }  
}
var cnt = document.querySelector("#contar")
cnt.addEventListener("click", contar)
