var listOfProducts;

/** Get products from the json file and store it in a gobal variable */
function loadProducts() {
    fetch("./products.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (products) {
            listOfProducts = products;
            addProductsToWebpage();
        });
}


function initSite() {
    loadProducts();
    // This would also be a good place to initialize other parts of the UI
}


/* Uses the loaded products data to create a visible product list on the website */
function addProductsToWebpage() {
    const a = localStorage.getItem("purchased")
    for (const product of listOfProducts) {
        if (a.includes(product.price)) {

            // PRODUCT ELEMENTS
            const productContainer = document.createElement("div");
            const productTitle = document.createElement("h1");
            // const productDescription = document.createElement("p");
            const productImage = document.createElement("img");
            const productPrice = document.createElement("h2");
            const productAddToCartBtn = document.createElement("button");
            const productAddToCartIcon = document.createElement("i");
            const productAddToCartText = document.createElement("p");



            // CLASSES
            productContainer.classList = ("productContainer");
            productTitle.classList = ("productTitle");
            // productDescription.classList = ("productDescription");
            productImage.classList = ("productImage");
            productPrice.classList = ("productPrice");
            productAddToCartBtn.classList = ("productAddToCartBtn");
            productAddToCartIcon.classList = ("fa-solid fa-cart-arrow-down productAddToCartIcon");
            productAddToCartText.classList = ("productAddToCartText");




            // PRODUCT NAME & DESCRIPTION
            productTitle.innerText = product.title;
            // productDescription.innerText = product.description;

            // PRODUCT IMAGE
            const productImageURL = "./assets/" + product.image;
            productImage.setAttribute("src", productImageURL);
            productImage.setAttribute("alt", `Picture of a ${product.title}`);

            // PRODUCT PRICE
            productPrice.innerText = `${product.price} kr`;

            // ADD TO SHOPPING CART TEXT
            productAddToCartText.innerText = "Ta bort";




            // PRODUCT APPENDED INSIDE CONTAINER
            document.querySelector("main").appendChild(productContainer);
            productContainer.appendChild(productTitle);
            // productContainer.appendChild(productDescription);
            productContainer.appendChild(productImage);
            productContainer.appendChild(productPrice);
            productContainer.appendChild(productAddToCartBtn);
            productAddToCartBtn.appendChild(productAddToCartIcon);
            productAddToCartBtn.appendChild(productAddToCartText);

        }
        // else {
        //     const productTitle = document.createElement("h1");
        //     productTitle.innerText = "Your shoping cart is empty!";
        //     productTitle.classList = ("productTitle");
        //     productContainer.appendChild(productTitle);

        // }

        // EVENT LISTENER FOR ADD PRODUCT TO CART BUTTON
        // productAddToCartBtn.addEventListener("click", function () {
        //     this.setAttribute("disabled", true);
        //     console.log(product);

        // productAddToCartBtn.addEventListener("click", function () {

        //     this.setAttribute("disabled", true);
        //     this.classList.add("form--hidden");
        //     localStorage.setItem("purchased", `${localStorage.getItem("purchased")} , ${JSON.stringify(product.price)}`);
        // });


        // });

    }
}