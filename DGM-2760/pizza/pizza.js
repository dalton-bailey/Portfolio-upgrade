let message 

const pizza = {
    crust: 'thin',
    size: 'small',
    topping: 'pepperoni',
    buildPizza: function () {
        console.log('buildPizza method has been called')
        message = `Baking a ${pizza.size} pizza on a ${pizza.crust} crust with ${pizza.topping} and cheese just for you.`
        document.querySelector('#feedback').textContent = message
    },

    shoppingList: () => {
        let flour = 1
        if (pizza.crust === 'thick') flour *= 2
        // do the same thing for large property
        if (pizza.size === 'large') flour *= 3
        message = `You will need to purchase ${flour} cups of flour and 1 lb of ${pizza.topping}.`
        document.querySelector('#feedback').textContent = message
    }
}

document.querySelector('#thin').addEventListener('click', () => pizza.crust = 'thin')
document.querySelector('#thick').addEventListener('click', () => pizza.crust = 'thick')

// same thing for toppings and size
document.querySelector('#sausage').addEventListener('click', () => pizza.topping = 'sausage')
document.querySelector('#pepperoni').addEventListener('click', () => pizza.topping = 'pepperoni')


document.querySelector('#small').addEventListener('click', () => pizza.size = 'small')
document.querySelector('#large').addEventListener('click', () => pizza.size = 'large')


let sometingBUttn = document.querySelector('#build').addEventListener('click', pizza.buildPizza)
// hook up the shopping list method call here
document.querySelector('#shopping').addEventListener('click', pizza.shoppingList)