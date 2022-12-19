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

let medicinesWithAddBtn = document.getElementById('Medicines_with_add_Btn');

fetch(`https://639efddf5eb8889197f1bb36.mockapi.io/mediPro?page=1&limit=10`)
.then((e)=>{
    return e.json()
}).then((actualdata)=>{
    display(actualdata)
}).catch((error)=>{
    console.log(error)
})

function display(actualdata){
    actualdata.forEach((element) => {
        let div = document.createElement('div');

        let image = document.createElement('img');
        image.setAttribute('class', 'img_4_addBtn')
        image.setAttribute('src', element.image);

        let name = document.createElement('p')
        name.innerText = element.name;
        name.setAttribute('class', 'launch_name_p')

        let description = document.createElement('p')
        description.innerText = element.description

        let price = document.createElement('h4')
        price.innerText = 'MRP ₹'+element.price+'.00'

        let addCartBtn = document.createElement('button')
        addCartBtn.innerText = 'Add to Cart';
        addCartBtn.addEventListener('click', ()=>{
            let cart = JSON.parse(localStorage.getItem('cartProduct'))||[];
            let flag = true;
            for (let i=0;i<cart.length;i++){
                if (cart[i].id===element.id){
                    flag = false;
                }
            }
            if (flag === true){
                cart.push(element)
                localStorage.setItem('cartProduct', JSON.stringify(cart))
                addCartBtn.innerText = 'Go To Cart';
            }
            if (addCartBtn.innerText == 'Go To Cart'){
                addCartBtn.addEventListener('click',()=>{
                    window.location.href = "cart.html";
                })
            }
        })
        div.append(image, name, price, addCartBtn)
        medicinesWithAddBtn.append(div)
    });
}