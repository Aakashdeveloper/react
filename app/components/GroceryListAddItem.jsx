var React = require('react');
var addons = require('react-addons');
var action = require('./../actions/GroceryItemActionCreater.jsx')

module.exports = React.createClass({
    getInitialState:function(){
      return {input:""};

    },
    handleInputName:function(e){
      this.setState({input: e.target.value});
    },
    addItem:function(e){
      e.preventDefault();
      //console.log("Adding items", this.state.input);
      action.add({
          name:this.state.input
      });

      this.setState({
         input:""
      })
    },
		render:function(){
			return(
				<div className="grocery-addItem">
					<form onSubmit={this.addItem}>
				
					 

					</form>
				</div>

			)
		}
});