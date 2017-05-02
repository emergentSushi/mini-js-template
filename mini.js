function render(data, id) {
	var template = document.getElementById(id).innerHTML;
	var tokens = template.match(/\{\{([a-zA-Z\d:]+)\}\}/g)
    var match;
	for (var x = 0; x < tokens.length; x++) {
		var prop = tokens[x].slice(2, tokens[x].length - 2)
		  , subtemplate = prop.split(':')
		  , val = '';
			
		if (subtemplate.length == 3) {
			if (data.hasOwnProperty(subtemplate[1])) {
				for (var i = 0; i < data[subtemplate[1]].length; i++) {
					val += render(data[subtemplate[1]][i], subtemplate[2]);
				}
			}
		}
		else if (data.hasOwnProperty(prop)) {
			val = data[prop];
		}

		
		template = template.split(tokens[x]).join(val);
	}

	return template;
}