var express=require('express');
var mongoose=require('mongoose');
var cors=require('cors');
var path=require('path');
var bodyparser=require('body-parser');

var app=express();

const route=require('./routes/route');

mongoose.connect('mongodb://localhost:27017/employee_det',{ useNewUrlParser: true });
mongoose.connection.on('connected',()=>{
console.log('connected to the database mongodb @27017');
});

mongoose.connection.on('error',(err)=>{
if(err)
{
    console.log('Error in creating the database' +err);
}
});

mongoose.connection.on('disconnected',()=>{
    console.log('Database disconnected');
    });
    mongoose.set('useCreateIndex', true);
const port=8080;

app.use(cors());

app.use(bodyparser.json());

app.use(express.static(path.join(__dirname,'public')));
app.use('/api',route);

app.get('/',(req,res)=>{
res.send('Welcome "USER" to your first Mean Application');
});


app.listen(port,()=>{
console.log('Server started at port'+port);
});