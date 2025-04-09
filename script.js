// Kartlara tıklanınca renk değiştirme
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        card.style.backgroundColor = '#f0f0f0';
        setTimeout(() => {
            card.style.backgroundColor = 'white';
        }, 300);
    });
});
