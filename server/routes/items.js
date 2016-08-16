module.exports = function(app){
	var items =[{
	name:"ice cream"
	src:"/img/1.jpg"
    },
     {
	name:"candy",
	src:"/img/2.jpg"
    }];
    
    app.route('/api/items')
    .get(function(req,res){
    	res.send(items);

    })

}
