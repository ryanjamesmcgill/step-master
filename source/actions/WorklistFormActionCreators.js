var AppDispatcher = require('../dispatcher/AppDispatcher');

function setOptionsDefectClasses(array){
    var action = {
        type: 'set_options_defectClasses',
        array: array
    };
    AppDispatcher.dispatch(action);
}

function setOptionsDataTypes(array){
    var action = {
        type: 'set_options_dataTypes',
        array: array
    };
    AppDispatcher.dispatch(action);
}

function setOptionsSavedStepSets(sets){
    var action = {
        type: 'set_options_savedStepSets',
        sets: sets
    };
    AppDispatcher.dispatch(action);
}

function setSelectionsDates(dates){
    var action = {
        type: 'set_selections_dates',
        dates: dates
    };
    AppDispatcher.dispatch(action);
}

function setSelectionsDefectClasses(array){
    var action = {
        type: 'set_selections_defectClasses',
        array: array
    };
    AppDispatcher.dispatch(action);
}

function setSelectionsDataType(dataType){
    var action = {
        type: 'set_selections_dataType',
        dataType: dataType
    };
    AppDispatcher.dispatch(action);
}

function setSelectionMergeType(mergeType){
    var action = {
        type: 'set_selections_mergeType',
        mergeType: mergeType
    };
    AppDispatcher.dispatch(action);
}

module.exports = {
    setOptionsDefectClasses:setOptionsDefectClasses,
    setOptionsDataTypes: setOptionsDataTypes,
    setOptionsSavedStepSets: setOptionsSavedStepSets,
    setSelectionsDates: setSelectionsDates,
    setSelectionsDefectClasses: setSelectionsDefectClasses,
    setSelectionsDataType: setSelectionsDataType,
    setSelectionMergeType: setSelectionMergeType
};