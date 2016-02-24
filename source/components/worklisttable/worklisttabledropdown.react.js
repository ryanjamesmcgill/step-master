var React = require('react');
var Cell = require('fixed-data-table').Cell;

var WorklistTableDropdown = React.createClass({
    render: function(){
        var style = {
            height: "100%",
            width: "100%",
            padding: 0
        };
        var value = this.props.stepObj.scanstep;
        var button;
        if(this.props.stepObj.isScan){
            button ="---";
        } else {
            button= <button   
                    className="btn btn-default dropdown-toggle" 
                    type="button"
                    style={{padding: "2px 12px", width: "80%", fontSize: 12}}
                    onClick={this.props.showDropdown.bind(null,this.props.stepObj)}
                    onMouseEnter={this.props.onDropdownMouseEnter.bind(null,this.props.stepObj)}
                    onMouseLeave={this.props.onDropdownMouseLeave}>
                        {value} 
                        <span className="caret"></span>
                    </button> ;
        }
        return( 
                <Cell
                    className = "worklistTable"
                    style={style}>
                 {button}   
                </Cell> );
    }
});

module.exports = WorklistTableDropdown;