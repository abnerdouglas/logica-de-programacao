let lista = [];
function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = parseFloat(produto.split('R$')[1]);
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let preco = quantidade * valorUnitario;
    lista.push(preco);

    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML += 
     `<section class="carrinho__produtos" id="lista-produtos">
        <section class="carrinho__produtos__produto">
          <span class="texto-azul"> ${quantidade} </span> ${nomeProduto} <span class="texto-azul">${valorUnitario}</span>
        </section>
      </section>`;

      atualizarTotal();
}

function atualizarTotal() {
    // A função reduce é usada para somar todos os valores no array lista.
    // (acc, cur) => acc + cur: Uma função de callback que recebe dois parâmetros:
    // acc (acumulador): Inicialmente, é o valor inicial fornecido (0). Em cada iteração, acc armazena a soma acumulada dos valores.
    // cur (valor corrente): Cada valor no array lista é processado um por um.
    let total = lista.reduce((acc, cur) => acc + cur, 0);
    let totalElement = document.getElementById('valor-total');
    totalElement.innerHTML = `R$${total.toFixed(2)}`;
}

function limpar() {
    lista = [];
    document.getElementById('lista-produtos').innerHTML = '';
    atualizarTotal();
}