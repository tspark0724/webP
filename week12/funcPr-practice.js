console.log(`1. 쇼핑 카트의 총 금액 계산하기`);

const cart = [
    { item: "노트북", price: 1200000, quantity: 1 }, 
    { item: "마우스", price: 35000, quantity: 2 }, 
    { item: "키보드", price: 89000, quantity: 1 } 
   ];

let totalPrice = 0;
for (let i=0; i<cart.length; i++) {
    totalPrice += cart[i].price * cart[i].quantity;
}

console.log(`TotalPrice : ${totalPrice}` );


totalPrice = 0;
cart.forEach (item => {
    totalPrice += item.price * item.quantity;
});

console.log(`TotalPrice : ${totalPrice}` );


totalPrice = cart.reduce((sum, goods) => sum + goods.price * goods.quantity, 0);
console.log(`TotalPrice : ${totalPrice}`);


const itemTotals = cart.map(goods => (
    { item: goods.item, total: goods.price * goods.quantity }
    ));

console.log('제품별 금액: ' , itemTotals);

console.log(`2. 이름 목록 변환하기`);
const names = ['alice', 'bob', 'charlie'];

const uppercasedNames = names.map(
    name => name.toUpperCase()
);

console.log(`uppercasedNames = , ${uppercasedNames}`);

const capitalStartnames = names.map(
    name => name.charAt(0).toUpperCase() + name.slice(1)    
);

console.log(`capitalStartnames = , ${capitalStartnames}`);