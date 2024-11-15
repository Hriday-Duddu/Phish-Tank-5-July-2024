function geoplugin_request() { return '49.43.232.5';} 
function geoplugin_status() { return '200';} 
function geoplugin_credit() { return 'Some of the returned data includes GeoLite2 data created by MaxMind, available from <a href=\'https://www.maxmind.com\'>https://www.maxmind.com</a>.';} 
function geoplugin_delay() { return '2ms';} 
function geoplugin_city() { return 'Hyderabad';} 
function geoplugin_region() { return 'Telangana';} 
function geoplugin_regionCode() { return 'TS';} 
function geoplugin_regionName() { return 'Telangana';} 
function geoplugin_areaCode() { return '';} 
function geoplugin_dmaCode() { return '';} 
function geoplugin_countryCode() { return 'IN';} 
function geoplugin_countryName() { return 'India';} 
function geoplugin_inEU() { return 0;} 
function geoplugin_euVATrate() { return ;} 
function geoplugin_continentCode() { return 'AS';} 
function geoplugin_latitude() { return '17.3724';} 
function geoplugin_longitude() { return '78.4378';} 
function geoplugin_locationAccuracyRadius() { return '100';} 
function geoplugin_timezone() { return 'Asia/Kolkata';} 
function geoplugin_currencyCode() { return 'INR';} 
function geoplugin_currencySymbol() { return '&#8377;';} 
function geoplugin_currencySymbol_UTF8() { return '₹';} 
function geoplugin_currencyConverter(amt, symbol) { 
	if (!amt) { return false; } 
	var converted = amt * 83.4771; 
	if (converted <0) { return false; } 
	if (symbol === false) { return Math.round(converted * 100)/100; } 
	else { return '&#8377;'+(Math.round(converted * 100)/100);} 
	return false; 
} 
