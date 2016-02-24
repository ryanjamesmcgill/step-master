"use strict";
var React = require('react');
var Modal = require('react-modal');


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
    width                     : 400,
    marginRight               : '-50%',
    transform                 : 'translate(-50%, -50%)',
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

var CustomStepsModal = React.createClass({
	render: function(){

		return(
		  <Modal
				isOpen={this.props.loadfileIsVisible}
				onRequestClose={this.props.onLoadfileClick}
				style={modalStyle}>
				<span 	className="close"
					style={closeSymbolStyle}
					onClick={this.props.onLoadfileClick}>&times;</span>
        <h3 style={{marginTop: 0}}>Custom Steps</h3>
        <p>
        Want your own set of steps to be avaialbe in the 'Load' dropdown?
        Send me an email with the list of steps and I'll make it happen!
        </p>
        <p>Ryan McGill</p>
        <p>email: <a target="_blank" 
                    href="http://w2.samsung.net/flex/mail/Ml_WriteFormApp.jsp">
                    r.mcgill@samsung.com</a></p>
	    </Modal>
	  );
  }
});

module.exports = CustomStepsModal;