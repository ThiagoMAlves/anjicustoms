const searchBar = document.getElementById('searchBar');
const products = document.querySelectorAll('.product-card');

searchBar.addEventListener('input', function () {
  const searchTerm = this.value.toLowerCase();

  products.forEach(product => {
    const name = product.dataset.name.toLowerCase();
    if (name.includes(searchTerm)) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
});
