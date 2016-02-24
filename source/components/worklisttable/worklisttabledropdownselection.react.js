var React = require('react');
var Cell = require('fixed-data-table').Cell;
var StepStore = require('../../stores/StepStore');
var StepActionCreators = require('../../actions/StepActionCreators');

var WorklistTableDropdownSelection = React.createClass({
    getInitialState: function(){
        return {
            mouseIsDownOnElement: false
        };
    },
    componentDidMount: function () {
        window.addEventListener('mousedown', this.onPageClick, false);
    },
    componentWillUnmount: function(){
		window.removeEventListener('mousedown', this.onPageClick, false);
	},
    onPageClick: function(){
       if(this.state.mouseIsDownOnElement){
           return;
       } else {
           this.props.hideDropdown();
       }
    },
    onDropdownClick: function(processStep, e){
        var scanStep = e.currentTarget.id;
        StepActionCreators.setWorklistPair(processStep, scanStep);
        this.props.hideDropdown();
        this.props.onDropdownMouseLeave();
    },
    onMouseDown: function(e){
        this.setState({
            mouseIsDownOnElement: true
        });
    },
    onMouseUp: function(e){
        this.setState({
            mouseIsDownOnElement: false
        });
    },
    onAddStepClick: function(e){
        console.log('onAddStepClick');
        this.props.hideDropdown();
        this.props.onStepmasterClick();
    },
    createList: function(){
        var list=[];
        StepStore.WorklistStepsMap(
            function(stepObj, index, array){
                if(stepObj.isScan){
                    var item = <li onClick={this.onDropdownClick.bind(null, this.props.ownerStepSeq)}
                                    onMouseEnter={this.props.onDropdownElementMouseEnter}
                                    onMouseLeave={this.props.onDropdownMouseLeave}
                                    id={stepObj.stepseq} 
                                    key={index}>
                                    <a href='#'>{stepObj.stepseq}</a>
                                </li>;
                    list.push(item);
                }
            }.bind(this));
        list.push(<li key={StepStore.getWorklistLength()+1} role="separator" className="divider"></li>);
        list.push(<li   key={StepStore.getWorklistLength()+2}
                        onClick={this.onAddStepClick}><a href="#">Add step...</a></li>);
        return list;
    },
    render: function(){
        var list = this.createList();
        var style = {
            display: 'block',
            position: 'fixed',
            top: this.props.y,
            left: this.props.x-20,
            maxHeight: 200,
            overflow: 'auto'
        };
        return( 
               <ul  className="dropdown-menu" 
                    style={style}
                    onMouseDown={this.onMouseDown}
                    onMouseUp={this.onMouseUp}>
                    {list.map(function(element, index, array){
                        return element;
                    })}
                </ul>
               );
    }
});

module.exports = WorklistTableDropdownSelection;