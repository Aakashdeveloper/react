module.exports = function(app){
    var items =[{
    name:"Tommaso Di Bartolo",
    sources:"1.jpg"
    },
     {
    name:"Donna Moritz",
     sources:"2.jpg"
   
    },
     {
    name:"PSFK",
     sources:"2.jpg"
   
    },
     {
    name:"Ethos3",
     sources:"2.jpg"
   
    },
    {
    name:"Chris Lema",
     sources:"2.jpg"
   
    }];
    
    app.route('/api/items')
    .get(function(req,res){
        res.send(items);

    })

}
