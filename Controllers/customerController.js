const {dbCustomer} = require('../mongodb')
var ObjectId= require("mongodb").ObjectId;


module.exports = {
    getCustomer: async (req,res)=>{

        db = await dbCustomer();
        let data= await db.find({}).toArray();
        
        // console.log(data);
        res.send(data)
    },
  
    
    getCustomerById: async (req,res)=>{

        const id= req.params.id;
        console.log(id);
        db = await dbCustomer();
        let data= await db.find({ _id: ObjectId(id) }).toArray();
        console.log(data);
        
        res.send(data)
    },


    addCustomer: async (req,res)=>{

        let obj = req.body    
        console.log(obj);
        db = await dbCustomer();
        let insertedData =db.insert(obj)
        
        res.send(insertedData)
    },

    updateCustomer:  async (req,res)=>{

        const id= req.params.id;
        console.log(id," ---ID--");
         let newData = req.body    
         console.log(newData," New Data");
        db = await dbCustomer();
        let updatedData =db.updateOne(
           {_id: ObjectId(id)},{$set: {Name: newData.Name,Email: newData.Email} }
        )
       
        res.send(updatedData)
    },



    deleteCustomer:  async (req,res)=>{

        const id= req.params.id;
        console.log(id,"ID");
        // let newData = req.body    
        // console.log(newData);
        db = await dbCustomer();
        let deletedData =db.deleteOne(
           {_id:  ObjectId(id)} 
        )
        
        res.send(deletedData)
    },



  };
  


