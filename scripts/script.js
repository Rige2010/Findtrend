const button = document.querySelector(".price__toggle-box");
const textPrice1 = document.querySelector(".price__month");
const textPrice2 = document.querySelector(".price__year");
const togglePrice = document.querySelector(".price__toggle");


let totalPrice = document.querySelectorAll(".price__price");
let lengthPrice = document.querySelectorAll(".price__price-length");


button.addEventListener("click", () => {
    togglePrice.classList.toggle("price__toggle_active");
    textPrice1.classList.toggle("price__active");
    textPrice2.classList.toggle("price__active");
    if(lengthPrice[0].innerHTML === "/Month") {
        lengthPrice.forEach((el) => {
            el.innerHTML = "/Year";
        });
        totalPrice.forEach((el) => {
            el.innerHTML = el.innerHTML * 12 * 0.9;
        });
    } else {
        lengthPrice.forEach((el) => {
            el.innerHTML = "/Month";
        });
        totalPrice.forEach((el) => {
            el.innerHTML = el.innerHTML / 0.9 / 12;
        });
    }
});