var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var Converter = require("csvtojson").Converter;
var fs = require('fs');

gulp.task('default', function(){
	/*
	var converter = new Converter({});
	converter.fromFile("./source/utils/stepdata/steps.csv",function(err,result){
		if (err) throw err;
		fs.writeFile("./source/utils/stepdata/steps.json", JSON.stringify(result, null, 2), 'utf8', function (err) {
  			if (err) throw err;
  			else console.log('[worklist-generator] saved new steps.json file');
		});
	
	});
	*/
	
	return browserify('./source/app.js')
			.transform(babelify, {presets: "react"})
			.bundle()
			.pipe(source('worklist-generator.js'))
			.pipe(gulp.dest('./build/'));
});



