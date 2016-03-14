"use strict";
var React = require('react');

var Modal = require('react-modal');
var StepActionCreators = require('../../actions/StepActionCreators');
var _ = require('lodash');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var modalStyle={
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(0, 0, 0, 0.60)',
    zIndex			      : 5
  },
  content : {
  	display					           : 'inline-block',
  	position                  : 'absolute',
    top                       : '50%',
    left                      : '50%',
    right                     : 'auto',
    bottom                    : 'auto',
    marginRight               : '-50%',
    zIndex					           : 10,
    border                     : '1px solid #ccc',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '8px',
    outline                    : 'none',
    WebkitBoxShadow: '0px 3px 13px 0px rgba(0,0,0,0.75)',
	WozBoxShadow: '0px 3px 13px 0px rgba(0,0,0,0.75)',
	boxShadow: '0px 3px 13px 0px rgba(0,0,0,0.75)'
  }
};

var closeSymbolStyle = {
	position: 'absolute',
	right: '0px',
	top: '0px',
	width: '21px',
	height: '21px'
};

var LoadFileModal = React.createClass({
	render: function(){
    return(
		<Modal
			isOpen={this.props.visible}
			closeTimeoutMS={1000}
			onRequestClose={function(){}}
			style={modalStyle}>
        <h3 style={{marginTop: 0}}>Loading...</h3>
        <img src="./img/toon-load.gif"></img>
	  </Modal>
	    );
		
	}
});

module.exports = LoadFileModal;