var React = require('react');
var addons = require('react-addons');
module.exports = React.createClass({
	render:function(){
		return(
			<center>
			<div className="strikethrough">
			   <img  src="http://aakashhanda.me/slide1.jpg" />
			  <h4 >{this.props.item.name}</h4>
			 
			</div>
			</center>

		)
	}
})
