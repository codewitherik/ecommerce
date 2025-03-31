document.querySelectorAll('.product-card button').forEach(button => {
    button.addEventListener('click', function() {
        alert('Produkt zum Warenkorb hinzugefügt!');
    });
});
