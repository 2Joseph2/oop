// object class for the product
class product {
    constructor(id,name,price){
        this.id = id
        this.name =name
        this.price = price
    }
}

// object class for the shopping cart item
class ShoppingCartItem {
    constructor(product , quantity){
        this.product = product
        this.quantity = quantity
    }
    calculate(){
        return this.product.price * this.quantity
    }
}

// object class for the shopping cart
class ShoppingCart {
    constructor (){
        this.item = []
    }
    addItem(product, quantity){
        const existingItem =this.items.find(item => item.product.id === product.id)
        if (existingItem){
            existingItem.quantity+= quantity
        }else{
            this.items.push(new ShoppingCartItem(product, quantity))
        }
    }
    getTotal(){
        const total = this.item.reduce((prev,curent)=> prev.calculate + curent.calculate,0)
        return total
    }
    display(){
        if(this.item.length === 0){
            console.log('this cart is empty')
        }else{
            this.item.forEach(el=>{
                console.log(`Product: ${el.product.name}`)
            })
        }
    }
    remove(productId){
        this.item = this.item.filter( el =>{
            return el.product.id !== productId
        })
    }
}


//testing 

const product1 = new Product(1, 'Laptop', 1000)
const product2 = new Product(2, 'Mouse', 25)

const cart = new ShoppingCart()
cart.addItem(product1, 2)
cart.addItem(product2, 5)

console.log('Items in Cart:')
cart.displayItems()

console.log('Total Price:', cart.getTotal())

cart.removeItem(1)
console.log('\nItems in Cart after removing Laptop:')
cart.displayItems()

console.log('Total Price after removal:', cart.getTotal())