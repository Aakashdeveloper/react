var React = require('react');
var addons = require('react-addons');
var ReactDOM = require('react-dom');
 console.log("hello from jsx");

 var GroceryItemList = require('./components/GroceryItemList.jsx');

var initial =[{
	name:"ice cream"
},
{
	name:"candy",
	purchased:true
}]
 ReactDOM.render(<GroceryItemList items={initial}/>, app);