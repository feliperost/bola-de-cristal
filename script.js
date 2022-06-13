const elementoResposta = document.querySelector('#resposta')

const inputPergunta = document.querySelector('#inputPergunta')

const buttonPerguntar = document.querySelector('#buttonPerguntar')

const respostas = [
  "Sim.",
  "Não.",
  "Com toda certeza.",
  "Definitivamente não.",
  "Talvez.",
  "É melhor eu não te dizer agora.",
  "Provavelmente.",
  "Não consigo ver direito... Concentre-se e pergunte novamente.",
  "Não conte com isso.",
  "Puts grila...",
]



function fazerPergunta() {

  if(inputPergunta.value == "") {
    alert("Digite alguma pergunta!")
    return
  }

  buttonPerguntar.setAttribute("disabled", true)

  const pergunta = "<div>" + inputPergunta.value + "</div>"

  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

  elementoResposta.style.opacity = 1

  setTimeout(function() {
    elementoResposta.style.opacity = 0;
    buttonPerguntar.removeAttribute("disabled");
  }, 3000)
}

