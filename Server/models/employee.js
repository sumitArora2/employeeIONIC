const mongoose=require('mongoose');
const EmployeeSchema=mongoose.Schema({
name:{
    type:String,
    required:false
},
department:{
type:String,
required:false
},
date:{
type:String,
required:true
},
amount:{
    type:Number,
    required:true
    }
});


const Employee = module.exports=mongoose.model('Employee',EmployeeSchema);


