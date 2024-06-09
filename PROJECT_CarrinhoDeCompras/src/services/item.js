//usecase itens

//create itens with subtotal
async function createItem(name, price, quantity) {
    return {
        name,
        price,
        quantity,
        subtotal() {
            return this.price * this.quantity;
        },
    }
};

export default createItem;