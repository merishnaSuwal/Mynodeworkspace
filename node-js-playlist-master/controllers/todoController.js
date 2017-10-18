var bodyParser= require('body-parser');
var mongoose= require('mongoose');

//connect to the database
mongoose.connect('mongodb://merishna97:calculus22@ds123695.mlab.com:23695/todo');

//Create a schema-this is like a blueprint
var todoSchema=new mongoose.Schema({
  item:String
});
var Todo= mongoose.mode1('Todo', todoSchema);
var itemOne= Todo({item:'buy flowers'}).save(function(err){
  if(err) throw err;
  console.log('item saved');
});


//var data =[{item:'get milk'},{item:'walk dog'}, {item:'kick some coding ass'}];
var urlencodedParser= bodyParseer.urlencoded({extended: false});
module.exports=function(app){
  app.get('/todo'),function(req,res){
    //get data frommongodb and pass it to view
    Todo.find({}, function(err, data){
      if(err) throw err;
    res.render('todo',{todos:data});
    });
  });

  app.post('/todo'),urlencodedParser ,function(req,res){
    //get data from the view and ass it to mongodb
    var newTodo= Todo(req.body).save(function(err,data){
      if(err) throw err;
      res.json(data);
    });
  });
  app.delete('/todo/:item',function(req,res){
    //delete the requested item from mongodb
    todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err,data){
      if(err) throw err;
      res.json(data);
      });

    });


}
