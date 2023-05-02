const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const burguerIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const cartIcon = document.querySelector('.navbar-shopping-cart')
const cartList = document.querySelector('#shoppingCartContainer')
const cardsContainer = document.querySelector('.cards-container')
const productDetail = document.querySelector('#product-detail')
const closeButton = document.querySelector('.product-detail-close')

const productList = []

productList.push({ 
    name: "bike",
    price: 120,
    image: '"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">'
})
productList.push({ 
    name: "bike",
    price: 120,
    image: '"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">'
})
productList.push({ 
    name: "bike",
    price: 120,
    image: '"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">'
})
productList.push({ 
    name: "bike",
    price: 120,
    image: '"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">'
})
productList.push({ 
    name: "bike",
    price: 120,
    image: '"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">'
})
productList.push({ 
    name: "bike",
    price: 120,
    image: '"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">'
})

const renderProducts = (arr) => {
    for (product of arr) {
        const htmlCard = `
        <div class="product-card">
            <img class="card-img" src=${ product.image }
            <div class="product-info">
                <div>
                    <p>${ product.price }</p>
                    <p>${ product.name }</p>
                </div>
                <figure><img src="./icons/bt_add_to_cart.svg" alt=""></figure>
            </div>
        </div>`
    
        cardsContainer.innerHTML += htmlCard
    
    }
}

renderProducts(productList)

menuEmail.addEventListener('click', toggleDesktopMenu)
burguerIcon.addEventListener('click', toggleMobileMenu)
cartIcon.addEventListener('click', toggleCartList)
closeButton.addEventListener('click', closeProductDetail)

function toggleDesktopMenu()  {
    desktopMenu.classList.toggle('hidden') 
    cartList.classList.add('hidden')
    productDetail.classList.add('hidden')
}

function toggleMobileMenu()  {
    mobileMenu.classList.toggle('hidden')
    cartList.classList.add('hidden')
    productDetail.classList.add('hidden')
}

function toggleCartList()  {
    cartList.classList.toggle('hidden') 
    desktopMenu.classList.add('hidden') 
    mobileMenu.classList.add('hidden')
    productDetail.classList.add('hidden')
}

function openProductDetail() {
        productDetail.classList.remove('hidden')
        cartList.classList.add('hidden')
        desktopMenu.classList.add('hidden') 
        mobileMenu.classList.add('hidden')
}

function closeProductDetail() {
    productDetail.classList.add('hidden')
}

const productImage = document.querySelectorAll('.card-img')

const mapImages = () => {
    for (const product of productImage) {
        product.addEventListener('click', openProductDetail)
    }
}

mapImages()





