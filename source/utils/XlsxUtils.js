var filesaver = require('filesaver.js');
var XLSX = require('xlsx-browserify-shim');
var Blob = require('blob');
var StepStore = require('../stores/StepStore');
var WorklistFormStore = require('../stores/WorklistFormStore');
var columnMap = window.references.columnMap;
var _ = require('lodash');

function generateWorklist(){
    var selections = WorklistFormStore.getSelections();
    var stepMap = generateStepMap();
    var line;
    var table = [[],[],[],[],[],[],[],[],[]]; //initalize with 9 blank rows
    table.push(_.keys(columnMap));
    _.forEach(stepMap, function(stepArray, scanStep){
    	if(stepArray.length > 0){
    		stepArray.map(function(processStep,index,array){
    			line = generateLine(selections, scanStep, processStep);
    			table.push(line);
    		});
    	} else {
    		line = generateLine(selections, scanStep);
    		table.push(line);
    	}
    });
    saveXlsxFromArray(table);
    console.log('generateWorklist');
}

function generateLine(selectionsObj, scanStep, processStep){
	processStep = processStep || "";
	var DEFECTCODE = getCodeFromSelections(selectionsObj);
	var DEFECTNAME = getNameFromSelections(selectionsObj);
	var line = [];
	var length = Object.keys(columnMap).length;
	for(var i = 0; i < length; i++){
		switch(i) {
			case columnMap["WORK_KEY"]:
				line.push("1");
				break;
			case columnMap["TITLE"]:
				line.push(scanStep+'_'+processStep+'_'+DEFECTNAME);
				break;
			case columnMap["GROUPKEY"]:
				line.push("-999999999");
				break;
			case columnMap["LINEID"]:
				line.push("SFBX");
				break;
			case columnMap["FROMDATE"]:
				line.push(selectionsObj.dates.startday);
				break;
			case columnMap["TODATE"]:
				line.push(selectionsObj.dates.endday);
				break;
			case columnMap["STEPSEQ"]:
				line.push(scanStep);
				break;	
			case columnMap["DD"]:
				line.push(selectionsObj.dataType);
				break;
			case columnMap["TESTNO"]:
				line.push("0");
				break;
			case columnMap["JOINLEN"]:
				line.push("6");
				break;
			case columnMap["DEFECTCODE"]:
				line.push(DEFECTCODE);
				break;
			case columnMap["DEFECTNAME"]:
				line.push(DEFECTNAME);
				break;
			case columnMap["ITEM1CLASSID"]:
				line.push(DEFECTCODE);
				break;
			case columnMap["ITEM1NAME"]:
				line.push(DEFECTNAME);
				break;
			case columnMap["LEGEND"]:
				line.push(processStep);
				break;
			case columnMap["Y2_STEP"]:
				line.push(processStep);
				break;
			case columnMap["FABFDATE"]:
				line.push("0");
				break;
			case columnMap["FABTDATE"]:
				line.push("0");
				break;
			case columnMap["CHARTOPTION"]:
				line.push("CHARTTYPE=TIME|LINE=|XDATE=SCANDATE|LEGEND=|CHARTMINMAXOPT=0|SPECLINE=1|ADDSPECLINE=|CPCPK=5|LFLT=2|AVGLINE=0|LOTTYPE=|TITLE=TITLE|CATEGORY=|LINE=0");
				break;
			case columnMap["SELDATE"]:
				line.push("FAB");
				break;
			case columnMap["SPEC"]:
				line.push("1");
				break;
			case columnMap["PAIRLOT"]:
				line.push("N");
				break;
			case columnMap["INFABFLAG"]:
				line.push("Y");
				break;
			case columnMap["REWORK"]:
				line.push("ALL");
				break;
			default:
				line.push("");
		}
	}
	return line;
}

function getCodeFromSelections(selections){
	var defectClasses = selections.defectClasses;
	var DEFECTCODE = '';
	defectClasses.map(function(obj, index, array){
		DEFECTCODE += obj.classid + ' ';
	});
	return DEFECTCODE;
}

function getNameFromSelections(selections){
	var defectClasses = selections.defectClasses;
	var seperator;
	if(selections.mergeType == 'single'){
		seperator = '|';
	} else {
		seperator = '+';
	}
	var DEFECTNAME = '';
	defectClasses.map(function(obj, index, array){
		if(DEFECTNAME!=''){
			DEFECTNAME += seperator;
		}
		DEFECTNAME += obj.classid + '_' + obj.classname;
	});
	return DEFECTNAME;
}

function generateStepMap(){
	var stepMap = {};
	
	/*varruct stepMap's 1st layer with scan steps*/
	StepStore.WorklistStepsMap(
		function(stepObj, index, array){
			if(stepObj.isScan){
				stepMap[stepObj.stepseq]=[];
			}
		}
	);
	
	/*Now fill in process steps*/
	StepStore.WorklistStepsMap(
		function(stepObj, index, array){
			if(stepObj.scanstep){ //if this step as an associated scan step, can only be a process step
				console.assert(!stepObj.isScan, 'During gernerateStepMap(), A scan step was associated with another scan step which should not happen.');
				stepMap[stepObj.scanstep].push(stepObj.stepseq);
			}		
		}
	);
	
	return stepMap
}

function Workbook() {
	if(!(this instanceof Workbook)) return new Workbook();
	this.SheetNames = [];
	this.Sheets = {};
}

function s2ab(s) {
	var buf = new ArrayBuffer(s.length);
	var view = new Uint8Array(buf);
	for (var i=0; i!=s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
	return buf;
}

function datenum(v, date1904) {
	if(date1904) v+=1462;
	var epoch = Date.parse(v);
	return (epoch - new Date(Date.UTC(1899, 11, 30))) / (24 * 60 * 60 * 1000);
}

function sheet_from_array_of_arrays(data, opts) {
	var ws = {};
	var range = {s: {c:10000000, r:10000000}, e: {c:0, r:0 }};
	for(var R = 0; R != data.length; ++R) {
		for(var C = 0; C != data[R].length; ++C) {
			if(range.s.r > R) range.s.r = R;
			if(range.s.c > C) range.s.c = C;
			if(range.e.r < R) range.e.r = R;
			if(range.e.c < C) range.e.c = C;
			var cell = {v: data[R][C] };
			if(cell.v == null) continue;
			var cell_ref = XLSX.utils.encode_cell({c:C,r:R});
			
			if(typeof cell.v === 'number') cell.t = 'n';
			else if(typeof cell.v === 'boolean') cell.t = 'b';
			else if(cell.v instanceof Date) {
				cell.t = 'n'; cell.z = XLSX.SSF._table[14];
				cell.v = datenum(cell.v);
			}
			else cell.t = 's';
			
			ws[cell_ref] = cell;
		}
	}
	if(range.s.c < 10000000) ws['!ref'] = XLSX.utils.encode_range(range);
	return ws;
}

function saveXlsxFromArray(array){
    var ws_name = "Sheet1";
    var wb = new Workbook();
    var ws = sheet_from_array_of_arrays(array);
    
    /* add worksheet to workbook */
    wb.SheetNames.push(ws_name);
    wb.Sheets[ws_name] = ws;
    var wbout = XLSX.write(wb, {bookType:'xlsx', bookSST:false, type: 'binary'});
    filesaver.saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), "worklist-generator.xlsx");
}

module.exports = {
    generateWorklist: generateWorklist
};