const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btnpopup = document.querySelector('.btnlogin-popup');
registerlink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});

loginlink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});

btnpopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
});

function auth(){
    var email = documemt.getElementBytype("email").value;
    var password = documemt.getElementBytype("password").value;
    if(email=="admin@gmail.com" && password=="admin123"){
        window.location.assign("book.html");
        alert("login successfully");
    }
    else{
        alert("invalid information");
        return;
    }
}