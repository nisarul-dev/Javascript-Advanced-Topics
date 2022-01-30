// Steps:
// take order for customer 1
// processing order for customer 1
// order processed for customer 1
// completed order for customer 1

const takeOrder = (customer, callback) => {
    console.log(`take order for ${customer}`);
    callback(customer);
}

const processOrder = (customer, callback) => {
    console.log(`processing order for ${customer}`);

    setTimeout( () => {
        console.log(`order processed for ${customer}`);
        callback(customer);
    }, 3000);
};

const completeOrder = (customer) => {
    console.log(`completed order for ${customer}`);
}

takeOrder('customer 1', (customer) => {
    processOrder(customer, (customer) => {
        completeOrder(customer);
    });
});

console.log("Asyncronous JS");

/*
    take order for customer 1
    processing order for customer 1
    Asyncronous JS
    order processed for customer 1
    completed order for customer 1
*/
