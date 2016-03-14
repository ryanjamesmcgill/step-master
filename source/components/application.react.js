var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var Stepmaster = require('./stepmaster/stepmaster.react');
var LoadingModal = require('./stepmaster/loadingmodal.react');
var StepStore = require('../stores/StepStore');


var navStyle={
	backgroundColor: '#292929',
    color: '#E9E9E9',
    borderColor: '#9A9A9A',
    borderBottomWidth: 1,
    zIndex: 1
	
};
var footerStyle = {
    height: 30,
    paddingTop: 10,
    margin: 'auto',
    color: '#777',
    fontSize: 12,
    fontStyle: 'italic'
};
var containerStyle = {
    backgroundColor: '#FFFFFF',
    paddingTop: 25,
    paddingBottom: 10,
    marginBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 20,
    boxShadow: '0px 0px 1px 0px rgba(0,0,0,0.55)'
};
    
var Application = React.createClass({
	getInitialState: function(){
		return {
			loadingModalVisible: StepStore.getLoadStatus(),
			containerWidth: 970
		};
	},
	componentDidMount: function(){
		window.addEventListener('resize', this._onResize);
		StepStore.addChangeListener(this._onStepStoreChange);
		
		var width = this.refs.container.clientWidth;
		this.setState({
			containerWidth: width
		});
	},
	componentWillUnmount: function() {
		window.removeEventListener('resize', this._onResize);
		StepStore.removeChangeListener(this._onStepStoreChange);
	},
	_onResize: function(e) {
		var width = this.refs.container.clientWidth;
		this.setState({
			containerWidth: width
		});
	},
	_onStepStoreChange: function(){
		this.setState({
			loadingModalVisible: StepStore.getLoadStatus()
		});
	},
	_getWidth: function(){
		console.log('get width');
		var width;
		if(this.refs.container){
			width = this.refs.container.clientWidth - 50;
		} else {
			width = 500;
		}
		return width;
	},
	render: function(){
		return ( 
		<div>
			<nav className="navbar navbar-inverse navbar-static-top" 
				role="navigation"
				style={navStyle}>
				<div className="container">
			        <div className="col-md-12">
			        	<h1 key="wg">Step-Master</h1>
			        </div>
			    </div>
			</nav>
			<div style={{paddingLeft: 10, paddingRight: 10}}>
			<div className="container" style={containerStyle} ref="container">
				<Stepmaster
					stepmasterIsVisible={this.state.stepmasterIsVisible}
					onStepmasterClick={this._onStepmasterClick} 
					width={this._getWidth()}
					height={800}
					addAllThreshold={20}/>
			<div id="footer" style={footerStyle}>
		      		<p className="text-center">created by Ryan McGill - r.mcgill@samsung.com</p>
		    </div>
			</div>
			</div>
			<LoadingModal 
				visible = {this.state.loadingModalVisible} />
		</div>
		);
	}
});

module.exports = Application;

