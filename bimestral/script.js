// Array que armazenará os discos cadastrados
const products = [];

// Função para adicionar o produto
function addProduct() {
    const productName = document.getElementById('product-name').value;
    const productArtist = document.getElementById('product-artist').value;
    const productPrice = parseFloat(document.getElementById('product-price').value);

    // Verifica se os campos estão preenchidos corretamente
    if (productName && productArtist && !isNaN(productPrice)) {
        
        // Objeto representando o novo Vinil
        const product = {
            name: productName,
            artist: productArtist,
            price: productPrice            
        };

        // Adiciona o vinil ao array
        products.push(product);

        // Atualiza a visualização na tabela
        displayProducts();

        // Limpa os campos do formulário para o próximo cadastro
        document.getElementById('product-name').value = "";
        document.getElementById('product-artist').value = "";
        document.getElementById('product-price').value = "";
    }
}

// Função para renderizar a lista de produtos na tabela HTML
function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ""; // Limpa a tabela antes de reconstruir

    products.forEach(function(product) {
        const row = productList.insertRow();
        
        // Coluna 1: Nome do Álbum
        const cell1 = row.insertCell(0);
        cell1.textContent = product.name;

        // Coluna 2: Artista
        const cell2 = row.insertCell(1);
        cell2.textContent = product.artist;

        // Coluna 3: Preço formatado em Reais (Ex: R$ 120,00)
        const cell3 = row.insertCell(2);
        cell3.textContent = product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    });
}

// Captura o formulário e intercepta o envio para usar a lógica do JS
const productForm = document.getElementById('product-form');
productForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Impede a página de recarregar
    addProduct();
});