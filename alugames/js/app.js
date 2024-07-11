function alterarStatus(event) {
    event.preventDefault(); // Evita que o link seja seguido
    const link = event.target;
    const parentElement = link.closest('.dashboard__items__item'); //encontra o elemento pai mais próximo com a classe dashboard__items__item a partir do link clicado.
    const imgElement = parentElement.querySelector('.dashboard__item__img'); // encontra o elemento de imagem dentro do pai encontrado.

    if (link.textContent === "Alugar") {
        link.textContent = "Devolver";
        link.classList.add('dashboard__item__button--return') //altera cor do fundo do botão para preto
        imgElement.classList.add('dashboard__item__img--rented'); // adiciona classe à imagem associada
    } else {
        link.textContent = "Alugar";
        link.classList.remove('dashboard__item__button--return') //altera cor do fundo do botão para azul padrão
        imgElement.classList.remove('dashboard__item__img--rented'); // remove classe à imagem associada
    }
}


