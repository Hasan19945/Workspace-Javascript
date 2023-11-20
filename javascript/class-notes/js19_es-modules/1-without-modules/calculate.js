console.log("CALCULATE.JS")

const calculatePrice = (products) => {
  return products.reduce((acc, product) => acc + product.price, 0)
}

// const users = ["ALi", "Veli"]
