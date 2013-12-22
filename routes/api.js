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