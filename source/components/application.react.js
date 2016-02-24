var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var Stepmaster = require('./stepmaster/stepmaster.react');
var WorklistTable = require('./worklisttable/worklisttable.react');
var WorklistForm = require('./worklistform/worklistform.react');
var CustomStepsModal = require('./worklistform/customstepsmodal.react');
var LoadfileModal = require('./worklistform/loadfilemodal.react');

var navStyle={
	backgroundColor: '#292929',
    color: '#E9E9E9',
    borderColor: '#9A9A9A',
    borderBottomWidth: 1,
    zIndex: 1
	
};
var containerStyle = {
    backgroundColor: '#FFFFFF',
    paddingTop: 10,
    marginBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 20,
    boxShadow: '0px 0px 1px 0px rgba(0,0,0,0.55)'
};
    
var Application = React.createClass({
	getDefaultProps: function(){
		return ({
			worklistTableHeight: 600
		});
	},
	getInitialState: function(){
		return {
			stepmasterIsVisible: false,
			loadfileIsVisible: false,
			containerWidth: 970
		};
	},
	componentDidMount: function(){
		window.addEventListener('resize', this._onResize);
		
		var width = this.refs.container.clientWidth;
		this.setState({
			containerWidth: width
		});
	},
	componentWillUnmount: function() {
		window.removeEventListener('resize', this._onResize);
	},
	_onResize: function(e) {
		var width = this.refs.container.clientWidth;
		this.setState({
			containerWidth: width
		});
	},
	_onStepmasterClick: function(e){
		this.setState({
			stepmasterIsVisible: !(this.state.stepmasterIsVisible)
		});
	},
	_onLoadfileClick: function(e){
		this.setState({
			loadfileIsVisible: !(this.state.loadfileIsVisible)
		});	
	},
	render: function(){
		return ( 
		<div>
			<nav className="navbar navbar-inverse navbar-static-top" 
				role="navigation"
				style={navStyle}>
				<div className="container">
			        <div className="col-md-12">
			        	<h1 key="wg">Worklist-Generator</h1>
			        </div>
			       
			    </div>
			</nav>
			<div style={{paddingLeft: 10, paddingRight: 10}}>
			<div className="container" style={containerStyle} ref="container">
				<WorklistForm
					onStepmasterClick={this._onStepmasterClick}
					onLoadfileClick={this._onLoadfileClick}/>
				<WorklistTable
					onStepmasterClick={this._onStepmasterClick}
					width={this.state.containerWidth-(containerStyle.paddingRight+containerStyle.paddingLeft)}
					height={this.props.worklistTableHeight}/>
				<Stepmaster
					stepmasterIsVisible={this.state.stepmasterIsVisible}
					onStepmasterClick={this._onStepmasterClick} 
					width={Math.min(window.innerWidth-200,960)}
					height={window.innerHeight - 200}
					addAllThreshold={20}/>
				<LoadfileModal
					loadfileIsVisible={this.state.loadfileIsVisible}
					onLoadfileClick={this._onLoadfileClick} />
			</div>
			</div>
			
			<span //These elements are here just to load the glyphicon for quick access later
				style={{display: 'none'}}
                className="glyphicon glyphicon-minus-sign"></span>
            <span
				style={{display: 'none'}}
                className="glyphicon glyphicon-plus-sign"></span>
		</div>
		);
	}
});

module.exports = Application;

