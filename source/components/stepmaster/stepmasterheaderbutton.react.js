var React = require('react');
var StepStore = require('../../stores/StepStore');
var StepActionCreators = require('../../actions/StepActionCreators');
var Cell = require('fixed-data-table').Cell;
var _ = require('lodash');

var StepmasterHeaderButton = React.createClass({
    _onClick: function(e){
        console.log('all filtered ', StepStore.getFilteredSteps());
        var steps = StepStore.getFilteredSteps();
        steps.map(function(stepObj, index, array){
           StepActionCreators.addStepToWorklist(stepObj);
        });
    },
    render: function(){
        var classes;
        var clickCallBack;
        if(this.props.enabled){
            classes = "glyphicon glyphicon-plus-sign";
            clickCallBack = this._onClick;
        } else {
            classes = "glyphicon glyphicon-plus-sign disabled";
            clickCallBack = null;
        }
        return( <Cell style={{
                        margin: 'auto',
                        position: 'relative',
                        top: '45%',
                        fontSize: 22}}>
                    <span onClick={clickCallBack} className={classes} aria-hidden="true"></span>
                </Cell>
        );
    }
});

module.exports = StepmasterHeaderButton;