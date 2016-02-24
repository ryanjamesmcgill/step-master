var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var options = {
	defectClasses : [],
	dataTypes : [],
	savedStepSets : {}
};

var selections = {
	dates : {
		startday : null,
		endday : null
	},
	defectClasses : [],
	mergeType: null,
	dataType : null
}; 

function setOptionsDefectClasses(array){
	options.defectClasses = array;
}
function setOptionsDataTypes(array){
	options.dataTypes = array;
}
function setOptionsSavedStepSets(sets){
	options.savedStepSets = sets;
}
function setSelectionsDefectClasses(array){
	selections.defectClasses = array;
}
function setSelectionsDates(dates){
	selections.dates.startday=dates.startday;
	selections.dates.endday=dates.endday;
}
function setSelectionsDataType(dataType){
	selections.dataType = dataType;
}
function setSelectionsMergeType(mergeType){
	selections.mergeType = mergeType;
}
function emitChange(){
	WorklistFormStore.emit(CHANGE_EVENT);
}

var WorklistFormStore = assign({}, EventEmitter.prototype, {
	addChangeListener: function(callback){
		this.on(CHANGE_EVENT, callback);
	},
	removeChangeListener: function(callback){
		this.removeListener(CHANGE_EVENT, callback);
	},
	getOptionsDefectClasses: function(){
		return options.defectClasses;
	},
	getOptionsDataTypes: function(){
		return options.dataTypes;
	},
	getOptionsSavedStepSets: function(){
		return options.savedStepSets;
	},
	getOptionSavedStepSet: function(key){
		return options.savedStepSets[key];
	},
	getSelectionsDefectClasses: function(){
		return selections.defectClasses;
	},
	getSelectionsDataType: function(){
		return selections.dataType;
	},
	getSelectionsMergeType: function(){
		return selections.mergeType;
	},
	getSelections: function(){
		return selections;
	}
});

function handleAction(action){
	switch (action.type) {
		case 'set_options_defectClasses':
			setOptionsDefectClasses(action.array);
			emitChange();
			break;
		case 'set_options_dataTypes':
			setOptionsDataTypes(action.array);
			emitChange();
			break;
		case 'set_options_savedStepSets':
			setOptionsSavedStepSets(action.sets);
			emitChange();
			break;
		case 'set_selections_dates':
			setSelectionsDates(action.dates);
			emitChange();
			break;
		case 'set_selections_defectClasses':
			setSelectionsDefectClasses(action.array);
			emitChange();
			break;
		case 'set_selections_dataType':
			setSelectionsDataType(action.dataType);
			emitChange();
			break;
		case 'set_selections_mergeType':
			setSelectionsMergeType(action.mergeType);
			emitChange();
			break;
		default: // .. do nothing
	}
}

WorklistFormStore.dispatchToken = AppDispatcher.register(handleAction);
module.exports = WorklistFormStore;