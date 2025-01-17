// دالة لإضافة المنتج إلى السلة
function addToCart(productName, productPrice) {
    // جلب السلة من localStorage أو إنشاء مصفوفة جديدة إذا لم تكن موجودة
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // إضافة المنتج إلى السلة
    cart.push({ name: productName, price: productPrice });

    // حفظ السلة في localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // تنبيه للمستخدم بأن المنتج تم إضافته بنجاح
    alert(`${productName} has been added to your cart!`);

    // تحديث عرض السلة
    updateCart();
}

// دالة لتحديث عرض السلة في الصفحة
function updateCart() {
    // الحصول على العناصر من localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartList = document.getElementById("cart");
    const totalPriceElement = document.getElementById("total");

    // مسح المحتويات القديمة في السلة
    cartList.innerHTML = "";

    let total = 0;

    // إضافة كل منتج إلى السلة
    cart.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - $${item.price}`;
        cartList.appendChild(listItem);
        total += item.price;
    });

    // عرض المجموع الكلي
    totalPriceElement.textContent = `Total: $${total}`;
}

// استدعاء الدالة لتحديث السلة عندما يتم تحميل الصفحة
document.addEventListener('DOMContentLoaded', updateCart);
