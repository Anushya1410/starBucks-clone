// login icon code
const formOpenBtn = document.querySelector("#form-open"),
home = document.querySelector(".home"),
formContainer = document.querySelector(".form_container"),
formCloseBtn = document.querySelector(".form_close"),
signupBtn = document.querySelector("#signup"),
loginBtn = document.querySelector("#loginup"),
pwShowHide = document.querySelectorAll(".fa-eye-slash");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

pwShowHide.forEach(icon => {
    icon.addEventListener("click",() =>{
        let getPwInput = icon.parentElement.querySelector("input");
        if (getPwInput.type === "password"){
          getPwInput.type = "text";
          icon.classList.replace("fa-eye-slash", "fa-eye");
        }else{
            getPwInput.type = "password";
            icon.classList.replace("fa-eye", "fa-eye-slash");
        }
    });
});

signupBtn.addEventListener("click", (e) =>{
   e.preventDefault();
   formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    formContainer.classList.remove("active");
 });

//  view more
 const toggleLink = document.getElementById('toggle-link');
 const productGrid = document.getElementById('product-grid');

 toggleLink.addEventListener('click', function() {
     if (productGrid.style.display === 'none' || productGrid.style.display === '') {
         productGrid.style.display = 'grid';
         toggleLink.textContent = 'View Less';
     } else {
         productGrid.style.display = 'none';
         toggleLink.textContent = 'View More';
     }
 });

// add items button code
function togglePopup() {
    var overlay = document.getElementById('overlay');
    overlay.style.display = overlay.style.display === 'block' ? 'none' : 'block';
}
function increaseQuantity() {
    var quantityElement = document.getElementById('quantity');
    var currentQuantity = parseInt(quantityElement.textContent);
    quantityElement.textContent = currentQuantity + 1;
}
function decreaseQuantity() {
    var quantityElement = document.getElementById('quantity');
    var currentQuantity = parseInt(quantityElement.textContent);
    if (currentQuantity > 1) {
        quantityElement.textContent = currentQuantity - 1;
    }
}
