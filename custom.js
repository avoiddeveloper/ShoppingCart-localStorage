const addProduct = () => {
    const productField = document.getElementById('product');
    const quantityField = document.getElementById('quantity');
    const product = productField.value;
    const quantity = quantityField.value;
    displayProduct(product, quantity);
    savedProductToLocalStorage(product, quantity);
}

const displayProduct = (product, quantity) => {
    const container = document.getElementById('listContainer');
    const li = document.createElement('li');
    li.innerHTML = `${product} : ${quantity}`
    container.appendChild(li);
}

const getStoredShoppingCart = () => {
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        return JSON.parse(storedCart);
    }
    return cart
}

const savedProductToLocalStorage = (product, quantity) => {
    const cart = getStoredShoppingCart();
    cart[product] = quantity;
    const stringifyCart = JSON.stringify(cart);
    localStorage.setItem('cart', stringifyCart);
}

const showSavedData = () => {
    const storedDataString = localStorage.getItem('cart');
    const storedData = JSON.parse(storedDataString);
    for (let item in storedData) {
        displayProduct(item, storedData[item])
    }
}

showSavedData();