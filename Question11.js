const products = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 20 },
  { name: "Book", price: 50 }
];

const names = products.map(p => p.name);

names.forEach((n, i) => {
  const msg =
    products[i].price > 50
      ? `${n} is above $50`
      : `${n} is below $50`;
      
  console.log(msg);
});
