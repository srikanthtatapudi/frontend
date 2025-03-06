// script.js
let cartCount = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    cartCount++;
    document.getElementById('cart-count').textContent = cartCount;
    alert('Added to cart!');
  });
});

document.querySelectorAll('.product-card button').forEach(button => {
  button.addEventListener('click', () => {
    setTimeout(() => {
      alert('Order successful! Thank you for shopping with WatchTex.');
      window.location.href = '#'; // Redirect to a confirmation page if needed
    }, 1000);
  });
});