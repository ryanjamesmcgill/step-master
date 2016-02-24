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
    //transform                 : 'translate(-50%, -50%)',
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
  getInitialState: function(){
    return ({
      loadError : false,
      errorMessage: null,
      loadDisabled: true
    });
  },
  _onInputChange: function(){
    this.setState({
      loadDisabled: false
    });
  },
  _onClose: function(){
    this.setState({
      loadError: false,
      errorMessage: null,
      loadDisabled: true
    });
    this.props.onLoadfileClick();
  },
  _onLoad: function(){
    var reader = new FileReader();
    var file = this.refs.fileinput.files[0];
    var self = this;
    
    reader.onload = function(upload){
      console.log('loaded file');
      try {
        var array = JSON.parse(upload.currentTarget.result);
        self._onClose();
      } catch(err) {
        self.setState({
          loadError: true,
          errorMessage: err.message
        });
      }
      array.map(function(stepObj, index, array){
        StepActionCreators.addStepToWorklist(stepObj);
      });
      
    };
    
    reader.readAsText(file);
  },
	render: function(){
	  var LoadError = null;
	  if (this.state.loadError){
	    var errorMessage = "Error loading file: '" + this.state.errorMessage + "'";
	    var LoadError = <p style={{color: '#C53E3E'}}>{errorMessage}</p>;
	  }
	  
	  // Check for the various File API support.
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      // Great success! All the File APIs are supported.
  		return (
  			<Modal
  				isOpen={this.props.loadfileIsVisible}
  				onRequestClose={this._onClose}
  				style={modalStyle}>
  				<ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
  				<span 	className="close"
  					style={closeSymbolStyle}
  					onClick={this._onClose}>&times;</span>
  				<h3 style={{marginTop: 0}}>Load File</h3>
  				<p>Load a set of steps from a previously saved file..</p>
  				{LoadError}
          <input  ref="fileinput" 
                  type="file" 
                  name="file"
                  multiple={false}
                  onChange={this._onInputChange}
                  accept=".json"
                  className="upload-file"
                  style={{margin:10}}/>
          <div className="" style={{textAlign:'center'}}>
            <button className="btn btn-primary"
                    style={{marginRight: 10}}
                    onClick={this._onLoad}>
                Load
            </button>
            <button className="btn btn-default"
                    onClick={this._onClose}>
                Cancel
            </button>
          </div>
          </ReactCSSTransitionGroup>
  	    </Modal>
  		);
    }
		else {
		  return(
		  <Modal
				isOpen={this.props.loadfileIsVisible}
				onRequestClose={this.props.onLoadfileClick}
				style={modalStyle}>
				<span 	className="close"
					style={closeSymbolStyle}
					onClick={this.props.onLoadfileClick}>&times;</span>
        <h3 style={{marginTop: 0}}>Uh oh!</h3>
        <p>Sorry, file uploading is not supported in this browser.</p>
	    </Modal>
	    );
		}
	}
});

module.exports = LoadFileModal;