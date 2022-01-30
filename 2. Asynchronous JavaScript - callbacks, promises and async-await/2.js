// Steps:
// take order for customer 1
// processing order for customer 1
// order processed for customer 1
// completed order for customer 1

const processOrder = () => {
    console.log(`processing order for customer 1`);

    setTimeout( () => { // Asyncronous Function
        console.log(`order processed for customer 1`);
    }, 3000);

};

console.log(`take order for customer 1`);
processOrder();
console.log(`completed order for customer 1`);

/*
    take order for customer 1
    processing order for customer 1
    completed order for customer 1
    order processed for customer 1
*/
