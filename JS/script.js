document.addEventListener("DOMContentLoaded", () => {
    const splashScreen = document.querySelector('.splash-screen');
    const splashVideo = document.querySelector('.splash-video');

    // Listen for the `timeupdate` event to track playback time
    splashVideo.addEventListener('timeupdate', () => {
        if (splashVideo.currentTime >= 4) { // Check if 3 seconds have passed
            splashScreen.classList.add('hidden'); // Start fading out the splash screen
            setTimeout(() => {
                splashScreen.style.display = 'none'; // Remove splash screen after fade-out
            }, 1000); // Match the CSS transition duration
        }
    });

    // Prevent user interaction during splash screen
    splashScreen.addEventListener('click', (e) => e.preventDefault());
});
document.addEventListener("DOMContentLoaded", () => {
    const splashScreen = document.querySelector('.splash-screen');
    const splashVideo = document.querySelector('.splash-video');

    // Check if the splash video has been played in this session
    const hasPlayed = sessionStorage.getItem('splashPlayed');

    if (hasPlayed) {
        // If already played in this session, skip the splash screen
        splashScreen.style.display = 'none';
    } else {
        // Play the splash video and mark it as played
        splashVideo.play();

        splashVideo.addEventListener('timeupdate', () => {
            if (splashVideo.currentTime >= 3) {
                splashScreen.classList.add('hidden'); // Fade out the splash screen
                setTimeout(() => {
                    splashScreen.style.display = 'none';
                    sessionStorage.setItem('splashPlayed', 'true'); // Mark splash as played for the session
                }, 1000); // Match the CSS transition duration
            }
        });
    }
});


function toggleMenu() {
    const navMenu = document.querySelector('nav ul');
    navMenu.classList.toggle('open');
}
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


document.addEventListener('DOMContentLoaded', () => {
    // Cart Functionality
    const cartItemsContainer = document.querySelector('.cart-list');
    const subtotalElement = document.getElementById('subtotal');
    const taxElement = document.getElementById('tax');
    const totalElement = document.getElementById('total');
    const checkoutButton = document.querySelector('.checkout-btn');

    // Function to update cart totals
    function updateCartTotals() {
        let subtotal = 0;
        const cartItems = document.querySelectorAll('.cart-item');

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

    // Function to attach event listeners to cart items
    function attachEventListeners(item) {
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
            checkIfCartIsEmpty();
        });
    }

    // Function to check if the cart is empty
    function checkIfCartIsEmpty() {
        const cartItems = document.querySelectorAll('.cart-item');
        if (cartItems.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
            subtotalElement.textContent = '$0.00';
            taxElement.textContent = '$0.00';
            totalElement.textContent = '$0.00';
            checkoutButton.style.display = 'none'; // Hide the checkout button if cart is empty
        }
    }

    // Attach event listeners to existing cart items
    const cartItems = document.querySelectorAll('.cart-item');
    cartItems.forEach(item => {
        attachEventListeners(item);
    });

    // Proceed to Checkout
    checkoutButton.addEventListener('click', (e) => {
        e.preventDefault();
        // Display a thank you message
        document.querySelector('.main_body').innerHTML = `
            <section class="thank-you">
                <h2>Thank You for Your Order!</h2>
                <p>Your order has been placed successfully. We'll contact you with the delivery details soon.</p>
            </section>
        `;
    });

    // Initial Calculation
    updateCartTotals();
});
