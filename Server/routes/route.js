var express=require('express');
var app = express(); 
const router=express.Router();
const Employee=require('../models/employee');

// Get reviews
router.get('/employee', function(req, res) {
 
    console.log("fetching details");

    // use mongoose to get all reviews in the database
    Employee.find(function(err, employee) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err)
        {
            res.send(err);
        }
        else
        {
            console.log("fetching one by one details");
            res.json(employee); // return all reviews in JSON format
        }     
    });
});

//retrieve one employee
router.get('/employee/:id', (req, res, next) => {
    console.log("fetching details by id");
    Employee.findOne({ _id: req.params.id }, function(err, employee) {
        if (err) {
            res.json(err);
        }
      else
      {
        res.json(employee);
      } 
    });
});




// create employee details and send back all details after creation
router.post('/employee', function(req, res) {

    console.log("creating employee deatils");

   
    let newEmployee=new Employee({
        name : req.body.name,
        department : req.body.department,
        date : req.body.date,
        amount: req.body.amount
    });
    newEmployee.save((err,employee)=>{
  if(err)
  {
    console.log("can not creating employee deatils one by one");
    res.json({msg:'Failed to add the employee details'});
  }
  else
  {
    console.log("creating employee deatils one by one");
    res.json({msg:'Employee details added successfully',data:employee});
  }
});
});


//delete the contact
router.delete('/employee/:id',(req,res,next)=>{
    console.log("Delete employees");
    Employee.deleteOne({_id:req.params.id},function(err,result)
    {
    if(err)
    {
    res.json(err);
    }
    else
    {
    console.log("Delete employees one by one");
    res.json(result);
    }
    });
    });

//update the contacts
router.put('/employee/:id',(req,res,next)=>{
    console.log("edit employees");
    Employee.findOneAndUpdate({_id:req.params.id},
    {
        $set:{
        name:req.body.name,
        department:req.body.department,
        date:req.body.date,
        amount: req.body.amount
    }
    },function (err,result)
    {
        if(err)
        {
            console.log("can not edit employees one by one");
            res.json(err);
        }
        else
        {
            console.log("Edit employees one by one");
            res.json(result);
          //res.json({msg:'contacts Updated successfully',data:result});
        }
    });
    });
    
    module.exports=router;