var year = getYear();

function copyright(){
	str = 'Copyright(C)BIGLOBE Inc. 1996-'+year;
	document.write(str);
}

function getYear(){
	d = new Date();
	return d.getFullYear();
}