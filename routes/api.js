exports.time= function(req, res){
  var obj= { "now": new Date().toISOString()};
  res.send(obj);
};
var count=0;
exports.info= function(req, res){
	count++;
  var obj= {"server name":"CHUN",
   "now": new Date().toISOString(),
"api run times":count};
  res.send(obj);
};

var person=[];

exports.create= function(req, res){
var data={
	"name":req.query.name,
"nickname":req.params.nickname,

"tel":req.query.tel
}
	console.log(">>>>>>>create");
	console.log(req.query.tel);
	person.push(data);
	res.end();
};

exports.read= function(req, res){
	console.log(">>>>>>>read");
	
	res.send(person);
};
exports.update= function(req, res){

	console.log(">>>>>>>update");
	console.log(req.query.tel);
	var a=req.params.nickname;
person.forEach(function(etc){
if(etc.nickname === a)
{
	etc.name=req.query.name;
etc.tel=req.query.tel;
}

});


		
	res.end();
};
exports.delete= function(req, res){
	console.log(">>>>>>>delete");
	res.end();
};