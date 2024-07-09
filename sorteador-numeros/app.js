function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value,10);
    let numeroInicial = parseInt(document.getElementById('numeroInicial').value,10);
    let numeroFinal = parseInt(document.getElementById('numeroFinal').value,10);
    let listaNumerosSorteados = [];

    if (quantidade == 0 || numeroInicial == 0 || numeroFinal == 0){
        alert('Todos os campos devem ser no mínimo 1.');
        return;
    }  

    else if (numeroInicial > numeroFinal){
        alert('O número inicial deve ser menor do que o número final.');
        return;
    }

    for (let i=1; i<=quantidade; i++ ){
        let numeroSorteado = Math.floor(Math.random() * (numeroFinal - numeroInicial + 1)) + parseInt(numeroInicial);
        listaNumerosSorteados.push(numeroSorteado);
    }
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = '<label class="texto__paragrafo">Números sorteados: ' + listaNumerosSorteados.join(', ') + '</label>';
}

function reiniciar(){
    var reiniciarQuantidade = document.getElementById('quantidade');
    var reiniciarNumeroInicial = document.getElementById('numeroInicial');
    var reiniciarNumeroFinal = document.getElementById('numeroFinal');
    var reiniciarResultado = document.getElementById('resultado');
    reiniciarQuantidade.value = '';
    reiniciarNumeroInicial.value = '';
    reiniciarNumeroFinal.value = '';
    reiniciarResultado.innerHTML = '';
}