var dispatcher = require('./../dispatcher.js');

function GroceryItemStore(){
   //var items = [];

   var items =[{
	name:"ice cream"
    },
     {
	name:"candy",
	purchased:true
    }];

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

       var split = event.type.split(":");
       if(split[0] === 'grocery-Item'){
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
