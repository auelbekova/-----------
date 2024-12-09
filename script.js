//1tapsyrma
const eShop = {
    name: "T-short store",
    phoneNumber: 87083033221,
    produts: [
        {
            produtsName: "Японский T-shirt",
            category: "Clathes",
            price: 8000,
            stock: 5000,
        },
        {
            produtsName: "Қалың T-shirt",
            category: "Clathes",
            price: 10.000,
            stock: 3000,
        },

        {
            produtsName: "Корейский T-shirt",
            category: "Clathes",
            price: 7000,
            stock: 5000,
        },
        {
            produtsName: "Китайский T-shirt",
            category: "Clathes",
            price: 5000,
            stock: 7000,
        }

    ]

}
console.log(eShop)


//4tapsyrma
function listProductNames(){
    const products=("Product 1","Product 2","Product 3");
    products.array.forEach(products => {
        alert(products)
        
    });
}

//5tapsyrma
let products = [];
    
    function addProduct() {
        let name = prompt("Өнімнің атауын енгізіңіз:");
        let price = parseFloat(prompt("Өнімнің бағасын енгізіңіз :"));
        let quantity = parseInt(prompt("Өнімнің санын енгізіңіз (сандармен):"));
        let category = prompt("Өнімнің категориясын енгізіңіз:");
        
        if (!name == isNaN (price), isNaN(quantity) || !category) {
            alert("Барлық деректерді дұрыс енгізіңіз!");
            return;
        }
        
        let product = {
            name: name,
            price: price,
            quantity: quantity,
            category: category
        };
        
        products.push(product);
        
        alert("Өнім сәтті қосылды!");
        console.log("Қазіргі өнімдер:", products);
    }

addProduct();

//6tapsyrma

function products() {
    let newProducts = filteredProducts.map((products) => ({
        name: products.name,
        price: products.price * 0.45,
    })); // 

    return newProducts;
}

console.log(products());
