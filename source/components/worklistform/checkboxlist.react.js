var React = require('react');
var WorklistFormActionCreators = require('../../actions/WorklistFormActionCreators');
var WorklistFormStore = require('../../stores/WorklistFormStore');

var divStyle = {
	marginLeft: 20
}

var CheckboxList= React.createClass({
	componentDidMount: function(){
		this.refs.single.click();
	},
	_onChange: function(e){
		var mergeType = e.currentTarget.id;
		WorklistFormActionCreators.setSelectionMergeType(mergeType);
	},
	render: function(){
	    return(
	        <div className="form-group checkbox-list">
    	        <div className="radio" style={divStyle}>
    	        <lable>
    	        	<div style={{verticalAlign: 'middle'}}>
    	            <input ref="single" onClick={this._onChange} id="single" type="radio" name="doi_grouping"/>
    	            <span>single</span>
    	            </div>
    	        </lable>
    	        </div>
    	        <div className="radio" style={divStyle}>
    	        <lable>
    	            <input onClick={this._onChange} id="sum" type="radio" name="doi_grouping"/>
    	            <span>sum</span>
    	        </lable>
    	        </div>
	        </div>
	        );
	    }
});

module.exports = CheckboxList;