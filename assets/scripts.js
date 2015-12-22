function btnImageCallback (h) {
	var markitupFieldID = h.textarea.id;
	newPoolWindow('index.php?page=mediapool/media&opener_input_field='+markitupFieldID);
}

function btnImageCallbackInsert (id, url, linktext) {
	window.opener.$.markItUp({
		target:'#'+id,
		openWith:'!'+url+'('+linktext+')!'
	});
}

function btnLinkExternalCallback (h) {
	var linktext = h.selection;
	if (linktext == '') {
		var linktext = prompt('Linktext?');
	}
	
	var linkurl = prompt('URL?');
	
	return '"'+linktext+'":'+linkurl;
}

function btnLinkInternalCallback (h) {
	var markitupFieldID = h.textarea.id;
	openLinkMap(markitupFieldID);
}

function btnLinkInternalCallbackInsert (id, url, linktext) {
	window.opener.$.markItUp({
		target:'#'+id,
		openWith: '"',
		closeWith: '('+linktext+')":'+url
	});
}

function btnLinkMailtoCallback (h) {
	var linktext = h.selection;
	if (linktext == '') {
		var linktext = prompt('Linktext?');
	}
  var emailaddress = prompt('Emailaddress?');
  
  return '"'+linktext+'":mailto:'+emailaddress;
}

function btnTableCallback (h) {
	cols = prompt('Wie viele Spalten?');
	rows = prompt('Wie viele Zeilen?');
	html = '';
	
	for (r = 0; r < rows; r++) {
		for (c = 0; c < cols; c++) {
			html += '|ABC';
		}
		html += '|\n';
	}
	
	return html;
}

function btnOrderedlistCallback (h) {
	var selection = h.selection;
	
	var lines = selection.split(/\r?\n/);
	var r = "";
	var start = "# ";
	for (var i=0; i < lines.length; i++) {
		line = lines[i];
		
		r = r + start + line;
		
		if (i != lines.length - 1) {
			r += "\n";
		}
	}
	return r;
}

function btnUnorderedlistCallback (h) {
	var selection = h.selection;
	
	var lines = selection.split(/\r?\n/);
	var r = "";
	var start = "* ";
	for (var i=0; i < lines.length; i++) {
		line = lines[i];
		
		r = r + start + line;
		
		if (i != lines.length - 1) {
			r += "\n";
		}
	}
	return r;
}