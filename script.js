const cart = document.querySelector('.cart__logo');
const product = document.querySelectorAll('.products');
const grid = document.querySelector('.grid');
const allGrid = document.querySelectorAll('.grid__bg');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const quantityNumber = document.querySelector('.quantity__number')
const prod = document.querySelector('.prod')
const productDisplay = document.querySelector('.product')
const landing = document.querySelector('.container');
const preview = document.querySelector('.bg');
const cls = document.querySelector('.close');
const right = document.querySelector('.right__arrow');
const left = document.querySelector('.left__arrow');
const previewProduct = document.querySelector('.product__1');
const prev1 = document.querySelector('.prev1');
const prev2 = document.querySelector('.prev2');
const prev3 = document.querySelector('.prev3');
const prev4 = document.querySelector('.prev4');
const del = document.querySelectorAll('.del');
const aaddToCart = document.querySelector('.btn');
const cardCheckout = document.querySelector('.checkout__card');
const price = document.querySelector('.price');
const numberQuantity = document.querySelector('.numb__quantity');
const totalPrice = document.querySelector('.total__price')
const cartItems = document.querySelector('.cart__items');
const cartHover = document.querySelector('.cart__logo');
const card = document.querySelector('.card');
const checkoutButton = document.querySelector('.checkout__btn');
const empty = document.querySelector('.empty'); 
const delCard = document.querySelector('.delete');
const navBg = document.querySelector('.nav__bg');
const navClose = document.querySelector('.nav__close');
const menu = document.querySelector('.menu');
const mobileSlide = document.querySelector('.slide__1')
const mSliderRight = document.querySelector('.right__slide');
const mSliderLeftt = document.querySelector('.left__slide');

menu.addEventListener('click', () => {
    navBg.style.display = 'flex';
})

navClose.addEventListener('click', () => {
    navBg.style.display = 'none'
})

delCard.style.cursor = 'pointer';



cartHover.addEventListener('click', () => {
    if (cartItems.innerText != 0) {
    cardCheckout.classList.toggle('active');
    card.style.display = 'flex';
    checkoutButton.style.display = 'block';
    empty.style.display = 'none';
    cartItems.style.display = 'block';
    cartItems.innerText = quantityNumber.innerText;
    let totalAmount = Number(removeDolla) * Number(quantityNumber.innerText);
     totalPrice.innerText = `$${totalAmount}.00`
       
        
    } else {
    
        card.style.display = 'none';
        checkoutButton.style.display = 'none';
        empty.style.display = 'block';
        cardCheckout.classList.toggle('active');
        cartItems.style.display = 'none';
    }
})

let removeDolla = price.textContent.replace('$', '');


aaddToCart.addEventListener('click', () => {
    if (quantityNumber.innerText != 0) {
        cartItems.style.display = 'block';
        cartItems.innerText = quantityNumber.innerText;
        let totalAmount = Number(removeDolla) * Number(quantityNumber.innerText);
        totalPrice.innerText = `$${totalAmount}.00`
    }
})

delCard.addEventListener('click', () => {
    card.style.display = 'none';
    checkoutButton.style.display = 'none';
    empty.style.display = 'block';
    cartItems.style.display = 'none';
    quantityNumber.innerText= 0
    cartItems.innerText = 0
    
})

const deleteActive = () => {
    product.forEach(btn => {
    btn.classList.remove('active')
     btn.parentElement.classList.remove('border')
    })
}

const deletePreviewActive = () => {
    del.forEach(cta => {
        cta.classList.remove('active')
        cta.parentElement.classList.remove('border')
})
}


prod.addEventListener('click', () => {
    preview.style.display = 'flex'
    prev1.classList.add('active')
    prev1.parentElement.classList.add('border')
    
  
})

cls.addEventListener('click', () => {
    deletePreviewActive() 
    preview.style.display = 'none'
    previewProduct.setAttribute('src', './images/image-product-1.jpg');
    previewProduct.className = 'product__1'
})

cls.addEventListener('mouseover', () => {
    cls.setAttribute('src','./images/icon-close-hover.svg')
})

cls.addEventListener('mouseout', () => {
    cls.setAttribute('src','./images/icon-close.svg')
})

const arrowHover = () => {
    right.addEventListener('mouseover', () => {
        right.setAttribute('src', './images/icon-next-hover.svg');
    });
    right.addEventListener('mouseout', () => {
         right.setAttribute('src', './images/icon-next.svg');
    })

     left.addEventListener('mouseover', () => {
        left.setAttribute('src', './images/icon-previous-hover.svg');
    });
    left.addEventListener('mouseout', () => {
         left.setAttribute('src', './images/icon-previous.svg');
    })
    
}
arrowHover()



