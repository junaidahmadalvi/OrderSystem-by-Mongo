const {MongoClient} = require("mongodb");
const url= 'mongodb+srv://admin:lion123@mycluster.9ec18q0.mongodb.net/test';
const client = new MongoClient(url);
const database = "orderSystem";

 async function dbCustomer()
{
    let result= await client.connect();
    let db = result.db(database);
    return db.collection("customer")

    
}


async function dbProduct()
{
    let result= await client.connect();
    let db = result.db(database);
    return db.collection("product")

    
}

async function dbOrder()
{
    let result= await client.connect();
    let db = result.db(database);
    return db.collection("order")

    
}


module.exports={dbCustomer,dbProduct,dbOrder};