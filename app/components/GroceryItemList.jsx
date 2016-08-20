var React = require('react');
var addons = require('react-addons');
var GroceryItem = require('./GroceryItem.jsx');
var GroceryListAddItem = require('./GroceryListAddItem.jsx');
module.exports = React.createClass({
	render:function(){
		return (
			<center>
			<div>
				<h1>Today’s Top SlideShares</h1>
				<center>
				<div >
					 {
                       this.props.items.map(function(item,index ){
                       	 return(
                       	 	<GroceryItem item={item} key={"item"+index}/>

                       	 	)
                       })
					 }
				</div>
				</center>
				<GroceryListAddItem />
			</div>
			</center>
		)
	}
})