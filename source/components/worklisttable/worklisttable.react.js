"use strict";
var React = require('react');
var _ = require('lodash');
var StepStore = require('../../stores/StepStore');
var WorklistTableButton = require('./worklisttablebutton.react');
var WorklistTableText = require('./worklisttabletext.react');
var WorklistTableDropdown = require('./worklisttabledropdown.react');
var WorklistTableDropdownSelection = require('./worklisttabledropdownselection.react');
var FixedDataTable = require('fixed-data-table');
var Table = FixedDataTable.Table;
var Column = FixedDataTable.Column;
var Cell = FixedDataTable.Cell;

var footerStyle = {
    height: 30,
    padding: 5,
    margin: 'auto',
    color: '#777',
    fontSize: 12,
    fontStyle: 'italic'
};

var WorklistTable = React.createClass({
    getInitialState: function(){
		return {
			columnWidths: {
				button: 50,
				stepseq: 120,
				stepdesc: 370,
				ppid: 200,
				scancorrelation: 200
			},
			dropdown: {
				visible: false,
				x: 0,
				y: 0,
				stepseq: ''
			},
			activeIndexes: []
		};
	},
	componentDidMount: function(){
		StepStore.addChangeListener(this._onStoreChange);
	},
	componentWillUnmount: function(){
		StepStore.removeChangeListener(this._onStoreChange);
	},
	_onStoreChange: function(){
		this.forceUpdate();
	},
	_onColumnResizeEnd: function(newColumnWidth, columnKey){
		var newWidths = this.state.columnWidths;
		newWidths[columnKey] = newColumnWidth;
	    this.setState({
	    	columnWidths: newWidths
	    });	
	},
	showDropdown: function(stepObj, e){
		var x = e.clientX;
		var y = e.clientY;
		this.setState({
			dropdown: {
				visible: true,
				x: x,
				y: y,
				stepseq: stepObj.stepseq
			}
		});
	},
	hideDropdown: function(){
		this.setState({
			dropdown: {
				visible: false,
				x: 0,
				y: 0,
				stepseq: ''
			}
		});
	},
	_onDropdownMouseEnter: function(stepObj,e){
		var activeIndexes = [];
		activeIndexes.push(StepStore.getWorklistIndexByObj(stepObj));
		
		var scanstep = stepObj.scanstep;
		if(scanstep){
			var scanIndex=StepStore.getWorklistIndexByStep(scanstep);
			activeIndexes.push(scanIndex);
		}
		
		this.setState({
			activeIndexes: activeIndexes
		});
	},
	_onDropdownMouseLeave: function(index){
		this.setState({
			activeIndexes: []
		});
	},
	_onDropdownElementMouseEnter: function(e){
		var stepseq = e.currentTarget.id;
		var index = StepStore.getWorklistIndexByStep(stepseq);
		this.setState({
			activeIndexes: [index]
		});
	},
	rowClassNameGetter: function(index){
		var classList = "";
		var stepObj = StepStore.getWorklistStepAt(index);
		if(stepObj.isScan){
			classList += "stepRow_scan ";
		} else {
			classList += "stepRow_process ";
		}
		if(_.indexOf(this.state.activeIndexes,index)>-1){
			classList += "worklistactive ";
		}
		return classList;
	},
	render: function(){
		var self = this;
		var dropdown;
		if (this.state.dropdown.visible){
			dropdown = <WorklistTableDropdownSelection
							hideDropdown={this.hideDropdown} 
							x = {this.state.dropdown.x} 
							y = {this.state.dropdown.y} 
							ownerStepSeq = {this.state.dropdown.stepseq}
							onDropdownElementMouseEnter={this._onDropdownElementMouseEnter}
							onDropdownMouseLeave={this._onDropdownMouseLeave}
							onStepmasterClick={this.props.onStepmasterClick}/>;
		} else {
			dropdown = null;
		}
		return (
			<div>
		      	<Table
		        	rowsCount={StepStore.getWorklistLength()}
		        	rowHeight={30}
		        	headerHeight={40}
		        	width={this.props.width}
		        	height={this.props.height}
		        	footerHeight={0}
		        	isColumnResizing={false}
		        	onColumnResizeEndCallback={this._onColumnResizeEnd}
		        	rowClassNameGetter={this.rowClassNameGetter}>
		        <Column
	     			columnKey="button"
	     			width={this.state.columnWidths.button}
	     			isResizable={true}
	        	    header=""
	        	    cell={function(props){
	        	    		return (<WorklistTableButton 
	        	    		stepObj={StepStore.getWorklistStepAt(props.rowIndex)} />); } 
	        	    	
	        	    } />
		        <Column
	     			columnKey="stepseq"
	     			width={this.state.columnWidths.stepseq}
	     			isResizable={true}
	        	    header={<Cell><p className="tableHeader">Step Sequence</p></Cell>}
	        	    cell={function(props){
	        	    			return (<WorklistTableText
	        	    				value={StepStore.getWorklistStepAt(props.rowIndex)[props.columnKey]}/> );} 
	        	    	
	        	    } />
	        	<Column
	     			columnKey="stepdesc"
	     			width={this.state.columnWidths.stepdesc}
	     			isResizable={true}
	        	    header={<Cell><p className="tableHeader">Step Description</p></Cell>}
	        	    cell={function(props){
	        	    			return (<WorklistTableText
	        	    				value={StepStore.getWorklistStepAt(props.rowIndex)[props.columnKey]}/> ); } 
	        	    	
	        	    } />
	        	<Column
	     			columnKey="ppid"
	     			width={this.state.columnWidths.ppid}
	     			isResizable={true}
	        	    header={<Cell><p className="tableHeader">PPID</p></Cell>}
	        	    cell={function(props){
	        	    			return (<WorklistTableText
	        	    				value={StepStore.getWorklistStepAt(props.rowIndex)[props.columnKey]}/> ); } 
	        	    	
	        	    }/>
	        	<Column
	     			columnKey="scancorrelation"
	     			width={this.state.columnWidths.scancorrelation}
	     			isResizable={true}
	        	    header={<Cell><p className="tableHeader">Scan Correlation</p></Cell>}
	        	    cell={function(props){
	        	    		return (<WorklistTableDropdown
	        	    				onDropdownMouseEnter={self._onDropdownMouseEnter}
	        	    				onDropdownMouseLeave={self._onDropdownMouseLeave}
	        	    				showDropdown={self.showDropdown}
	        	    				stepObj={StepStore.getWorklistStepAt(props.rowIndex)} /> ); }
	        	    	
	        	    } />
		      	</Table>
		      	<div id="footer" style={footerStyle}>
		      		<p className="text-center">created by Ryan McGill - r.mcgill@samsung.com</p>
		      	</div>
		      	{dropdown}
	      	</div>
		);
	}
});

module.exports = WorklistTable;