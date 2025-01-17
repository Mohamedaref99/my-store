let cart = [];
let total = 0;

function addToCart(product, price) {
    cart.push(product);
    total += price;
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart');
    cartList.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        cartList.appendChild(li);
    });
    document.getElementById('total').textContent = `Total: $${total}`;
}
