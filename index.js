let obj = {};

let div = document.querySelector(".main-product-details");
// console.log("div", div)
let image = document.querySelector(".swiper-slide>img");
let h1 = document.querySelector(".main-product-details>h1");
let description = document.querySelector(".product-description>p>span");
let regularPriceBar = document.querySelector(
    "#AddToCartForm>div:nth-child(1) #ProductPrice"
);
let regularPriceBarCase = document.querySelector(
    "#AddToCartForm>div:nth-child(2) #ProductPrice"
);
// let regularPrice = document.getElementById("ProductPrice");
// console.log('regularPrice:', regularPrice.innerHTML.split("$")[1])

obj.title = h1.innerHTML;
obj.description = description.innerHTML;
let barPrice = (
    Number(regularPriceBar.innerHTML.split("$")[1]) * 82.62
).toFixed(2);
obj.bar = +barPrice;
let casePrice = (
    Number(regularPriceBarCase.innerHTML.split("$")[1]) * 82.62
).toFixed(2);
obj.caseBar = +casePrice;
obj.image = image.src;
obj.quantity = 100;
// console.log(obj)
addingData(obj);

async function addingData(obj) {
    let pushData = await fetch("http://localhost:3004/products", {
        method: "POST", // or 'PUT'
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
    });
}