const Cart = function (goods = [], totalPrice = 0, count = 0) {
    this.goods = goods;
    this.totalPrice = totalPrice;
    this.count = count;
};


Cart.prototype.calculateGoodsPrice = function (price, countOfProduct) {
    return this.totalPrice = Number(this.totalPrice) + Number(price) * Number(countOfProduct);
};

Cart.prototype.increaseCount = function (countOfProduct) {
    this.count += countOfProduct;
};

Cart.prototype.addGoods = function ({name, price, countOfProduct, ...args}) {
    this.goods.push({name, price, countOfProduct, ...args});
    this.increaseCount(countOfProduct);
    this.calculateGoodsPrice(price, countOfProduct);
};

Cart.prototype.clear = function () {
    this.goods = [];
    this.totalPrice = 0;
    this.count = 0;
};

Cart.prototype.print = function () {
    console.log(`${JSON.stringify(this.goods )} \n  Общая стоимось корзины ${this.totalPrice}`);
}



const cart = new Cart();
console.log(cart, ' cart')

cart.print();


const Good = function (name, price, countOfProduct) {
    this.name = name;
    this.price = price;
    this.countOfProduct = countOfProduct;
}

const FoodGoods = function (name, price, countOfProduct, calories) {
    Good.call(this, name, price, countOfProduct);
    this.calories = calories;
}

const ClothingGoods = function (name, price, countOfProduct, material) {
    Good.call(this, name, price, countOfProduct);
    this.material = material;
}


const TechnicsGoods = function (name, price, countOfProduct, technics) {
    Good.call(this, name, price, countOfProduct);
    this.technics = technics;
}


Object.setPrototypeOf(FoodGoods.prototype, Good.prototype);
Object.setPrototypeOf(ClothingGoods.prototype, Good.prototype);
Object.setPrototypeOf(TechnicsGoods.prototype, Good.prototype);


const phone = new TechnicsGoods('Samsung', 11500, 4, 'gadget');
const computer = new Good('Acer', 65000, 13);
const table = new ClothingGoods('Компьютерный стол', 24000, 5, 'древесина');
const cannedFood = new FoodGoods('Рыба', 750, 200, 109);

cart.addGoods(phone);
cart.addGoods(computer);
cart.addGoods(table);
cart.addGoods(cannedFood);

cart.print();
