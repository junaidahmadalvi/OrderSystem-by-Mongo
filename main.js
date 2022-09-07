const { application } = require("express");
const express = require("express")
const app= express();
// const {dbCustomer,dbProduct,dbOrder}=require('./mongodb')
// var ObjectId= require("mongodb").ObjectId;


//---------------Controllers-----------------------

const customerController = require("./Controllers/customerController");
const productController = require("./Controllers/productController");
const orderController = require("./Controllers/orderController");


   


const port= 9000;

app.listen(port,()=>console.log(`Request is listening on ${port}` ))



//----------------------------------------------------------------------------

//              Customer CRUD
//----------------------------------------------------------------------------


app.get('/customers', customerController.getCustomer );
app.get('/customers/:id', customerController.getCustomerById)


//-----------Insert Data----------------------

app.use(express.json())
app.post('/addCustomers', customerController.addCustomer)

//-----------Update Data----------------------

// app.use(express.json())
app.put('/customer/update/:id', customerController.updateCustomer)

//----------Delete Records -----------------------

app.delete('/customer/delete/:id', customerController.deleteCustomer)





//----------------------------------------------------------------------------

//              Product CRUD
//----------------------------------------------------------------------------


//-----------------Get Data---------------

app.get('/products', productController.getProduct )

app.get('/products/:id', productController.getProductById )
// client.connect();

//-----------Insert Data----------------------


app.post('/addProducts', productController.addProduct)

//-----------Update Data----------------------


app.put('/product/update/:id', productController.updateProduct )

//----------Delete Records -----------------------

app.delete('/product/delete/:id', productController.deleteProduct )





//----------------------------------------------------------------------------

//             Order CRUD
//----------------------------------------------------------------------------


//-----------------Get Data---------------

app.get('/orders', orderController.getOrder )

app.get('/orders/:id',orderController.getOrderById)
// client.connect();

//-----------Insert Data----------------------


app.post('/addOrders', orderController.addOrder  )

//-----------Update Data----------------------


app.put('/order/update/:id', orderController.updateOrder)

//----------Delete Records -----------------------

app.delete('/order/delete/:id', orderController.deleteOrder )








//

// //----By using Promise--------------------

// dbConnection().then((resp)=>{
//     resp.find().toArray().then((data)=>console.log(data))
//     console.log()
// });


//--------------By Using async await------------------------------
// const getData= async ()=>{
// db = await dbConnection();
// var ObjectId= require("mongodb").ObjectId;
// let data= await db.find({ _id: ObjectId("630460bf3292177df715d928") }).toArray();
// console.log(data);
// }

// getData();

// //----for Insert Data
// const insertData= async ()=>
// {
//     db = await dbConnection();
//     let insertedData= await  db.insert(
//         [
//             {name: 'junaid', age: 20, gender: 'male'},
//             {name: 'Hasaan', age: 21, gender: 'male'},
//             {name: 'Abubakar', age: 22, gender: 'male'},
//             {name: 'Sabra', age: 19, gender: 'Female'},
//             {name: 'Fatima', age: 22, gender: 'Female'},
//         ]);

//             if (insertedData.acknowledged) {
//                 console.log("Data Inserted");
//             } else {
                
//             }
//             console.log(insertedData);
// }
// insertData();
// //----for Update Data
// // const updateData= async ()=>
// // {
// //     db = await dbConnection();

// //     // updateOne() ==> for update one(first one) record
// //     // update() ==> for update all(which matched) record
// //     let updateData= await  db.update(
        
// //         {name: 'Sabra'},{$set:{name:"Sabra Noor"}},
// //             // {name: 'Sabra'},{$set:{name:"Sabra Noor"}}
           
        
// //         );

// //             if (updateData.acknowledged) {
// //                 console.log("Data Updated");
// //             } else {
                
// //             }
// //             console.log(updateData);
// // }

// //     // updateData()



// //     // --------------for Delete Data----------------


// //     const deleteData= async ()=>
// // {
// //     db = await dbConnection();

    
// //     // deleteOne() ==> for delete one(first one) record
// //     // deleteMany() ==> for delete all(which matched) record

// //     let deleteData= await  db.deleteMany(
        
// //             {age: 20}
// //             // {name: 'junaid'},{$set:{name:"Junaid Ahmad"}}
        
// //             );

// //             if (deleteData.acknowledged) {
// //                 console.log("Data Deleted");
// //             } else {
                
// //             }
// //             console.log(deleteData);
// // }





// //     deleteData()
// // // console.log("function Called");