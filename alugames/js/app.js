function alterarStatus(event) {
    event.preventDefault(); // Evita que o link seja seguido
    const link = event.target;
    
    if (link.textContent === "Alugar") {
        link.textContent = "Devolver";
        link.classList.add('dashboard__item__button--return') //altera cor do fundo do botão para preto
    } else {
        link.textContent = "Alugar";
        link.classList.remove('dashboard__item__button--return') //altera cor do fundo do botão para azul padrão
    }
}
