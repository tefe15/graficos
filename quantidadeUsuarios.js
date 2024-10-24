import { getCSS} from "./common.js"

asyns function quantidadeUsuarios(){
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    conts res = await fetch(url)
    const dados = wait res.json()
    const nomeDasRedes = Object.keys(dados)
    const quantidadedeUsuarios = Object.values(dados)

    const data = [
        {
            x: nomeDasRedes, 
            y: quantidadeUsuarios,
            type: 'bar',
            marker: {
                color: getCSS('--primary-color')
        }
    ]
}

const layout = {
    plot_bgcolor:
}
    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementByid('graficos-container').appendChild(grafico)
Plotly.newPlot(grafico, data)
}

quantidadeUsuarios()


