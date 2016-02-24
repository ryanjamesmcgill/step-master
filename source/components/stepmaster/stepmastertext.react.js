var React = require('react');
var StepStore = require('../../stores/StepStore');
var Cell = require('fixed-data-table').Cell;


var style = {
    height: "100%",
    width: "100%",
    padding: 0,
    fontSize: 12
};

var StepmasterText = React.createClass({
    render: function(){
        var value = this.props.stepObj[this.props.column];
        return( 
                <Cell style={style}
                    onClick={this.props.onCellClick.bind(null,this.props.stepObj)}>
                {String(value)}
                </Cell> );
    }
});

module.exports = StepmasterText;