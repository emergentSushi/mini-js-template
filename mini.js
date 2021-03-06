function render(data, id) {
	var template = document.getElementById(id).innerHTML;
	var tokens = template.match(/\{\{([a-zA-Z\d:\-_]+)\}\}/g)
    
	for (var x = 0; x < tokens.length; x++) {
		var prop = tokens[x].slice(2, tokens[x].length - 2)
		  , val = '';
			
		if (data.hasOwnProperty(prop)) {
			val = data[prop];
		}
		else {
			var subtemplate = prop.split(':');
			if (subtemplate.length == 3) {
				var d = data[subtemplate[1]];
				for (var i = 0; i < d.length; i++) {
					val += render(d[i], subtemplate[2]);
				}
			}
		}
		
		template = template.split(tokens[x]).join(val);
	}

	return template;
}