var dispatcher = require('./../dispatcher.js');
var helper = require('./../helpers/RestHelper.js')

function GroceryItemStore(){
  var items = [];

   
   helper.get("api/items")
   .then(function(data){
        items=data;
        triggerlisteners();
   })


   var listeners = [];

   function getItems(){
      return items;
   }
   
   function addGroceryItem(item){

      items.push(item);
      triggerlisteners()
   }
   function onChange(listener){
      listeners.push(listener);
   }

   function triggerlisteners(){
      listeners.forEach(function(listener){
         listener(items)
      })
   };

   dispatcher.register(function(event){

       var split = event.type.split(':');
       if(split[0] === 'grocery-item'){
         switch(split[1]){
            case "add":
                  addGroceryItem(event.payload);
                  break;

         }
       }
   });

      return{
         getItems:getItems,
         onChange:onChange
      }
	
}

module.exports = new GroceryItemStore();
