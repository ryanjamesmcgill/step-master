var references = {};

references.columnMap={"WORK_KEY":0,"TITLE":1,"GROUPKEY":2,"CHARTNAME":3,"LINEID":4,"FROMDATE":5,"TODATE":6,"PRCGROUP":7,"PROCESSID":8,"PARTID":9,"STEPSEQ":10,"FABEQPID":11,"PSTEPOPT":12,"STEPGROUP":13,"STATUS":14,"DD":15,"KLAEQPID":16,"INOPT_ITEM":17,"TESTNO":18,"LOTTYPE":19,"JOINLEN":20,"DEFECTCODE":21,"DEFECTNAME":22,"ITEM1CLASSID":23,"ITEM1NAME":24,"ITEM2CLASSID":25,"ITEM2NAME":26,"LEGEND":27,"Y2_STEP":28,"Y2_STEPDESC":29,"Y2_ITEMID":30,"FABFDATE":31,"FABTDATE":32,"CHARTOPTION":33,"SELDATE":34,"SPEC":35,"PAIRLOT":36,"INFABFLAG":37,"INITIALIZE":38,"INDEX":39,"REWORK":40};

references.dataTypes = [
    { "value": "COUNT", "label": "Count" },
    {  "value": "S1D0E", "label": "S1D0E" },
    {  "value": "S1D0", "label": "S1D0" },
    {  "value": "D0E", "label": "D0E" },
    {  "value": "D0", "label": "D0" },
    {  "value": "DD", "label": "DD" },
    {  "value": "SimpleNormalCnt", "label": "SimpleNormalCnt" },
    {  "value": "SimpleNormalCnt_nrd", "label": "SimpleNormalCnt_nrd" }
];

references.stepSets = {
  "set1" : [{"processid":"DUMM","stepseq":"DUMMY04","stepdesc":"Dummy Description (DMM) 04","ppid":"SCANPPID","workliststatus":true,"isScan":true,"scanstep":null},{"processid":"DUMM","stepseq":"DUMMY08","stepdesc":"Dummy Description (DMM) 08","ppid":"SCANPPID","workliststatus":true,"isScan":true,"scanstep":null}],
  "set2" : [{"processid":"DUMM","stepseq":"DUMMY03","stepdesc":"Dummy Description (DMM) 03","ppid":"RECIPEGOESHERE3","workliststatus":true,"isScan":false,"scanstep":"DUMMY04"},{"processid":"DUMM","stepseq":"DUMMY04","stepdesc":"Dummy Description (DMM) 04","ppid":"SCANPPID","workliststatus":true,"isScan":true,"scanstep":null},{"processid":"DUMM","stepseq":"DUMMY05","stepdesc":"Dummy Description (DMM) 05","ppid":"RECIPEGOESHERE5","workliststatus":true,"isScan":false,"scanstep":"DUMMY08"},{"processid":"DUMM","stepseq":"DUMMY08","stepdesc":"Dummy Description (DMM) 08","ppid":"SCANPPID","workliststatus":true,"isScan":true,"scanstep":null}],
  "set3" : [{"processid":"DUMM","stepseq":"DUMMY03","stepdesc":"Dummy Description (DMM) 03","ppid":"RECIPEGOESHERE3","workliststatus":true,"isScan":false,"scanstep":"DUMMY04"},{"processid":"DUMM","stepseq":"DUMMY03","stepdesc":"Dummy Description (DMM) 03","ppid":"RECIPEGOESHERE3","workliststatus":true,"isScan":false,"scanstep":"DUMMY04"},{"processid":"DUMM","stepseq":"DUMMY03","stepdesc":"Dummy Description (DMM) 03","ppid":"RECIPEGOESHERE3","workliststatus":true,"isScan":false,"scanstep":"DUMMY04"},{"processid":"DUMM","stepseq":"DUMMY04","stepdesc":"Dummy Description (DMM) 04","ppid":"SCANPPID","workliststatus":true,"isScan":true,"scanstep":null},{"processid":"DUMM","stepseq":"DUMMY04","stepdesc":"Dummy Description (DMM) 04","ppid":"SCANPPID","workliststatus":true,"isScan":true,"scanstep":null},{"processid":"DUMM","stepseq":"DUMMY04","stepdesc":"Dummy Description (DMM) 04","ppid":"SCANPPID","workliststatus":true,"isScan":true,"scanstep":null},{"processid":"DUMM","stepseq":"DUMMY04","stepdesc":"Dummy Description (DMM) 04","ppid":"SCANPPID","workliststatus":true,"isScan":true,"scanstep":null},{"processid":"DUMM","stepseq":"DUMMY04","stepdesc":"Dummy Description (DMM) 04","ppid":"SCANPPID","workliststatus":true,"isScan":true,"scanstep":null},{"processid":"DUMM","stepseq":"DUMMY05","stepdesc":"Dummy Description (DMM) 05","ppid":"RECIPEGOESHERE5","workliststatus":true,"isScan":false,"scanstep":"DUMMY08"},{"processid":"DUMM","stepseq":"DUMMY05","stepdesc":"Dummy Description (DMM) 05","ppid":"RECIPEGOESHERE5","workliststatus":true,"isScan":false,"scanstep":"DUMMY08"},{"processid":"DUMM","stepseq":"DUMMY05","stepdesc":"Dummy Description (DMM) 05","ppid":"RECIPEGOESHERE5","workliststatus":true,"isScan":false,"scanstep":"DUMMY08"},{"processid":"DUMM","stepseq":"DUMMY08","stepdesc":"Dummy Description (DMM) 08","ppid":"SCANPPID","workliststatus":true,"isScan":true,"scanstep":null},{"processid":"DUMM","stepseq":"DUMMY08","stepdesc":"Dummy Description (DMM) 08","ppid":"SCANPPID","workliststatus":true,"isScan":true,"scanstep":null},{"processid":"DUMM","stepseq":"DUMMY08","stepdesc":"Dummy Description (DMM) 08","ppid":"SCANPPID","workliststatus":true,"isScan":true,"scanstep":null},{"processid":"DUMM","stepseq":"DUMMY08","stepdesc":"Dummy Description (DMM) 08","ppid":"SCANPPID","workliststatus":true,"isScan":true,"scanstep":null},{"processid":"DUMM","stepseq":"DUMMY08","stepdesc":"Dummy Description (DMM) 08","ppid":"SCANPPID","workliststatus":true,"isScan":true,"scanstep":null}]
  
};

