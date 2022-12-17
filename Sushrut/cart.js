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
full_login_page.style.display = 'none';
let login_page = document.getElementById('login_page');
let loginBtn = document.getElementById('loginBtn');
loginBtn.addEventListener('click',()=>{
    if (full_login_page.style.display == 'none'){
        full_login_page.style.display = 'block'
    } 
    if (full_login_page.style.display == 'block'){
        let closeBtn = document.getElementById('closeBtn');
        closeBtn.addEventListener('click',()=>{
            full_login_page.style.display = 'none';
        })
    }
})