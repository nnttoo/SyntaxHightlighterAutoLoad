var CostumAutoLoderSyntaxHighlighter = function(){
	var pluginDir = "syntaxhighlighter_3.0.83";
	var scriptDir = pluginDir + "/scripts";
	var stylePath = pluginDir + "/styles/shCoreDefault.css"; 
	var loadScript = function(type,src,callback){ 
		var elemLoad = document.createElement(type);
			elemLoad.onload = function(){ 
				if(typeof callback =='function'){
					callback();
				}
			}
			if(type =='script'){
				elemLoad.src = src;
				document.body.appendChild(elemLoad);
			} else {
				elemLoad.href = src;	
				elemLoad.rel = 'stylesheet';	
				var head = document.getElementsByTagName('head')[0];
				head.appendChild(elemLoad);				
			}

	}; 
	var loadAll = function(){ 
		loadScript('link',stylePath,function(){
			loadScript('script',scriptDir + "/shCore.js",function(){			
				loadScript('script',scriptDir + "/shAutoloader.js",function(){
					loadSyntaxLoader();
				}); 
			});
		});
		
	};
	
	var startLoad = function(){
		var preElem =  document.getElementsByTagName('pre');
		if(preElem.length > 0){
			loadAll();
		}
	}
	startLoad();
	var loadSyntaxLoader = function(){ 
	SyntaxHighlighter.autoloader(
		'applescript			'+scriptDir+'/shBrushAppleScript.js',
		'actionscript3 as3		'+scriptDir+'/shBrushAS3.js',
		'bash shell				'+scriptDir+'/shBrushBash.js',
		'coldfusion cf			'+scriptDir+'/shBrushColdFusion.js',
		'cpp c					'+scriptDir+'/shBrushCpp.js',
		'c# c-sharp csharp		'+scriptDir+'/shBrushCSharp.js',
		'css					'+scriptDir+'/shBrushCss.js',
		'delphi pascal			'+scriptDir+'/shBrushDelphi.js',
		'diff patch pas			'+scriptDir+'/shBrushDiff.js',
		'erl erlang				'+scriptDir+'/shBrushErlang.js',
		'groovy					'+scriptDir+'/shBrushGroovy.js',
		'haxe hx				'+scriptDir+'/shBrushHaxe.js',
		'java					'+scriptDir+'/shBrushJava.js',
		'jfx javafx				'+scriptDir+'/shBrushJavaFX.js',
		'js jscript javascript	'+scriptDir+'/shBrushJScript.js',
		'perl pl				'+scriptDir+'/shBrushPerl.js',
		'php					'+scriptDir+'/shBrushPhp.js',
		'text plain				'+scriptDir+'/shBrushPlain.js',
		'py python				'+scriptDir+'/shBrushPython.js',
		'ruby rails ror rb		'+scriptDir+'/shBrushRuby.js',
		'scala					'+scriptDir+'/shBrushScala.js',
		'sql					'+scriptDir+'/shBrushSql.js',
		'vb vbnet				'+scriptDir+'/shBrushVb.js',
		'xml xhtml xslt html	'+scriptDir+'/shBrushXml.js'
	); 
    SyntaxHighlighter.all();
	 
	}
};

CostumAutoLoderSyntaxHighlighter();