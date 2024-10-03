const url = 'https://raw.githubusercontent.com/guilhermeenrails/api/main/dados-globais.json'

async function visualizarInformaçõesGlobais() {
   const res = await fetch(url)
   const dados = await res.json()
const pessoasConectadadas = (dados.total_pessoas_conectadadas / 1e9)
const pessoasNoMundo = (dados.total_pessoas_mundo  / 1e9)
const horas = parseInt (dados.tempo_medio)
const minutos = (dados.tempo_medio - horas) * 100
  const paragrafo = document.createElement('p')
paragrafo.classList.add('graficos-container__texo')
paragrafo.innerHTML = `você sabia que o mundo tem <span>${pessoas_mundo} bilhões </span> de pessoas e que aproximadamente <span>${pessoas_conectadadas} bilhões </span> estão conectadas em alguma rede social e passam em media <span>${dados.tempo_medio} </span> horas conectadas.`

const container = document.getElementById('graficos-container')
container.appendChild(paragrafo)
}

visualizarInformaçõesGlobais()