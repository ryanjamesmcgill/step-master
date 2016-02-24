var React = require('react');
var filesaver = require('filesaver.js');
var StepStore = require('../../stores/StepStore');
var Blob = require('blob');

var SaveButton = React.createClass({
	_onClick: function(e){
		e.preventDefault();
		var steps = StepStore.getWorklistSteps();
		var json = JSON.stringify(steps);
		var blob = new Blob([json], {type: "application/json"});
		filesaver.saveAs(blob, "steps.json");
	},
	render: function(){
		return ( 
				<button type="button" 
						data-toggle="tooltip" 
						data-placement="top"
						data-delay={300}
						title={"Save current worklist for easy access later. "+
							"This can be useful for a common set of scan/process steps."}
						className="btn btn-default" 
						onClick={this._onClick}>Save</button>
		);
	}
});

module.exports = SaveButton;