// تعريف السلة كـ مصفوفة فارغة
let cart = [];

// دالة لإضافة المنتج إلى السلة
function addToCart(productName, productPrice) {
    // إضافة المنتج إلى السلة
    cart.push({ name: productName, price: productPrice });

    // تحديث عرض السلة
    updateCart();
}

// دالة لتحديث محتويات السلة وعرضها في الصفحة
function updateCart() {
    // العثور على عنصر السلة في الفوتر
    const cartList = document.getElementById("cart");
    const totalPriceElement = document.getElementById("total");

    // مسح العناصر السابقة في السلة
    cartList.innerHTML = "";

    // إضافة كل منتج إلى السلة
    let total = 0;
    cart.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - $${item.price}`;
        cartList.appendChild(listItem);
        total += item.price;
    });

    // عرض إجمالي السلة
    totalPriceElement.textContent = `Total: $${total}`;
}
