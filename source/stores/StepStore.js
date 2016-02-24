var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var StepUtils = require('../utils/StepUtils');
var _ = require('lodash');

var CHANGE_EVENT = 'change';

var MasterSteps = [];
var WorklistSteps = [];
var filteredIndexes = [];
var filters = {
		"processid": {
			"value": "",
			"name": "Process"
		},
		"stepseq": {
			"value": "",
			"name": "Step Sequence"
		},
		"stepdesc": {
			"value": "",
			"name": "Step Description"
		},
		"ppid": {
			"value": "",
			"name": "PPID"
		},
		"workliststatus": {
			"value": "",
			"name": "Worklist Status"
		}
};

function setMasterSteps(stepArray){
	for(var i=0; i<stepArray.length; i++){
	    MasterSteps.push(stepArray[i]);
	    filteredIndexes.push(i);
	    
	    MasterSteps[i].workliststatus = false;
	    var isScan;
	    //if(MasterSteps[i].ppid.indexOf("SCAN")>-1){ //fake data
	    if(MasterSteps[i].ppid.indexOf("@PART")>-1){ //real data
	    	isScan=true;
	    } else {
	    	isScan=false;
	    }
	    MasterSteps[i].isScan=isScan;
	}
}
function setFilter(filtertype, value){
	filters[filtertype].value = value.toLowerCase();
	filter();
}
function filter(){
	//resets filteredIndexes based on values in filters object
	var size = MasterSteps.length;
	filteredIndexes = [];
	for (var index = 0; index < size; index++){
		if(StepUtils.filterTest(MasterSteps[index], filters)){
			filteredIndexes.push(index);
		}
	}
}
function addStepToWorklist(stepObj){
	/*adding scanstep attribute, required for worklist*/
	stepObj.scanstep=null;
	
	/*only allow unique steps in worklist*/
	var foundStep = false;
	WorklistSteps.map(function(element, index, WorklistSteps){
		if(element.stepseq == stepObj.stepseq){
			foundStep = true;
		}
	});
	if(!foundStep){
		WorklistSteps.push(stepObj);	
	}
	
	/*if duplicate steps are in stepmaster, this will mark them all as 'added to worklist'*/
	MasterSteps.map(function(element, index, MasterSteps){
		if(element.stepseq == stepObj.stepseq){
			element.workliststatus = true;
		}
	});
	
	StepUtils.sortWorklist(WorklistSteps);
	StepUtils.autoCorrelateToScans(WorklistSteps);
}
function removeStepFromWorklist(stepObj){
	WorklistSteps.map(function(element, index, WorklistSteps){
		if(element.stepseq == stepObj.stepseq){
			WorklistSteps.splice(index, 1);
		}
	});
	MasterSteps.map(function(element, index, MasterSteps){
		if(element.stepseq == stepObj.stepseq){
			element.workliststatus = false;
		}
	});
	
	StepUtils.sortWorklist(WorklistSteps);
	StepUtils.autoCorrelateToScans(WorklistSteps);
}
function setWorklistPair(processStep, scanStep){
	var stepObj = _.find(WorklistSteps,function(o){
							return (o.stepseq == processStep);
						}
	);
	stepObj.scanstep = scanStep;
}
function emitChange(){
	StepStore.emit(CHANGE_EVENT);
}

var StepStore = assign({}, EventEmitter.prototype, {
	addChangeListener: function(callback){
		this.on(CHANGE_EVENT, callback);
	},
	removeChangeListener: function(callback){
		this.removeListener(CHANGE_EVENT, callback);
	},
	getWorklistSteps: function(){
		return WorklistSteps;	
	},
	getMasterStepAt: function(filteredIndex){
		var MasterIndex = filteredIndexes[filteredIndex];
		return MasterSteps[MasterIndex];
	},
	getWorklistStepAt: function(index){
		return WorklistSteps[index];
	},
	getWorklistIndexByObj: function(stepObj){
		return _.indexOf(WorklistSteps, stepObj);	
	},
	getWorklistIndexByStep: function(stepseq){
		for(var i=0; i<WorklistSteps.length; i++){
			if(WorklistSteps[i].stepseq == stepseq){
				return i;
			}
		}
		return -1;
	},
	WorklistStepsMap: function(callback){
		WorklistSteps.map(callback);
	},
	getWorklistLength: function(){
		return WorklistSteps.length;
	},
	getFilteredLength: function(){
		return filteredIndexes.length;
	},
	getFilteredSteps: function(){
		var array = [];
		filteredIndexes.map(
					function(index){
						array.push(MasterSteps[index]);
					}
			);
		return array;
	},
	getFilters: function(){
		return filters;
	}
});

function handleAction(action){
	switch (action.type) {
		case 'set_mastersteps': 
			setMasterSteps(action.stepArray);
			emitChange();
			break;
		case 'set_filter':
			setFilter(action.filtertype, action.value);
			emitChange();
			break;
		case 'add_step_to_worklist':
			addStepToWorklist(action.stepObj);
			emitChange();
			break;
		case 'remove_step_from_worklist':
			removeStepFromWorklist(action.stepObj);
			emitChange();
			break;
		case 'set_worklist_pair' :
			setWorklistPair(action.processStep, action.scanStep);
			emitChange();
			break;
		default: // .. do nothing
	}
}

StepStore.dispatchToken = AppDispatcher.register(handleAction);
module.exports = StepStore;