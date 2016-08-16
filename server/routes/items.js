module.exports = function(app){
	var items =[{
	name:"ice creams"
    },
     {
	name:"candy",
	purchased:true
    }];
    
    app.route('/api/items')
    .get(function(req,res){
    	res.send(items);

    })

}
