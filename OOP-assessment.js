class Product {
    constructor(sku, name, price) {
      this.sku = sku;
      this.name = name;
      this.price = price;
    }
  
    toString() {
      return JSON.stringify(this)
    }
  }
  
  class Cart {
    constructor() {
      this.products = [];
      this.totalValue = 0;
    }
  
    addProduct(product) {
      this.products.push(product)
      this.totalValue += product.price
      return "Product added"
    }
  
    removeProduct(sku) {
      // search for the product by sku
      const searchedFor = this.products.find(x => x.sku === sku);
      //if it exists, remove it from the array and total value
      if (searchedFor) {
        this.products = this.products.filter(x => x.sku !== sku)
        this.totalValue -= searchedFor.price;
        return "Product removed";
      } else {
        // if it doesnt, return error message
        return "Product not found";
      }
    }
  
    checkout() {
      const toCheckOut = this.products.map(x => x.name)
      const totalCheckOut = this.totalValue
      // reset values
      this.products = []
      this.totalValue = 0
      return `Products: ${toCheckOut}, Total Cart Value: $${totalCheckOut}`
    }
  }
  
  const hat = new Product('0101AB', 'hat', 15)
  console.log(hat.toString()) // {"sku":"0101AB","name":"hat","price":15}
  const mug = new Product('0102AB', 'mug', 5)
  const shirt = new Product('0103AB', 'shirt', 20)
  const shoes = new Product('0104AB', 'shoes', 35)
  
  const myCart = new Cart
  myCart.addProduct(hat)
  myCart.addProduct(mug)
  myCart.addProduct(shirt)
  myCart.addProduct(shoes)
  console.log(myCart) /*Cart {
    products: [ Product { sku: '0101AB', name: 'hat', price: 15 } ],
    totalValue: 15
  }
  */
  console.log(myCart.removeProduct('0101AC')) // Product not found
  console.log(myCart.removeProduct('0101AB')) // Product removed
  
  console.log(myCart) /* Cart {
    products: [
      Product { sku: '0102AB', name: 'mug', price: 5 },
      Product { sku: '0103AB', name: 'shirt', price: 20 },
      Product { sku: '0104AB', name: 'shoes', price: 35 }
    ],
    totalValue: 60
  }
  */
  
  console.log(myCart.checkout()) // Products: mug,shirt,shoes, Total Cart Value: $60
  console.log(myCart) // Cart { products: [], totalValue: 0 }