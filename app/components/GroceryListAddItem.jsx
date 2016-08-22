var React = require('react');
var addons = require('react-addons');
var action = require('./../actions/GroceryItemActionCreater.jsx');
var $ = require('jquery');
var router = require('react-router');



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
    
    componentDidMount: function() {
      var self = this;
      self.serverRequest = $.get('http://ec2-54-187-141-150.us-west-2.compute.amazonaws.com:7000/api/v1/doc_list').then(function (data) {
        self.data = data.data;
        
        self.setState({
          title0:self.data[0].title,
          text0: self.data[0].text,
          view0:self.data[0].view,
          title1:self.data[1].title,
          text1:self.data[1].text,
          view1:self.data[1].view,

        });
      });
    },
   

    handleClick:function(e) {
    e.preventDefault();

    this.context.router.transitionTo(' http://www.slideshare.net/ElodieAscenci/do-you-struggle-with-employee-recognition');
  },
  contextTypes: {
    router: React.PropTypes.func.isRequired
  },
    render:function(){
			return  <center> <div className="outerdiv" >
      <br/><br/>
                <h1> Today top slide share </h1>
                <div className="one"> <a href="http://www.slideshare.net/ElodieAscenci/do-you-struggle-with-employee-recognition"><img src="http://aakashhanda.me/slide1.jpg"></img></a>
        <button onClick={this.handleClick}></button><br/><b>{this.state.title0}</b><p>{this.state.text0}</p><span>{this.state.view0} </span></div>
                <div className="two"><img src="http://aakashhanda.me/slide2.jpg"></img><b>{this.state.title1}</b><p>{this.state.text1}</p><span>{this.state.view1} </span></div>
                <div className="three"><img src="http://aakashhanda.me/slide3.jpg"></img><b>{this.state.title0}</b><p>{this.state.text0}</p><span>{this.state.view0} </span></div>
               
            </div> </center>; 



		}
});




 