var React = require('react');
var Select = require('react-select');
var WorklistFormActionCreators = require('../../actions/WorklistFormActionCreators');
var WorklistFormStore = require('../../stores/WorklistFormStore');

var DataTypeSelection= React.createClass({
    getInitialState: function(){
        return ({
            datatype: 'Count'
        });
    },
    componentDidMount: function(){
        WorklistFormActionCreators.setSelectionsDataType(this.state.datatype);  
    },
    logChange: function(datatype){
        WorklistFormActionCreators.setSelectionsDataType(datatype);
        this.setState({
            datatype: datatype
        });
    },
	render: function(){
        var options = WorklistFormStore.getOptionsDataTypes();
		return (
	    <div>
	        <h4>Data Type</h4>
	        <div className="form-group">
	            <Select
                    name="datatype"
                    value={this.state.datatype}
                    options={options}
                    onChange={this.logChange}
                />
	        </div>
	    </div>
		);
	}
});

module.exports = DataTypeSelection;