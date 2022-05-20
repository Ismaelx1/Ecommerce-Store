const imgDisplay = document.querySelector('.mini-img')



imgDisplay.addEventListener('click', () => {
    let e = event.target
    const mainImg = document.querySelector('.main-img')


    if (e.className === 'littleImg 1') {
        mainImg.innerHTML = '<img src="./ecommerce-product-page-main/images/image-product-1.jpg" class="bigImg" alt="">'
    } else if (e.className === 'littleImg 2') {
        mainImg.innerHTML = '<img src="./ecommerce-product-page-main/images/image-product-2.jpg" class="bigImg" alt="">'
    } else if (e.className === 'littleImg 3') {
        mainImg.innerHTML = '<img src="./ecommerce-product-page-main/images/image-product-3.jpg" class="bigImg" alt="">'
    } else if (e.className === 'littleImg 4') {
        mainImg.innerHTML = '<img src="./ecommerce-product-page-main/images/image-product-4.jpg" class="bigImg" alt="">'
    }
})

const minBtn = document.querySelector('.decre')
const plusBtn = document.querySelector('.incre')
let countNow = 1;

function counterinfo() {
    const counter = document.querySelector('.counterInf')
    const cartNotif = document.querySelector('.cartNumber')
    
    minBtn.addEventListener('click', () => {
     
        countNow--;
        counter.textContent = countNow;

        updatePrice()
    })
    plusBtn.addEventListener('click', () => {
        countNow++;
        counter.textContent = countNow;
        
        updatePrice()
    })
    return countNow;
}

counterinfo()

function updatePrice() {
    const discPrice = document.querySelector('.h3') 
    const oriPrice = document.querySelector('.origin')

    const discP = 125;
    const oriP = 250;

    discPrice.textContent = `$${discP * countNow}.00`
    oriPrice.textContent = `$${oriP * countNow}.00`
 
    return
}

const cart = document.querySelector('.cart')
const cartContent = document.querySelector('.cart-content')
let visiStatus = false;
let arrTotal = [];


cart.addEventListener('click', () => {



    if (!visiStatus) {
        visiStatus = true;

    }  else if (visiStatus) {
        visiStatus = false;

    }
    checkVisi(visiStatus, cartContent)
})

function checkVisi(vara, item) {
    if (vara === true) {
        item.style.visibility = 'visible'
    } else if (vara === false) {
        item.style.visibility = 'hidden'
    }
 } 

 const adToCart = document.querySelector('.cartBtn')

 let carNumber = 0
adToCart.addEventListener('click', () => {

    const cartNotif = document.querySelector('.cartNumber')

  

    const discPrice = document.querySelector('.h3') 
    const oriPrice = document.querySelector('.origin')

    const discP = 125;
    const oriP = 250;

   // cartContent.style.visibility = 'visible'
    let originalPrice = oriPrice.textContent = `$${oriP * countNow}.00`
    let discountedPrice =  discPrice.textContent = `$${discP * countNow}.00`
    arrTotal.push(discP * countNow)

    carNumber += countNow;

    console.log(carNumber)
    cartNotif.textContent = ''

    const itemDiv = document.createElement('div')
    const firstDiv = document.createElement('div')
    const secDiv = document.createElement('div')
    const thirdDiv = document.createElement('div')

    firstDiv.textContent = `Fall Limited Edition Sneakers x${countNow}`
    firstDiv.classList.add('item')

    secDiv.textContent = `Total Amount: ${originalPrice}`
    thirdDiv.textContent = `After Discount: ${discountedPrice}`

    cartContent.append(itemDiv)
    itemDiv.append(firstDiv)
    firstDiv.append(secDiv)
    secDiv.append(thirdDiv)

    cartNotif.textContent = carNumber

    const counter = document.querySelector('.counterInf')
    counter.textContent = ''
    countNow = 1;
    counter.textContent = countNow;

    visiStatus = true;
    checkTotal()
    checkVisi(visiStatus, cartContent)


})


function checkTotal() {
    const totalInput = document.querySelector('.total')
    let finalResult = 0;

    for (let i = 0; i < arrTotal.length; i++) {
        finalResult += arrTotal[i]
       
    }

    totalInput.textContent = `The Total is $${finalResult}.00`
}