references.defectClasses = [
    { "value": "01 - Pres Pc", "label": "01 - Pres Pc", "classid": "01", "classname": "PRES_PC" },
    { "value": "02 - OX BG", "label": "02 - OX BG", "classid": "02", "classname": "OX_BG"  },
    { "value": "03 - Depo PC", "label": "03 - Depo PC",  "classid": "03", "classname": "DEPO_PC"  },
    { "value": "04 - Void", "label": "04 - Void", "classid": "04", "classname": "VOID"},
    { "value": "05 - YIKES!", "label": "05 - YIKES!", "classid": "05", "classname": "YIKES"},
];

references.stepMaster = [
  {
    "processid": "DUMM",
    "stepseq": "DUMMY01",
    "stepdesc": "Dummy Description (DMM) 01",
    "ppid": "RECIPEGOESHERE1"
  },
  {
    "processid": "DUMM",
    "stepseq": "DUMMY02",
    "stepdesc": "Dummy Description (DMM) 02",
    "ppid": "RECIPEGOESHERE2"
  },
  {
    "processid": "DUMM",
    "stepseq": "DUMMY03",
    "stepdesc": "Dummy Description (DMM) 03",
    "ppid": "RECIPEGOESHERE3"
  },
  {
    "processid": "DUMM",
    "stepseq": "DUMMY04",
    "stepdesc": "Dummy Description (DMM) 04",
    "ppid": "SCANPPID"
  },
  {
    "processid": "DUMM",
    "stepseq": "DUMMY05",
    "stepdesc": "Dummy Description (DMM) 05",
    "ppid": "RECIPEGOESHERE5"
  },
  {
    "processid": "DUMM",
    "stepseq": "DUMMY06",
    "stepdesc": "Dummy Description (DMM) 06",
    "ppid": "RECIPEGOESHERE6"
  },
  {
    "processid": "DUMM",
    "stepseq": "DUMMY07",
    "stepdesc": "Dummy Description (DMM) 07",
    "ppid": "RECIPEGOESHERE7"
  },
  {
    "processid": "DUMM",
    "stepseq": "DUMMY08",
    "stepdesc": "Dummy Description (DMM) 08",
    "ppid": "SCANPPID"
  },
  {
    "processid": "DUMM",
    "stepseq": "DUMMY09",
    "stepdesc": "Dummy Description (DMM) 09",
    "ppid": "RECIPEGOESHERE9"
  },
  {
    "processid": "DUMM",
    "stepseq": "DUMMY10",
    "stepdesc": "Dummy Description (DMM) 10",
    "ppid": "RECIPEGOESHERE10"
  },
  {
    "processid": "DUMM",
    "stepseq": "DUMMY11",
    "stepdesc": "Dummy Description (DMM) 11",
    "ppid": "SCANPPID"
  },
  {
    "processid": "DUMM",
    "stepseq": "DUMMY12",
    "stepdesc": "Dummy Description (DMM) 12",
    "ppid": "RECIPEGOESHERE12"
  },
  {
    "processid": "DUMM",
    "stepseq": "DUMMY13",
    "stepdesc": "Dummy Description (DMM) 13",
    "ppid": "RECIPEGOESHERE13"
  },
  {
    "processid": "DUMM",
    "stepseq": "DUMMY14",
    "stepdesc": "Dummy Description (DMM) 14",
    "ppid": "RECIPEGOESHERE14"
  },
  {
    "processid": "DUMM",
    "stepseq": "DUMMY15",
    "stepdesc": "Dummy Description (DMM) 15",
    "ppid": "SCANPPID"
  },
  {
    "processid": "DUMM",
    "stepseq": "DUMMY16",
    "stepdesc": "Dummy Description (DMM) 16",
    "ppid": "SCANPPID"
  },
  {
    "processid": "DUMM",
    "stepseq": "DUMMY17",
    "stepdesc": "Dummy Description (DMM) 17",
    "ppid": "RECIPEGOESHERE17"
  },
  {
    "processid": "DUMM",
    "stepseq": "DUMMY18",
    "stepdesc": "Dummy Description (DMM) 18",
    "ppid": "SCANPPID"
  },
  {
    "processid": "DUMM",
    "stepseq": "DUMMY19",
    "stepdesc": "Dummy Description (DMM) 19",
    "ppid": "RECIPEGOESHERE19"
  },
  {
    "processid": "DUMM",
    "stepseq": "DUMMY20",
    "stepdesc": "Dummy Description (DMM) 20",
    "ppid": "RECIPEGOESHERE20"
  },
  {
    "processid": "DUMM",
    "stepseq": "DUMMY21",
    "stepdesc": "Dummy Description (DMM) 21",
    "ppid": "RECIPEGOESHERE21"
  },
  {
    "processid": "DUMM",
    "stepseq": "DUMMY22",
    "stepdesc": "Dummy Description (DMM) 22",
    "ppid": "RECIPEGOESHERE22"
  },
  {
    "processid": "DUMM",
    "stepseq": "DUMMY23",
    "stepdesc": "Dummy Description (DMM) 23",
    "ppid": "RECIPEGOESHERE23"
  },
  {
    "processid": "DUMM",
    "stepseq": "DUMMY24",
    "stepdesc": "Dummy Description (DMM) 24",
    "ppid": "RECIPEGOESHERE24"
  },
  {
    "processid": "DUMM",
    "stepseq": "DUMMY25",
    "stepdesc": "Dummy Description (DMM) 25",
    "ppid": "RECIPEGOESHERE25"
  },
  {
    "processid": "DUMM",
    "stepseq": "DUMMY26",
    "stepdesc": "Dummy Description (DMM) 26",
    "ppid": "RECIPEGOESHERE26"
  },
  {
    "processid": "DUMM",
    "stepseq": "DUMMY27",
    "stepdesc": "Dummy Description (DMM) 27",
    "ppid": "RECIPEGOESHERE27"
  },
  {
    "processid": "DUMM",
    "stepseq": "DUMMY28",
    "stepdesc": "Dummy Description (DMM) 28",
    "ppid": "RECIPEGOESHERE28"
  },
  {
    "processid": "DUMM",
    "stepseq": "DUMMY29",
    "stepdesc": "Dummy Description (DMM) 29",
    "ppid": "RECIPEGOESHERE29"
  },
  {
    "processid": "DUMM",
    "stepseq": "DUMMY30",
    "stepdesc": "Dummy Description (DMM) 30",
    "ppid": "RECIPEGOESHERE30"
  },
  {
    "processid": "DUMM",
    "stepseq": "DUMMY31",
    "stepdesc": "Dummy Description (DMM) 31",
    "ppid": "RECIPEGOESHERE31"
  },
  {
    "processid": "DUMM",
    "stepseq": "DUMMY32",
    "stepdesc": "Dummy Description (DMM) 32",
    "ppid": "RECIPEGOESHERE32"
  },
  {
    "processid": "DUMM",
    "stepseq": "DUMMY33",
    "stepdesc": "Dummy Description (DMM) 33",
    "ppid": "RECIPEGOESHERE33"
  },
  {
    "processid": "DUMM",
    "stepseq": "DUMMY34",
    "stepdesc": "Dummy Description (DMM) 34",
    "ppid": "RECIPEGOESHERE34"
  },
  {
    "processid": "DUMM",
    "stepseq": "DUMMY35",
    "stepdesc": "Dummy Description (DMM) 35",
    "ppid": "RECIPEGOESHERE35"
  },
  {
    "processid": "UMMY",
    "stepseq": "DUMMY36",
    "stepdesc": "Dummy Description (DMM) 36",
    "ppid": "RECIPEGOESHERE36"
  },
  {
    "processid": "UMMY",
    "stepseq": "DUMMY37",
    "stepdesc": "Dummy Description (DMM) 37",
    "ppid": "RECIPEGOESHERE37"
  },
  {
    "processid": "UMMY",
    "stepseq": "DUMMY38",
    "stepdesc": "Dummy Description (DMM) 38",
    "ppid": "RECIPEGOESHERE38"
  },
  {
    "processid": "UMMY",
    "stepseq": "DUMMY39",
    "stepdesc": "Dummy Description (DMM) 39",
    "ppid": "RECIPEGOESHERE39"
  },
  {
    "processid": "UMMY",
    "stepseq": "DUMMY40",
    "stepdesc": "Dummy Description (DMM) 40",
    "ppid": "RECIPEGOESHERE40"
  },
  {
    "processid": "UMMY",
    "stepseq": "DUMMY41",
    "stepdesc": "Dummy Description (DMM) 41",
    "ppid": "RECIPEGOESHERE41"
  },
  {
    "processid": "UMMY",
    "stepseq": "DUMMY42",
    "stepdesc": "Dummy Description (DMM) 42",
    "ppid": "RECIPEGOESHERE42"
  },
  {
    "processid": "UMMY",
    "stepseq": "DUMMY43",
    "stepdesc": "Dummy Description (DMM) 43",
    "ppid": "RECIPEGOESHERE43"
  },
  {
    "processid": "UMMY",
    "stepseq": "DUMMY44",
    "stepdesc": "Dummy Description (DMM) 44",
    "ppid": "RECIPEGOESHERE44"
  },
  {
    "processid": "UMMY",
    "stepseq": "DUMMY45",
    "stepdesc": "Dummy Description (DMM) 45",
    "ppid": "RECIPEGOESHERE45"
  },
  {
    "processid": "UMMY",
    "stepseq": "DUMMY46",
    "stepdesc": "Dummy Description (DMM) 46",
    "ppid": "RECIPEGOESHERE46"
  },
  {
    "processid": "UMMY",
    "stepseq": "DUMMY47",
    "stepdesc": "Dummy Description (DMM) 47",
    "ppid": "RECIPEGOESHERE47"
  },
  {
    "processid": "UMMY",
    "stepseq": "DUMMY48",
    "stepdesc": "Dummy Description (DMM) 48",
    "ppid": "RECIPEGOESHERE48"
  },
  {
    "processid": "UMMY",
    "stepseq": "DUMMY49",
    "stepdesc": "Dummy Description (DMM) 49",
    "ppid": "RECIPEGOESHERE49"
  },
  {
    "processid": "UMMY",
    "stepseq": "DUMMY50",
    "stepdesc": "Dummy Description (DMM) 50",
    "ppid": "RECIPEGOESHERE50"
  },
  {
    "processid": "UMMY",
    "stepseq": "DUMMY51",
    "stepdesc": "Dummy Description (DMM) 51",
    "ppid": "RECIPEGOESHERE51"
  },
  {
    "processid": "UMMY",
    "stepseq": "DUMMY52",
    "stepdesc": "Dummy Description (DMM) 52",
    "ppid": "RECIPEGOESHERE52"
  },
  {
    "processid": "UMMY",
    "stepseq": "DUMMY53",
    "stepdesc": "Dummy Description (DMM) 53",
    "ppid": "RECIPEGOESHERE53"
  },
  {
    "processid": "UMMY",
    "stepseq": "DUMMY54",
    "stepdesc": "Dummy Description (DMM) 54",
    "ppid": "RECIPEGOESHERE54"
  },
  {
    "processid": "UMMY",
    "stepseq": "DUMMY55",
    "stepdesc": "Dummy Description (DMM) 55",
    "ppid": "RECIPEGOESHERE55"
  },
  {
    "processid": "UMMY",
    "stepseq": "DUMMY56",
    "stepdesc": "Dummy Description (DMM) 56",
    "ppid": "RECIPEGOESHERE56"
  },
  {
    "processid": "UMMY",
    "stepseq": "DUMMY57",
    "stepdesc": "Dummy Description (DMM) 57",
    "ppid": "RECIPEGOESHERE57"
  },
  {
    "processid": "UMMY",
    "stepseq": "DUMMY58",
    "stepdesc": "Dummy Description (DMM) 58",
    "ppid": "RECIPEGOESHERE58"
  },
  {
    "processid": "UMMY",
    "stepseq": "DUMMY59",
    "stepdesc": "Dummy Description (DMM) 59",
    "ppid": "RECIPEGOESHERE59"
  },
  {
    "processid": "UMMY",
    "stepseq": "DUMMY60",
    "stepdesc": "Dummy Description (DMM) 60",
    "ppid": "RECIPEGOESHERE60"
  },
  {
    "processid": "UMMY",
    "stepseq": "DUMMY61",
    "stepdesc": "Dummy Description (DMM) 61",
    "ppid": "RECIPEGOESHERE61"
  },
  {
    "processid": "UMMY",
    "stepseq": "DUMMY62",
    "stepdesc": "Dummy Description (DMM) 62",
    "ppid": "RECIPEGOESHERE62"
  },
  {
    "processid": "UMMY",
    "stepseq": "DUMMY63",
    "stepdesc": "Dummy Description (DMM) 63",
    "ppid": "RECIPEGOESHERE63"
  },
  {
    "processid": "UMMY",
    "stepseq": "DUMMY64",
    "stepdesc": "Dummy Description (DMM) 64",
    "ppid": "RECIPEGOESHERE64"
  },
  {
    "processid": "UMMY",
    "stepseq": "DUMMY65",
    "stepdesc": "Dummy Description (DMM) 65",
    "ppid": "RECIPEGOESHERE65"
  },
  {
    "processid": "UMMY",
    "stepseq": "DUMMY66",
    "stepdesc": "Dummy Description (DMM) 66",
    "ppid": "RECIPEGOESHERE66"
  },
  {
    "processid": "UMMY",
    "stepseq": "DUMMY67",
    "stepdesc": "Dummy Description (DMM) 67",
    "ppid": "RECIPEGOESHERE67"
  },
  {
    "processid": "UMMY",
    "stepseq": "DUMMY68",
    "stepdesc": "Dummy Description (DMM) 68",
    "ppid": "RECIPEGOESHERE68"
  },
  {
    "processid": "UMMY",
    "stepseq": "DUMMY69",
    "stepdesc": "Dummy Description (DMM) 69",
    "ppid": "RECIPEGOESHERE69"
  },
  {
    "processid": "UMMY",
    "stepseq": "DUMMY70",
    "stepdesc": "Dummy Description (DMM) 70",
    "ppid": "RECIPEGOESHERE70"
  },
  {
    "processid": "UMMY",
    "stepseq": "DUMMY71",
    "stepdesc": "Dummy Description (DMM) 71",
    "ppid": "RECIPEGOESHERE71"
  },
  {
    "processid": "UMMY",
    "stepseq": "DUMMY72",
    "stepdesc": "Dummy Description (DMM) 72",
    "ppid": "RECIPEGOESHERE72"
  },
  {
    "processid": "UMMY",
    "stepseq": "DUMMY73",
    "stepdesc": "Dummy Description (DMM) 73",
    "ppid": "RECIPEGOESHERE73"
  },
  {
    "processid": "UMMY",
    "stepseq": "DUMMY74",
    "stepdesc": "Dummy Description (DMM) 74",
    "ppid": "RECIPEGOESHERE74"
  },
  {
    "processid": "UMMY",
    "stepseq": "DUMMY75",
    "stepdesc": "Dummy Description (DMM) 75",
    "ppid": "RECIPEGOESHERE75"
  },
  {
    "processid": "UMMY",
    "stepseq": "DUMMY76",
    "stepdesc": "Dummy Description (DMM) 76",
    "ppid": "RECIPEGOESHERE76"
  },
  {
    "processid": "UMMY",
    "stepseq": "DUMMY77",
    "stepdesc": "Dummy Description (DMM) 77",
    "ppid": "RECIPEGOESHERE77"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY78",
    "stepdesc": "Dummy Description (DMM) 78",
    "ppid": "RECIPEGOESHERE78"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY79",
    "stepdesc": "Dummy Description (DMM) 79",
    "ppid": "RECIPEGOESHERE79"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY80",
    "stepdesc": "Dummy Description (DMM) 80",
    "ppid": "RECIPEGOESHERE80"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY81",
    "stepdesc": "Dummy Description (DMM) 81",
    "ppid": "RECIPEGOESHERE81"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY82",
    "stepdesc": "Dummy Description (DMM) 82",
    "ppid": "RECIPEGOESHERE82"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY83",
    "stepdesc": "Dummy Description (DMM) 83",
    "ppid": "RECIPEGOESHERE83"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY84",
    "stepdesc": "Dummy Description (DMM) 84",
    "ppid": "RECIPEGOESHERE84"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY85",
    "stepdesc": "Dummy Description (DMM) 85",
    "ppid": "RECIPEGOESHERE85"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY86",
    "stepdesc": "Dummy Description (DMM) 86",
    "ppid": "RECIPEGOESHERE86"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY87",
    "stepdesc": "Dummy Description (DMM) 87",
    "ppid": "RECIPEGOESHERE87"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY88",
    "stepdesc": "Dummy Description (DMM) 88",
    "ppid": "RECIPEGOESHERE88"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY89",
    "stepdesc": "Dummy Description (DMM) 89",
    "ppid": "RECIPEGOESHERE89"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY90",
    "stepdesc": "Dummy Description (DMM) 90",
    "ppid": "RECIPEGOESHERE90"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY91",
    "stepdesc": "Dummy Description (DMM) 91",
    "ppid": "RECIPEGOESHERE91"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY92",
    "stepdesc": "Dummy Description (DMM) 92",
    "ppid": "RECIPEGOESHERE92"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY93",
    "stepdesc": "Dummy Description (DMM) 93",
    "ppid": "RECIPEGOESHERE93"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY94",
    "stepdesc": "Dummy Description (DMM) 94",
    "ppid": "RECIPEGOESHERE94"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY95",
    "stepdesc": "Dummy Description (DMM) 95",
    "ppid": "RECIPEGOESHERE95"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY96",
    "stepdesc": "Dummy Description (DMM) 96",
    "ppid": "RECIPEGOESHERE96"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY97",
    "stepdesc": "Dummy Description (DMM) 97",
    "ppid": "RECIPEGOESHERE97"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY98",
    "stepdesc": "Dummy Description (DMM) 98",
    "ppid": "RECIPEGOESHERE98"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY99",
    "stepdesc": "Dummy Description (DMM) 99",
    "ppid": "RECIPEGOESHERE99"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY100",
    "stepdesc": "Dummy Description (DMM) 100",
    "ppid": "RECIPEGOESHERE100"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY101",
    "stepdesc": "Dummy Description (DMM) 101",
    "ppid": "RECIPEGOESHERE101"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY102",
    "stepdesc": "Dummy Description (DMM) 102",
    "ppid": "RECIPEGOESHERE102"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY103",
    "stepdesc": "Dummy Description (DMM) 103",
    "ppid": "RECIPEGOESHERE103"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY104",
    "stepdesc": "Dummy Description (DMM) 104",
    "ppid": "RECIPEGOESHERE104"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY105",
    "stepdesc": "Dummy Description (DMM) 105",
    "ppid": "RECIPEGOESHERE105"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY106",
    "stepdesc": "Dummy Description (DMM) 106",
    "ppid": "RECIPEGOESHERE106"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY107",
    "stepdesc": "Dummy Description (DMM) 107",
    "ppid": "RECIPEGOESHERE107"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY108",
    "stepdesc": "Dummy Description (DMM) 108",
    "ppid": "RECIPEGOESHERE108"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY109",
    "stepdesc": "Dummy Description (DMM) 109",
    "ppid": "RECIPEGOESHERE109"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY110",
    "stepdesc": "Dummy Description (DMM) 110",
    "ppid": "RECIPEGOESHERE110"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY111",
    "stepdesc": "Dummy Description (DMM) 111",
    "ppid": "RECIPEGOESHERE111"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY112",
    "stepdesc": "Dummy Description (DMM) 112",
    "ppid": "RECIPEGOESHERE112"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY113",
    "stepdesc": "Dummy Description (DMM) 113",
    "ppid": "RECIPEGOESHERE113"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY114",
    "stepdesc": "Dummy Description (DMM) 114",
    "ppid": "RECIPEGOESHERE114"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY115",
    "stepdesc": "Dummy Description (DMM) 115",
    "ppid": "RECIPEGOESHERE115"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY116",
    "stepdesc": "Dummy Description (DMM) 116",
    "ppid": "RECIPEGOESHERE116"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY117",
    "stepdesc": "Dummy Description (DMM) 117",
    "ppid": "RECIPEGOESHERE117"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY118",
    "stepdesc": "Dummy Description (DMM) 118",
    "ppid": "RECIPEGOESHERE118"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY119",
    "stepdesc": "Dummy Description (DMM) 119",
    "ppid": "RECIPEGOESHERE119"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY120",
    "stepdesc": "Dummy Description (DMM) 120",
    "ppid": "RECIPEGOESHERE120"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY121",
    "stepdesc": "Dummy Description (DMM) 121",
    "ppid": "RECIPEGOESHERE121"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY122",
    "stepdesc": "Dummy Description (DMM) 122",
    "ppid": "RECIPEGOESHERE122"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY123",
    "stepdesc": "Dummy Description (DMM) 123",
    "ppid": "RECIPEGOESHERE123"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY124",
    "stepdesc": "Dummy Description (DMM) 124",
    "ppid": "RECIPEGOESHERE124"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY125",
    "stepdesc": "Dummy Description (DMM) 125",
    "ppid": "RECIPEGOESHERE125"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY126",
    "stepdesc": "Dummy Description (DMM) 126",
    "ppid": "RECIPEGOESHERE126"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY127",
    "stepdesc": "Dummy Description (DMM) 127",
    "ppid": "RECIPEGOESHERE127"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY128",
    "stepdesc": "Dummy Description (DMM) 128",
    "ppid": "RECIPEGOESHERE128"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY129",
    "stepdesc": "Dummy Description (DMM) 129",
    "ppid": "RECIPEGOESHERE129"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY130",
    "stepdesc": "Dummy Description (DMM) 130",
    "ppid": "RECIPEGOESHERE130"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY131",
    "stepdesc": "Dummy Description (DMM) 131",
    "ppid": "RECIPEGOESHERE131"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY132",
    "stepdesc": "Dummy Description (DMM) 132",
    "ppid": "RECIPEGOESHERE132"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY133",
    "stepdesc": "Dummy Description (DMM) 133",
    "ppid": "RECIPEGOESHERE133"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY134",
    "stepdesc": "Dummy Description (DMM) 134",
    "ppid": "RECIPEGOESHERE134"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY135",
    "stepdesc": "Dummy Description (DMM) 135",
    "ppid": "RECIPEGOESHERE135"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY136",
    "stepdesc": "Dummy Description (DMM) 136",
    "ppid": "RECIPEGOESHERE136"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY137",
    "stepdesc": "Dummy Description (DMM) 137",
    "ppid": "RECIPEGOESHERE137"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY138",
    "stepdesc": "Dummy Description (DMM) 138",
    "ppid": "RECIPEGOESHERE138"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY139",
    "stepdesc": "Dummy Description (DMM) 139",
    "ppid": "RECIPEGOESHERE139"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY140",
    "stepdesc": "Dummy Description (DMM) 140",
    "ppid": "RECIPEGOESHERE140"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY141",
    "stepdesc": "Dummy Description (DMM) 141",
    "ppid": "RECIPEGOESHERE141"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY142",
    "stepdesc": "Dummy Description (DMM) 142",
    "ppid": "RECIPEGOESHERE142"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY143",
    "stepdesc": "Dummy Description (DMM) 143",
    "ppid": "RECIPEGOESHERE143"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY144",
    "stepdesc": "Dummy Description (DMM) 144",
    "ppid": "RECIPEGOESHERE144"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY145",
    "stepdesc": "Dummy Description (DMM) 145",
    "ppid": "RECIPEGOESHERE145"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY146",
    "stepdesc": "Dummy Description (DMM) 146",
    "ppid": "RECIPEGOESHERE146"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY147",
    "stepdesc": "Dummy Description (DMM) 147",
    "ppid": "RECIPEGOESHERE147"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY148",
    "stepdesc": "Dummy Description (DMM) 148",
    "ppid": "RECIPEGOESHERE148"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY149",
    "stepdesc": "Dummy Description (DMM) 149",
    "ppid": "RECIPEGOESHERE149"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY150",
    "stepdesc": "Dummy Description (DMM) 150",
    "ppid": "RECIPEGOESHERE150"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY151",
    "stepdesc": "Dummy Description (DMM) 151",
    "ppid": "RECIPEGOESHERE151"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY152",
    "stepdesc": "Dummy Description (DMM) 152",
    "ppid": "RECIPEGOESHERE152"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY153",
    "stepdesc": "Dummy Description (DMM) 153",
    "ppid": "RECIPEGOESHERE153"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY154",
    "stepdesc": "Dummy Description (DMM) 154",
    "ppid": "RECIPEGOESHERE154"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY155",
    "stepdesc": "Dummy Description (DMM) 155",
    "ppid": "RECIPEGOESHERE155"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY156",
    "stepdesc": "Dummy Description (DMM) 156",
    "ppid": "RECIPEGOESHERE156"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY157",
    "stepdesc": "Dummy Description (DMM) 157",
    "ppid": "RECIPEGOESHERE157"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY158",
    "stepdesc": "Dummy Description (DMM) 158",
    "ppid": "RECIPEGOESHERE158"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY159",
    "stepdesc": "Dummy Description (DMM) 159",
    "ppid": "RECIPEGOESHERE159"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY160",
    "stepdesc": "Dummy Description (DMM) 160",
    "ppid": "RECIPEGOESHERE160"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY161",
    "stepdesc": "Dummy Description (DMM) 161",
    "ppid": "RECIPEGOESHERE161"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY162",
    "stepdesc": "Dummy Description (DMM) 162",
    "ppid": "RECIPEGOESHERE162"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY163",
    "stepdesc": "Dummy Description (DMM) 163",
    "ppid": "RECIPEGOESHERE163"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY164",
    "stepdesc": "Dummy Description (DMM) 164",
    "ppid": "RECIPEGOESHERE164"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY165",
    "stepdesc": "Dummy Description (DMM) 165",
    "ppid": "RECIPEGOESHERE165"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY166",
    "stepdesc": "Dummy Description (DMM) 166",
    "ppid": "RECIPEGOESHERE166"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY167",
    "stepdesc": "Dummy Description (DMM) 167",
    "ppid": "RECIPEGOESHERE167"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY168",
    "stepdesc": "Dummy Description (DMM) 168",
    "ppid": "RECIPEGOESHERE168"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY169",
    "stepdesc": "Dummy Description (DMM) 169",
    "ppid": "RECIPEGOESHERE169"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY170",
    "stepdesc": "Dummy Description (DMM) 170",
    "ppid": "RECIPEGOESHERE170"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY171",
    "stepdesc": "Dummy Description (DMM) 171",
    "ppid": "RECIPEGOESHERE171"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY172",
    "stepdesc": "Dummy Description (DMM) 172",
    "ppid": "RECIPEGOESHERE172"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY173",
    "stepdesc": "Dummy Description (DMM) 173",
    "ppid": "RECIPEGOESHERE173"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY174",
    "stepdesc": "Dummy Description (DMM) 174",
    "ppid": "RECIPEGOESHERE174"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY175",
    "stepdesc": "Dummy Description (DMM) 175",
    "ppid": "RECIPEGOESHERE175"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY176",
    "stepdesc": "Dummy Description (DMM) 176",
    "ppid": "RECIPEGOESHERE176"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY177",
    "stepdesc": "Dummy Description (DMM) 177",
    "ppid": "RECIPEGOESHERE177"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY178",
    "stepdesc": "Dummy Description (DMM) 178",
    "ppid": "RECIPEGOESHERE178"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY179",
    "stepdesc": "Dummy Description (DMM) 179",
    "ppid": "RECIPEGOESHERE179"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY180",
    "stepdesc": "Dummy Description (DMM) 180",
    "ppid": "RECIPEGOESHERE180"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY181",
    "stepdesc": "Dummy Description (DMM) 181",
    "ppid": "RECIPEGOESHERE181"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY182",
    "stepdesc": "Dummy Description (DMM) 182",
    "ppid": "RECIPEGOESHERE182"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY183",
    "stepdesc": "Dummy Description (DMM) 183",
    "ppid": "RECIPEGOESHERE183"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY184",
    "stepdesc": "Dummy Description (DMM) 184",
    "ppid": "RECIPEGOESHERE184"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY185",
    "stepdesc": "Dummy Description (DMM) 185",
    "ppid": "RECIPEGOESHERE185"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY186",
    "stepdesc": "Dummy Description (DMM) 186",
    "ppid": "RECIPEGOESHERE186"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY187",
    "stepdesc": "Dummy Description (DMM) 187",
    "ppid": "RECIPEGOESHERE187"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY188",
    "stepdesc": "Dummy Description (DMM) 188",
    "ppid": "RECIPEGOESHERE188"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY189",
    "stepdesc": "Dummy Description (DMM) 189",
    "ppid": "RECIPEGOESHERE189"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY190",
    "stepdesc": "Dummy Description (DMM) 190",
    "ppid": "RECIPEGOESHERE190"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY191",
    "stepdesc": "Dummy Description (DMM) 191",
    "ppid": "RECIPEGOESHERE191"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY192",
    "stepdesc": "Dummy Description (DMM) 192",
    "ppid": "RECIPEGOESHERE192"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY193",
    "stepdesc": "Dummy Description (DMM) 193",
    "ppid": "RECIPEGOESHERE193"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY194",
    "stepdesc": "Dummy Description (DMM) 194",
    "ppid": "RECIPEGOESHERE194"
  },
  {
    "processid": "MYDU",
    "stepseq": "DUMMY195",
    "stepdesc": "Dummy Description (DMM) 195",
    "ppid": "RECIPEGOESHERE195"
  }
];