
  const {dbOrder} = require('../mongodb')
var ObjectId= require("mongodb").ObjectId;


module.exports = {
    getOrder: async (req,res)=>{

        db = await dbOrder();
        let data= await db.find({}).toArray();
        
        // console.log(data);
        res.send(data)
    },
  
    
    getOrderById: async (req,res)=>{

        const id= req.params.id;
        console.log(id);
        db = await dbOrder();
        let data= await db.find({ _id: ObjectId(id) }).toArray();
        console.log(data);
        
        res.send(data)
    },


    addOrder: async (req,res)=>{

        let obj = req.body    
        console.log(obj);
        db = await dbOrder();
        let insertedData =db.insert(obj)
        
        res.send(insertedData)
    },

    updateOrder:  async (req,res)=>{

        const id= req.params.id;
        console.log(id," ---ID--");
         let newData = req.body    
         console.log(newData," New Data");
        db = await dbOrder();
        let updatedData =db.updateOne(
           {_id: ObjectId(id)},{$set: {CustomerId: newData.CustomerId,ProductId: newData.ProductId,TotalPrice: newData.TotalPrice} }
        )
       
        res.send(updatedData)
    },



    deleteOrder:  async (req,res)=>{

        const id= req.params.id;
        console.log(id,"ID");
        // let newData = req.body    
        // console.log(newData);
        db = await dbOrder();
        let deletedData =db.deleteOne(
           {_id:  ObjectId(id)} 
        )
        
        res.send(deletedData)
    },



  };
  


