

// CART ARRAY
let cart = [];


// DOM ELEMENTS

const addButtons = document.querySelectorAll(".add-btn");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const totalItems = document.getElementById("totalItems");
const totalPrice = document.getElementById("totalPrice");
const searchInput = document.getElementById("searchInput");

const removeLastBtn = document.getElementById("removeLastBtn");
const clearCartBtn = document.getElementById("clearCartBtn");
const summaryBtn = document.getElementById("summaryBtn");
const discountBtn = document.getElementById("discountBtn");

// ================================
// DISPLAY CART
// ================================

function displayCart() {

    cartItems.innerHTML = "";

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p class="empty">
                Your cart is empty.
            </p>
        `;

        updateSummary();

        return;
    }

    cart.forEach((product) => {

        const div = document.createElement("div");

        div.classList.add("cart-item");

        div.innerHTML = `

            <img src="${product.image}" alt="">

            <div class="item-info">

                <h4>${product.name}</h4>

                <p>$${product.price}</p>

            </div>

            <div class="quantity">

                <button class="minus-btn" data-id="${product.id}">
                    -
                </button>

                <span>${product.quantity}</span>

                <button class="plus-btn" data-id="${product.id}">
                    +
                </button>

            </div>

            <button
                class="delete-btn"
                data-id="${product.id}"
            >
                Delete
            </button>

        `;

        cartItems.appendChild(div);

    });

    updateSummary();

    quantityButtons();

    deleteButtons();

}

// ================================
// UPDATE SUMMARY
// ================================

function updateSummary() {

    cartCount.textContent = cart.length;

    let items = cart.reduce((total, product) => {

        return total + product.quantity;

    }, 0);

    totalItems.textContent = items;

    let price = cart.reduce((total, product) => {

        return total + (product.price * product.quantity);

    }, 0);

    totalPrice.textContent = "$" + price;

}

// ================================
// ADD PRODUCT
// push()
// ================================

function addToCart(product) {

    const existingProduct = cart.find((item) => {

        return item.id === product.id;

    });

    if (existingProduct) {

        existingProduct.quantity++;

    }

    else {

        product.quantity = 1;

        cart.push(product);

    }

    displayCart();

}

// ================================
// ADD BUTTON EVENTS
// ================================

addButtons.forEach((button) => {

    button.addEventListener("click", function () {

        const card = this.parentElement;

        const product = {

            id: Number(card.dataset.id),

            name: card.dataset.name,

            price: Number(card.dataset.price),

            image: card.querySelector("img").src

        };

        addToCart(product);

    });

});

// ================================
// PLUS & MINUS BUTTONS
// ================================

function quantityButtons() {

    const plusButtons = document.querySelectorAll(".plus-btn");

    const minusButtons = document.querySelectorAll(".minus-btn");

    plusButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const id = Number(button.dataset.id);

            const product = cart.find((item) => {

                return item.id === id;

            });

            product.quantity++;

            displayCart();

        });

    });

    minusButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const id = Number(button.dataset.id);

            const product = cart.find((item) => {

                return item.id === id;

            });

            if (product.quantity > 1) {

                product.quantity--;

            }

            else {

                const index = cart.findIndex((item) => {

                    return item.id === id;

                });

                cart.splice(index, 1);

            }

            displayCart();

        });

    });

}

// DELETE BUTTONS
// splice()

function deleteButtons() {

    const deleteBtns = document.querySelectorAll(".delete-btn");

    deleteBtns.forEach((button) => {

        button.addEventListener("click", () => {

            const id = Number(button.dataset.id);

            const index = cart.findIndex((item) => {

                return item.id === id;

            });

            cart.splice(index, 1);

            displayCart();

        });

    });

}

// REMOVE LAST
// pop()


removeLastBtn.addEventListener("click", () => {

    if (cart.length === 0) {

        alert("Cart is Empty");

        return;

    }

    cart.pop();

    displayCart();

});



// SEARCH PRODUCT
// includes()


searchInput.addEventListener("keyup", () => {

    const value = searchInput.value.toLowerCase();

    const products = document.querySelectorAll(".product-card");

    products.forEach((product) => {

        const name = product.dataset.name.toLowerCase();

        if (name.includes(value)) {

            product.style.display = "block";

        }

        else {

            product.style.display = "none";

        }

    });

});


// ================================
// CLEAR CART
// ================================

clearCartBtn.addEventListener("click", () => {

    if (cart.length === 0) {

        alert("Cart is already empty.");

        return;

    }

    if (confirm("Clear the cart?")) {

        cart = [];

        displayCart();

    }

});


// ================================
// CART SUMMARY
// ================================

summaryBtn.addEventListener("click", () => {

    let items = cart.reduce((total, product) => {

        return total + product.quantity;

    }, 0);

    let price = cart.reduce((total, product) => {

        return total + (product.price * product.quantity);

    }, 0);

    alert(

`========= CART SUMMARY =========

Products : ${cart.length}

Total Items : ${items}

Total Price : $${price}

================================`

    );

});


// ================================
// APPLY 10% DISCOUNT
// map()
// ================================

discountBtn.addEventListener("click", () => {

    if (cart.length === 0) {

        alert("Cart is Empty");

        return;

    }

    cart = cart.map((product) => {

        return {

            ...product,

            price: Number((product.price * 0.90).toFixed(2))

        };

    });

    displayCart();

    alert("10% Discount Applied");

});


// ================================
// SAVE CART
// localStorage
// ================================

function saveCart() {

    localStorage.setItem("cart", JSON.stringify(cart));

}


// ================================
// LOAD CART
// ================================

function loadCart() {

    const savedCart = JSON.parse(localStorage.getItem("cart"));

    if (savedCart) {

        cart = savedCart;

    }

}


// ================================
// OVERRIDE displayCart()
// So every update is saved automatically
// ================================

const oldDisplayCart = displayCart;

displayCart = function () {

    saveCart();

    oldDisplayCart();

};


// ================================
// LOAD DATA ON PAGE REFRESH
// ================================

loadCart();

displayCart();


// ================================
// EXTRA CONSOLE PRACTICE
// ================================

// forEach()

cart.forEach((item) => {

    console.log(item.name);

});

// map()

const productNames = cart.map((item) => {

    return item.name;

});

console.log(productNames);


// filter()

const expensiveProducts = cart.filter((item) => {

    return item.price > 500;

});

console.log(expensiveProducts);


// some()

const hasLaptop = cart.some((item) => {

    return item.name === "Gaming Laptop";

});

console.log(hasLaptop);


// every()

const allPositive = cart.every((item) => {

    return item.price > 0;

});

console.log(allPositive);


// includes()

const names = cart.map((item) => item.name);

console.log(names.includes("Shoes"));


// reduce()

console.log(

    cart.reduce((sum, item) => {

        return sum + item.price;

    }, 0)

);


// ================================
// PROJECT READY
// ================================

console.log("Shopping Cart System Loaded Successfully.");