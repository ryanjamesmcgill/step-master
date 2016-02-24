var React = require('react');
var DatePicker = require('react-datepicker');
var moment = require('moment');


var DateSelection= React.createClass({
    getInitialState: function(){
        return {
            startDate: moment().subtract(14,'days'),
            endDate: moment()
        };
    },
    componentDidMount: function(date){
        var startNode = this.refs.startdate.refs.input;  
        var endNode = this.refs.enddate.refs.input;
        var now = moment();
        
        var startDays = this.state.startDate.diff(now, 'days');
        startNode.state.maybeDate = startDays;
        startNode.refs.input.value = startDays;
        
        var endDays = this.state.endDate.diff(now, 'days');
        endNode.state.maybeDate = endDays;
        endNode.refs.input.value = endDays;
    },
    handleChangeStart: function(date){
        var inputNode = this.refs.startdate.refs.input;
        var startDays;
        if(date){
            var now = moment();
            startDays = date.diff(now, 'days');
            inputNode.state.maybeDate=startDays;
        }
        this.setState({
            startDate: date
        });
    },
    handleChangeEnd: function(date){
        var inputNode = this.refs.enddate.refs.input;
        var endDays;
        if(date){
            var now = moment();
            endDays = date.diff(now, 'days');
            inputNode.state.maybeDate=endDays;
        }
        this.setState({
            endDate: date
        });
    },
	render: function(){
		return ( 
		        <div>
		            <h4>Date Selection</h4>
    		        <div className="form-horizontal">
    		            <div className="form-group">
        			        <lable htmlFor="inputFromDate" className="col-sm-2 control-label">From:</lable>
        			        <div className="col-sm-10">
        			            <DatePicker
        			                ref='startdate'
        			                className="form-control startdate"
                                    selected={this.state.startDate}
                                    startDate={this.state.startDate}
                                    endDate={this.state.endDate}
                                    onChange={this.handleChangeStart}
                                    placeholderText="enter start of query range.."
                                    dateFormat={"[0]"}
                                    />
            				</div>
        				</div>
        				<div className="form-group">
        				    <lable htmlFor="inputToDate" className="col-sm-2 control-label">To:</lable>
        				    <div className="col-sm-10">
        				        <DatePicker
        			                ref='enddate'
        			                className="form-control enddate"
                                    selected={this.state.endDate}
                                    startDate={this.state.startDate}
                                    endDate={this.state.endDate}
                                    onChange={this.handleChangeEnd}
                                    placeholderText="enter end of query range.."
                                    dateFormat={"[0]"}
                                    />
        				    </div>
        				</div>
    		        </div>
		        </div>
		);
	}
});

module.exports = DateSelection;
