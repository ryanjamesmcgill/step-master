var _ = require('lodash');
var StepActionCreators = require('../actions/StepActionCreators');
var stepArray = window.references.stepMaster;

function generateMasterSteps(){
    console.log('steps');
    StepActionCreators.setMasterSteps(stepArray);
}

function filterTest(row, filters){
    var pass = true;
    _.forEach(filters,function(filterObj, key){
        var value = filterObj.value;
        if(value !== ""){
        pass = pass && (row[key].toLowerCase().indexOf(value) !== -1);
        }
    });
    return pass;
}

function sortWorklist(WorklistSteps){
    WorklistSteps.sort(
        function(a,b){
            var aStep = a.stepseq;
            var bStep = b.stepseq;
            if(aStep < bStep){
                return -1;
            } else if(aStep > bStep){
                return 1;
            } else {
                return 0;
            }
        });
}

function autoCorrelateToScans(WorklistSteps){
    _.forEach(WorklistSteps,
        function(stepObj){
            if(!stepObj.isScan){
                //process step
                var index = _.indexOf(WorklistSteps, stepObj);
                var sublist = _.slice(WorklistSteps, index);
                var nextScan= _.find(sublist,function(o){return o.isScan});
                if(nextScan){
                    stepObj.scanstep=nextScan.stepseq;
                } else {
                    stepObj.scanstep=null;
                }
            }
        }
    );
    
}

module.exports = {
    generateMasterSteps: generateMasterSteps,
    filterTest: filterTest,
    sortWorklist: sortWorklist,
    autoCorrelateToScans: autoCorrelateToScans
};