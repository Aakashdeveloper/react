var React = require('react');
var addons = require('react-addons');
var ReactDOM = require('react-dom');
 console.log("hello from jsx");

 var GroceryItemList = require('./components/GroceryItemList.jsx');

 var groceryItemStore = require('./stores/GroceryItemStore.jsx');
 var initial = groceryItemStore.getItems();

 

groceryItemStore.onChange(function(items){
	initial = items;
	render();
})
render();



function render(){
       ReactDOM.render(<GroceryItemList items={initial}/>, app)
 };

 