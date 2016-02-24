var React = require('react');
var Select = require('react-select');
var WorklistFormStore = require('../../stores/WorklistFormStore');
var WorklistFormActionCreators = require('../../actions/WorklistFormActionCreators');
var CheckboxList = require('./checkboxlist.react');

var DefectSelection= React.createClass({
	getInitialState: function(){
		return({
			selections: WorklistFormStore.getSelectionsDefectClasses()
		});
	},
    logChange: function(val, array){
        WorklistFormActionCreators.setSelectionsDefectClasses(array);
        this.setState({
        	selections: array
        });
    },
	render: function(){
	    var options = WorklistFormStore.getOptionsDefectClasses();
		return (
	    <div>
	        <h4>Defect Selection</h4>
	        <div className="form-group">
	            <Select
                    name="doi"
                    value={this.state.selections}
                    options={options}
                    onChange={this.logChange}
                    multi={true}
                />
                
	        </div>
	        <CheckboxList />
	    </div>
		);
	}
});

module.exports = DefectSelection;