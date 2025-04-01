document.addEventListener('DOMContentLoaded', () => {
    const showcaseItems = document.querySelector('.showcase-items');
    const items = Array.from(document.querySelectorAll('.showcase-item'));
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    const itemsToShow = 5; // Número de itens visíveis por vez
    let itemsArray = [...items]; // Cria uma cópia dos itens para manipulação cíclica

    // Função para atualizar a vitrine
    function updateShowcase() {
        // Remove todos os itens atuais
        showcaseItems.innerHTML = '';
        // Adiciona os 5 itens visíveis
        for (let i = 0; i < itemsToShow; i++) {
            showcaseItems.appendChild(itemsArray[i]);
        }
    }

    // Inicializa a vitrine
    updateShowcase();

    // Botão "Passar"
    nextBtn.addEventListener('click', () => {
        // Move o primeiro item para o final
        const firstItem = itemsArray.shift();
        itemsArray.push(firstItem);
        updateShowcase();
    });

    // Botão "Voltar"
    prevBtn.addEventListener('click', () => {
        // Move o último item para o início
        const lastItem = itemsArray.pop();
        itemsArray.unshift(lastItem);
        updateShowcase();
    });
});