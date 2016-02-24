var React = require('react');
var StepStore = require('../../stores/StepStore');
var StepActionCreators = require('../../actions/StepActionCreators');
var Cell = require('fixed-data-table').Cell;

var cellStyle = {
    height: '100%',
    margin: 'auto',
    fontSize: 22,
    padding: 0
}

var StepmasterButton = React.createClass({
    getButton: function(workliststatus){
        if(!workliststatus){
            return (
                    <span
                        className="glyphicon glyphicon-plus-sign"
                        id="add"
                        aria-hidden="true"></span>
            );
        } else {
            return (
                    <span 
                        className="glyphicon glyphicon-minus-sign"
                        id="remove"
                        aria-hidden="true"></span>
            );
        }
    },
    render: function(){
        var stepObj = this.props.stepObj
        var buttonElement = this.getButton(stepObj.workliststatus);
        return( <Cell className="stepmasterButton" 
                    style = {cellStyle}
                    onClick={this.props.onCellClick.bind(null,this.props.stepObj)}>
                    {buttonElement}
                </Cell>
        );
    }
});

module.exports = StepmasterButton;