product.forEach(btn => {

    btn.addEventListener('click', (e) => {
        deleteActive()
        btn.classList.add('active');
        btn.parentElement.classList.add('border')
     
        if (e.target.classList.contains('preview-2')) {
          productDisplay.setAttribute('src', './images/image-product-2.jpg')
         
        } else if (e.target.classList.contains('preview-3')) {
        productDisplay.setAttribute('src', './images/image-product-3.jpg')
            
        } else if (e.target.classList.contains('preview-4')) {
            productDisplay.setAttribute('src', './images/image-product-4.jpg')
            
        } else if (e.target.classList.contains('preview-1')) {
         productDisplay.setAttribute('src', './images/image-product-1.jpg')
        } 
      
    })
})

right.addEventListener('click', () => {

    if (previewProduct.classList.contains('product__1')) {
         deletePreviewActive()
         previewProduct.setAttribute('src', './images/image-product-2.jpg')
         previewProduct.className = 'product__2'
         prev2.classList.add('active')
         prev2.parentElement.classList.add('border')
        
        
         
    } else if (previewProduct.classList.contains('product__2')) {
         deletePreviewActive()
         previewProduct.setAttribute('src', './images/image-product-3.jpg')
         previewProduct.className = 'product__3'
         prev3.classList.add('active')
         prev3.parentElement.classList.add('border')
            
    } else if (previewProduct.classList.contains('product__3')) {
         deletePreviewActive()
         previewProduct.setAttribute('src', './images/image-product-4.jpg')
         previewProduct.className = 'product__4'
         prev4.classList.add('active')
         prev4.parentElement.classList.add('border')
            
    } else if (previewProduct.classList.contains('product__4')) {
         deletePreviewActive()
         previewProduct.setAttribute('src', './images/image-product-1.jpg')
         previewProduct.className = 'product__1'
         prev1.classList.add('active')
         prev1.parentElement.classList.add('border')
        
        } 
})

left.addEventListener('click', () => {
    
    if (previewProduct.classList.contains('product__1')) {
         deletePreviewActive()
         previewProduct.setAttribute('src', './images/image-product-2.jpg')
         previewProduct.className = 'product__4'
         prev4.classList.add('active')
         prev4.parentElement.classList.add('border')
        
        
         
    } else if (previewProduct.classList.contains('product__4')) {
         deletePreviewActive()
         previewProduct.setAttribute('src', './images/image-product-3.jpg')
         previewProduct.className = 'product__3'
         prev3.classList.add('active')
         prev3.parentElement.classList.add('border')
            
    } else if (previewProduct.classList.contains('product__3')) {
         deletePreviewActive()
         previewProduct.setAttribute('src', './images/image-product-2.jpg')
         previewProduct.className = 'product__2'
         prev2.classList.add('active')
         prev2.parentElement.classList.add('border')
            
    } else if (previewProduct.classList.contains('product__2')) {
         deletePreviewActive()
         previewProduct.setAttribute('src', './images/image-product-1.jpg')
         previewProduct.className = 'product__1'
         prev1.classList.add('active')
         prev1.parentElement.classList.add('border')
        
        } 
})






next.addEventListener('click', () => {
    let increaseQ = Number(quantityNumber.innerText)
    increaseQ += 1
    quantityNumber.innerText = increaseQ
})

prev.addEventListener('click', () => {
    let decreaseQ = Number(quantityNumber.innerText)
    decreaseQ -= 1
    if (quantityNumber.innerText != '0') {
       quantityNumber.innerText = decreaseQ
    }
})

mSliderRight.addEventListener('click', () => {
    if (mobileSlide.classList.contains('slide__1')) {
        mobileSlide.setAttribute('src', './images/image-product-2.jpg')
        mobileSlide.className = 'slide__2'
     
    } else if (mobileSlide.classList.contains('slide__2')) {
        mobileSlide.setAttribute('src', './images/image-product-3.jpg')
        mobileSlide.className = 'slide__3'
     
    } else if (mobileSlide.classList.contains('slide__3')) {
         mobileSlide.setAttribute('src', './images/image-product-4.jpg')
        mobileSlide.className = 'slide__4'
       
    } else if (mobileSlide.classList.contains('slide__4')) {
        mobileSlide.setAttribute('src', './images/image-product-1.jpg')
        mobileSlide.className = 'slide__1'
     
    }
})

mSliderLeftt.addEventListener('click', () => {
     if (mobileSlide.classList.contains('slide__1')) {
        mobileSlide.setAttribute('src', './images/image-product-4.jpg')
        mobileSlide.className = 'slide__4'
     
    } else if (mobileSlide.classList.contains('slide__4')) {
        mobileSlide.setAttribute('src', './images/image-product-3.jpg')
        mobileSlide.className = 'slide__3'
     
    } else if (mobileSlide.classList.contains('slide__3')) {
         mobileSlide.setAttribute('src', './images/image-product-2.jpg')
        mobileSlide.className = 'slide__2'
       
    } else if (mobileSlide.classList.contains('slide__2')) {
        mobileSlide.setAttribute('src', './images/image-product-1.jpg')
        mobileSlide.className = 'slide__1'
     
    }
})