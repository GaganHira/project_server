var express = require('express');  //used for routing
var app = express();

var bodyparser = require('body-parser');

app.use (bodyparser.json());


app.use(express.static(__dirname + '/www'));

app.listen(3000,'127.0.0.1', function(){
    var d = new Date();
    var n = d.getHours();
    var m = d.getMinutes();
    console.log('server has been started at : '+ n + ':' + m);
});

app.get('/',function(req,res){

    res.sendFile(__dirname + '/www/form.html');
});

// route for credential comparison
app.post('/api/login',function(req,res){

    if (!req.body) {
        return res.sendstatus(400)
    }    


    var customer ={};
    customer.email =req.body.email;
    customer.upwd = req.body.upwd;
    if (req.body.email == "abc@com.au" && req.body.upwd =="123"){
        customer.valid = true;
    }else{
        customer.valid = false;
    }
    res.send(customer);

});