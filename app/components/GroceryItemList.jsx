var React = require('react');
var addons = require('react-addons');
var GroceryItem = require('./GroceryItem.jsx');
var GroceryListAddItem = require('./GroceryListAddItem.jsx');
module.exports = React.createClass({
	render:function(){
		return (
			<center>
			<div>
			<div  className="fixedheader">SlideShare    <b>Home</b>   <b>AboutUs</b>    <b>ContactUs</b></div>
				
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