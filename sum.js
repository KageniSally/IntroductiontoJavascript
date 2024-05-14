let items = [{ price: 10.99 },
{ price: 6.99 },
{ price: 15.99 },
{ price: 19.99 }
]
let totalPriceForItems=0

// console.log(items[0].price)
for (let p of items) {
    totalPriceForItems=totalPriceForItems+p.price
}

console.log(totalPriceForItems)
