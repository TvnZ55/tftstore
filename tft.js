const product = [
    {
        id: 0,
        image: 'image/ashe.jpg',
        title: 'Chibi Ashe',
        price: 350,
    },
    {
        id: 1,
        image: 'image/shisa.png',
        title: 'Shisa',
        price: 400,
    },
    {
        id: 2,
        image: 'image/yasuo.jpg',
        title: 'Dragonmancer Yasuo',
        price: 300,
    },
    {
        id: 3,
        image: 'image/vi.jpg',
        title: 'Vi',
        price: 400,
    },
    {
        id: 4,
        image: 'image/pengu.jpg',
        title: 'Pengu',
        price: 600,
    },
    {
        id: 5,
        image: 'image/ekko.jpg',
        title: 'Ekko',
        price: 450,
    }
];

const categories = [...new Set(product.map((item) => item))];
let i = 0;

document.getElementById('root').innerHTML = categories.map((item) => {
    const { image, title, price } = item;
    return (
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2>Php ${price}.00</h2>` +
        "<button onclick='addtocart(" + (i++) + ")'>Add to cart</button>" +
        `</div>
        </div>`
    );
}).join('');

var cart = [];

function addtocart(a) {
    cart.push({ ...categories[a] });
    displaycart();
}

function delElement(a) {
    cart.splice(a, 1);
    displaycart();
}

function displaycart() {
    let j = 0, total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "Php " + 0 + ".00";
    }
    else {
        document.getElementById("cartItem").innerHTML = cart.map((items) => {
            const { image, title, price } = items;
            total = total + price;
            document.getElementById("total").innerHTML = "Php " + total + ".00";
            return (
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 18px;'>Php ${price}.00</h2>` +
                "<i class='fa-solid fa-trash' onclick='delElement(" + (j++) + ")'></i></div>"
            );
        }).join('');
    }
}
