


const handleLocalstorageAdd = () => {
    const name = document.getElementById('input-name');
    const nameValue = name.value;

    const quantity = document.getElementById('input-quantity');
    const quantityValue = quantity.value;


    handleAdd(nameValue, quantityValue);
    cartSetToLocalstorage(nameValue, quantityValue)

    name.value = "";
    quantity.value = "";
}

const handleAdd = (productName, productQuantity) => {
    const cartContainer = document.getElementById('cart-container');

    const createLi = document.createElement('li');
    createLi.innerText = `${productName} : ${productQuantity}`;

    cartContainer.appendChild(createLi)
}


const getProductFromStorage = (name, quantity) => {
    let cart = {};
    const getProduct = localStorage.getItem("cart");

    if (getProduct) {
        cart = JSON.parse(getProduct);
    }
    return cart;

}

const displayFromLocalStorage = () => {
    const products = getProductFromStorage();

    for (const product in products) {
        handleAdd(product, product[product]);
    }
}


const cartSetToLocalstorage = (productName, productQuantity) => {

    const cart = getProductFromStorage();

    cart[productName] = productQuantity;

    const cartString = JSON.stringify(cart);

    localStorage.setItem("cart", cartString)


}


displayFromLocalStorage()