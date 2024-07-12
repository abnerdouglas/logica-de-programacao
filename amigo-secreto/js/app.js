let listaAmigosIncluidos = [];
let sorteados = document.getElementById('lista-sorteio');

function adicionar() {
    let nome = document.getElementById('nome-amigo').value.trim();
    let listaDeAmigos = document.getElementById('lista-amigos');
    let nomeNormalizado = nome.toLowerCase();

    if (nome && !listaAmigosIncluidos.map(nome => nome.toLowerCase()).includes(nomeNormalizado)) {
        listaAmigosIncluidos.push(nome);
        document.getElementById('nome-amigo').value = '';
        listaDeAmigos.innerHTML = listaAmigosIncluidos.join(', ');
    } else {
        alert("Nome inválido ou já adicionado.");
    }
}

// função disponível no site: http://cangaceirojavascript.com.br/como-embaralhar-arrays-algoritmo-fisher-yates/
function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function sortear() {
    if (listaAmigosIncluidos.length === 0) {
        alert("Lista de amigos vazia.");
        return;
    } else if (listaAmigosIncluidos.length % 2 !== 0) {
        alert("Número de amigos deve ser par para o sorteio.");
        return;
    } else if (listaAmigosIncluidos.length < 4) {
        alert("Número de amigos deve ser no mínimo 4.");
        return;
    } 

    embaralha(listaAmigosIncluidos);
    let resultado = [];
    for (let i = 0; i < listaAmigosIncluidos.length; i += 2) {
        resultado.push(`${listaAmigosIncluidos[i]} --> ${listaAmigosIncluidos[i + 1]}`);
        resultado.push(`${listaAmigosIncluidos[i + 1]} --> ${listaAmigosIncluidos[i]}`);
    }
    sorteados.innerHTML = resultado.join('<br/>');
}

function reiniciar() {
    listaAmigosIncluidos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('nome-amigo').value = '';
    sorteados.innerHTML = '';
}
