let healthList = document.getElementById('health_list');
healthList.style.display = 'none';
let healthbtn = document.getElementById('health_btn');
healthbtn.addEventListener('click',()=>{
    if (healthList.style.display == 'none'){
        healthList.style.display = 'block'
    }
    else{
        healthList.style.display = 'none'
    }
})

let full_login_page = document.getElementById('full_login_page')
let login_page = document.getElementById('login_page');
let loginBtn = document.getElementById('loginBtn');
loginBtn.addEventListener('click',()=>{
    full_login_page.style.width = '100%'
    if (full_login_page.style.width == '100%'){
        let closeBtn = document.getElementById('closeBtn');
        closeBtn.addEventListener('click',()=>{
            full_login_page.style.width = '0%';
        })
    }
})

let addedProducts = JSON.parse(localStorage.getItem('cartProduct'))||[]
// console.log(addedProducts)

let added_item_display = document.getElementById('added_item_display');

let count = document.getElementById('count1');
count.innerText = addedProducts.length

let cartTotal = document.getElementById('cart_total')
cartTotal.style.fontSize = '23px'
cartTotal.style.fontWeight = '700'
let sum = 0;
for (let i = 0; i <= addedProducts.length - 1; i++) {
    sum += addedProducts[i].price
  }
  cartTotal.textContent = sum+'.00';

function display(addedProducts){
    added_item_display.innerHTML = null
    addedProducts.forEach((element,index) => {
        let div = document.createElement('div');
        div.setAttribute('id', 'divv')
        div.style.display = 'flex';
        div.style.justifyContent = 'space'

        let image = document.createElement('img');
        image.setAttribute('class', 'img_4_addBtn')
        image.setAttribute('src', element.image);

        let div2 = document.createElement('div')

        let name = document.createElement('p')
        name.innerText = element.name;
        name.style.fontSize = '17px'
        name.style.fontWeight = '700'
        name.style.color = 'rgb(69, 69, 69)'
        name.setAttribute('class', 'launch_name_p')

        let description = document.createElement('p')
        description.innerText = element.description
        description.style.color = 'grey'
        description.setAttribute('id', 'descrip')

        let price = document.createElement('h4')
        price.innerText = 'MRP ₹'+element.price+'.00'

        let div3 = document.createElement('div')

        let deletBtn = document.createElement('button');
        deletBtn.innerText = 'Delete';
        deletBtn.addEventListener('click',()=>{
            sum = sum-element.price;
            cartTotal.textContent = sum+'.00'
            addedProducts.splice(index,1)
            display(addedProducts)
            localStorage.setItem('cartProduct', JSON.stringify(addedProducts))
            count.innerText = addedProducts.length;
        })

        div2.append( name, description, price)
        div3.append(deletBtn)
        div.append(image, div2, div3)
        added_item_display.append(div)
    });
}
display(addedProducts)