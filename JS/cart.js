// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Cart Functionality
    const cartItems = document.querySelectorAll('.cart-item');
    const subtotalElement = document.getElementById('subtotal');
    const taxElement = document.getElementById('tax');
    const totalElement = document.getElementById('total');

    function updateCartTotals() {
        let subtotal = 0;
        cartItems.forEach(item => {
            const price = parseFloat(item.querySelector('.price').textContent.replace('$', ''));
            const quantity = parseInt(item.querySelector('.quantity-input').value);
            subtotal += price * quantity;
        });
        const tax = subtotal * 0.08; // Assuming 8% tax rate
        const total = subtotal + tax;

        subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
        taxElement.textContent = `$${tax.toFixed(2)}`;
        totalElement.textContent = `$${total.toFixed(2)}`;
    }

    // Event Listeners for Quantity Changes
    cartItems.forEach(item => {
        const minusBtn = item.querySelector('.minus');
        const plusBtn = item.querySelector('.plus');
        const quantityInput = item.querySelector('.quantity-input');
        const removeBtn = item.querySelector('.remove-btn');

        minusBtn.addEventListener('click', () => {
            if (quantityInput.value > 1) {
                quantityInput.value--;
                updateCartTotals();
            }
        });

        plusBtn.addEventListener('click', () => {
            quantityInput.value++;
            updateCartTotals();
        });

        quantityInput.addEventListener('change', () => {
            if (quantityInput.value < 1) {
                quantityInput.value = 1;
            }
            updateCartTotals();
        });

        // Remove Item
        removeBtn.addEventListener('click', () => {
            item.remove();
            updateCartTotals();
        });
    });

    // Initial Calculation
    updateCartTotals();
});
