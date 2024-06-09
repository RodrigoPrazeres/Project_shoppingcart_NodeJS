// o que o carrinnho deve fazer (adicionar, Remover, deletar, calcular total)

//add✅
async function addItem(userCart, item){
    userCart.push(item);
};

//calculate
async function calculateTotal(userCart){
    const result = userCart.reduce((total, item)=> total + item.subtotal(), 0);
    console.log("\nYour total cart is: ")
    console.log(`🛒 Total ${result}`);
};

//delet
async function delteItem(userCart, name){
    const index = userCart.findIndex((item) => item.name === name);

    if(index !== -1){
        userCart.splice(index, 1);
    }
};

//remove item
async function removeItem(userCart, item){
    //encontrar o indice do item
    const indexFound = userCart.findIndex((p) => p.name === item.name)

    if (indexFound == -1){
        console.log("item não encontrado")
        return;
    }

    // item >1 subtract | item = 1 delet
    if (userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1
        return;
    };

    if(userCart[indexFound].quantity == 1){
        userCart.splice(indexFound, 1);
        return;
    };
};

//Display itens
async function displayCart(userCart) {
    console.log("\nYour Cart List:");
    userCart.forEach((item, index) =>{
        console.log(`${index + 1}.${item.name} - R$ ${item.price} | ${item.quantity} | subtotal ${item.subtotal()}`);      
    });
}

export{
    addItem,
    calculateTotal,
    delteItem,
    removeItem,
    displayCart,
};