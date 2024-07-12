function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso');
    let quantidade = parseInt(document.getElementById('qtd').value);

    if (tipoIngresso.value == 'pista'){
        comprarPista(quantidade);
    } else if ( tipoIngresso.value == 'inferior') {
        comprarCadeiraInferior(quantidade);
    } else if (tipoIngresso.value == 'superior') {
        comprarCadeiraSuperior(quantidade);
    } else {
        comprarCamarote(quantidade);
    }
}

function comprarPista(quantidade) {
    let quantidadePista = parseInt(document.getElementById('qtd-pista').textContent);
    if (quantidade > quantidadePista){
        alert('Quantidade indisponível de ingressos para o tipo pista.');
        limparQuantidade();
        return;
    }
    quantidadePista -= quantidade;
    document.getElementById('qtd-pista').textContent = quantidadePista;
    alert('Compra realizada com sucesso!')
}

function comprarCadeiraInferior(quantidade) {
    let quantidadeCadeiraInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (quantidade > quantidadeCadeiraInferior){
        alert('Quantidade indisponível de ingressos para o tipo cadeira inferior.');
        limparQuantidade();
        return;
    }
    quantidadeCadeiraInferior -= quantidade;
    document.getElementById('qtd-inferior').textContent = quantidadeCadeiraInferior;
    alert('Compra realizada com sucesso!')
}

function comprarCadeiraSuperior(quantidade) {
    let quantidadeCadeiraSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (quantidade > quantidadeCadeiraSuperior){
        alert('Quantidade indisponível de ingressos para o tipo cadeira superior.');
        limparQuantidade();
        return;
    }
    quantidadeCadeiraSuperior -= quantidade;
    document.getElementById('qtd-superior').textContent = quantidadeCadeiraSuperior;
    alert('Compra realizada com sucesso!');
}

function comprarCamarote(quantidade) {
    let quantidadeCamarote= parseInt(document.getElementById('qtd-camarote').textContent);
    if (quantidade > quantidadeCamarote){
        alert('Quantidade indisponível de ingressos para o tipo camarote.');
        limparQuantidade();
        return;
    }
    quantidadeCamarote -= quantidade;
    document.getElementById('qtd-camarote').textContent = quantidadeCamarote;
    alert('Compra realizada com sucesso!');
}

function limparQuantidade() {
    qtd = document.getElementById('qtd');
    qtd.value = '';
}