const {dbProduct} = require('../mongodb')
var ObjectId= require("mongodb").ObjectId;


module.exports = {
    getProduct: async (req,res)=>{

        db = await dbProduct();
        let data= await db.find({}).toArray();
        
        // console.log(data);
        res.send(data)
    },
  
    
    getProductById: async (req,res)=>{

        const id= req.params.id;
        console.log(id);
        db = await dbProduct();
        let data= await db.find({ _id: ObjectId(id) }).toArray();
        console.log(data);
        
        res.send(data)
    },


    addProduct: async (req,res)=>{

        let obj = req.body    
        console.log(obj);
        db = await dbProduct();
        let insertedData =db.insert(obj)
        
        res.send(insertedData)
    },

    updateProduct:  async (req,res)=>{

        const id= req.params.id;
        console.log(id," ---ID--");
         let newData = req.body    
         console.log(newData," New Data");
        db = await dbProduct();
        let updatedData =db.updateOne(
           {_id: ObjectId(id)},{$set: {Name: newData.Name,Price: newData.Price,Quantity: newData.Quantity} }
        )
       
        res.send(updatedData)
    },



    deleteProduct:  async (req,res)=>{

        const id= req.params.id;
        console.log(id,"ID");
        // let newData = req.body    
        // console.log(newData);
        db = await dbProduct();
        let deletedData =db.deleteOne(
           {_id:  ObjectId(id)} 
        )
        
        res.send(deletedData)
    },



  };
  


