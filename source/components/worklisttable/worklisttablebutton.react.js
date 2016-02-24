var React = require('react');
var StepStore = require('../../stores/StepStore');
var StepActionCreators = require('../../actions/StepActionCreators');
var Cell = require('fixed-data-table').Cell;

var style = {
    height: '100%',
    margin: 'auto',
    fontSize: 22
}

var WorklistTableButton = React.createClass({
    _onClick: function(e){
        var stepObj = this.props.stepObj;
        StepActionCreators.removeStepFromWorklist(stepObj);
        console.log('removed ', stepObj);
    },
    render: function(){
        return( <Cell
                    className = "worklistTableBtn"
                    style = {style} >

                <span onClick={this._onClick} 
                className="glyphicon glyphicon-minus-sign" 
                aria-hidden="true"></span>

                </Cell>
        );
    }
});

module.exports = WorklistTableButton;

/*
<button type="button" 
    id="add"
    className="btn btn-secondary btn-sm worklistRemoveBtn"
    onClick={this._onClick}>
    -
</button>*/