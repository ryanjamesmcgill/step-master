var React = require('react');
var Cell = require('fixed-data-table').Cell;

var WorklistTableText = React.createClass({
    render: function(){
        var style = {
            height: "100%",
            width: "100%",
            margin: 'auto',
            fontSize: 12,
            padding: 0
        };
        var value = this.props.value;
        return( 
                <Cell className='worklistTable' style={style}>
                {String(value)}
                </Cell> );
    }
});

module.exports = WorklistTableText;