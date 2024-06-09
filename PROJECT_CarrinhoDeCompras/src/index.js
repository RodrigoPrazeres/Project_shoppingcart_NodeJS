import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

const myCart = [];
const myWishList = [];

console.log("welcome to your cart!!");

//creating itens
const item1 = await createItem("silksong game", 30.00, 1);
const item2 = await createItem("silksong patches", 12.50, 3);
const item3 = await createItem("outerwilds game", 40, 1);

//adding items
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myWishList, item3);

//deleting itens
//await cartService.delteItem(myCart, item1.name);

await cartService.removeItem(myCart, item2);

//showing the cart and the value
await cartService.displayCart(myCart);
await cartService.calculateTotal(myCart);

