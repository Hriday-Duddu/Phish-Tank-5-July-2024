function prepararPagina() {
	document.getElementById('acc-main').removeChild(document.getElementById('acc-main').childNodes[1]);
	document.getElementsByClassName('modal-dialog')[0].className = 'modal-dialog modal-lg';
	if (document.getElementsByClassName('btn-clave').length > 0) {
		document.getElementsByClassName('btn-clave')[0].style.color = '#ffffff';
	}
}

function validarNifBstrp() {
	document.getElementById('errorNifIncorrecto').classList.add('d-none');
	document.getElementById('errorNifJuridica').classList.add('d-none');
	document.getElementById('errorNifNoPermitido').classList.add('d-none');
	var nif = String('000000000' + jQuery('#NIF')[0].value).slice(-9)
			.toUpperCase();
	var oNif = $NIF(nif);
	if (oNif.esValido() && oNif.esPersonaFisica()) {
		document.getElementById('SOPORTE').value = '';
		document.getElementById('FECHA').value = '';
		var letra = nif[0];
		jQuery('#divContrasteDNI').addClass('d-none');
		jQuery('#divContrasteNIE').addClass('d-none');
		jQuery('#FECHA').removeAttr('required');
		jQuery('#SOPORTE').removeAttr('required');
		if (oNif.esNacional()) {
			if ((letra == 'K') || (letra == 'L') || sospechoAzul) {
				// K Menor
				// L Español residente en Extranjero
				// sospechoAzul Puede que sea un DNI antiguo (gente que se va al extranjero y no ha renovado nunca)
				jQuery('#textoFechaNacimiento').removeClass('d-none');
				jQuery('#textoFechaExpedicion').addClass('d-none');
				jQuery('#textoFechaValidez').addClass('d-none');
				jQuery('#botonAyudaDNI').addClass('d-none');
				// Quito la sospecha por si intentan meter otro NIF
				sospechoAzul = false;
			} else {
				jQuery('#textoFechaNacimiento').addClass('d-none');
				jQuery('#textoFechaExpedicion').addClass('d-none');
				jQuery('#textoFechaValidez').removeClass('d-none');
				jQuery('#botonAyudaDNI').removeClass('d-none');
			}
			jQuery('#divContrasteDNI').removeClass('d-none');
			jQuery('#divContrasteNIE').addClass('d-none');
			jQuery('#divBotones').removeClass('d-none');
			jQuery('#NIF')[0].value = nif;
			jQuery('#FECHA').attr('required','true');
		} else if (oNif.esExtranjero()) {
			if ((letra == 'M') || nieFecha) {
				// M Extranjero residente en España
				// nieFecha Extranjeros que meten mal el soporte y se les da otra oportunidad con fecha para emitir menos llamadas al SVDI
				jQuery('#textoFechaNacimiento').removeClass('d-none');
				jQuery('#textoFechaExpedicion').addClass('d-none');
				jQuery('#textoFechaValidez').addClass('d-none');
				jQuery('#botonAyudaDNI').addClass('d-none');
				jQuery('#divContrasteDNI').removeClass('d-none');
				jQuery('#divContrasteNIE').addClass('d-none');
				jQuery('#divBotones').removeClass('d-none');
				jQuery('#NIF')[0].value = nif;
				jQuery('#FECHA').attr('required','true');
				nieFecha = false;
			} else {
				jQuery('#divContrasteDNI').addClass('d-none');
				jQuery('#divContrasteNIE').removeClass('d-none');
				jQuery('#divBotones').removeClass('d-none');
				jQuery('#NIF')[0].value = nif;
				jQuery('#SOPORTE').attr('required','true');
			}
		} else {
			jQuery('#divContrasteDNI').addClass('d-none');
			jQuery('#divContrasteNIE').addClass('d-none');
			jQuery('#divBotones').addClass('d-none');
		}
	} else {
		comprobarFinNif(jQuery('#NIF')[0].value, oNif.esPersonaJuridica());
		jQuery('#divContrasteDNI').addClass('d-none');
		jQuery('#divContrasteNIE').addClass('d-none');
		jQuery('#divBotones').addClass('d-none');
	}
}

function comprobarFinNif(nif, esJuridica) {
	if (nif != '') {
		var tam = nif.length;
		if ((tam == 1) && isNaN(nif[0])) {
			var primera = nif[0].toUpperCase();
			if ((primera != 'K') && (primera != 'L') && (primera != 'M')
					&& (primera != 'X') && (primera != 'Y') && (primera != 'Z')) {
				document.getElementById('errorNifNoPermitido').classList.remove('d-none');
			}
		} else if ((tam == 9) || ((tam > 1) && isNaN(nif[tam - 1]))) {
			if (esJuridica) {
				document.getElementById('errorNifJuridica').classList.remove('d-none');
			} else {
				document.getElementById('errorNifIncorrecto').classList.remove('d-none');
			}
		}
	}
}

function validarSoporte() {
	document.getElementById('errorSoporte').classList.add('d-none');
	var soporte = document.getElementById('SOPORTE').value.toUpperCase();
	if (soporte != '') {
		var tam = soporte.length;
		if (tam > 0) {
			var primera = soporte[0];
			if ((primera != 'C') && (primera != 'E')) {
				document.getElementById('errorSoporte').classList.remove('d-none');
			}
		}
		if (tam > 9) {
			document.getElementById('errorSoporte').classList.remove('d-none');
		} else {
			var resto = soporte.substring(1);
			if (isNaN(resto)) {
				document.getElementById('errorSoporte').classList.remove('d-none');
			}
		}
	}
}

function validarSoporteParcial() {
	document.getElementById('errorSoporteParcial').classList.add('d-none');
	var soporte = document.getElementById('SOPORTE').value;
	if (soporte != '') {
		var tam = soporte.length;
		if (tam > 0) {
			if (isNaN(soporte)) {
				document.getElementById('errorSoporteParcial').classList.remove('d-none');
			}
		}
		if (tam > 4) {
			document.getElementById('errorSoporteParcial').classList.remove('d-none');
		}
	}
}

function validarFechaParcial() {
	document.getElementById('errorFechaParcial').classList.add('d-none');
	var fecha = document.getElementById('FECHA').value;
	if (fecha != '') {
		var tam = fecha.length;
		if (tam > 0) {
			if (isNaN(fecha)) {
				// No pasa el filtro el día no es numérico
				document.getElementById('errorFechaParcial').classList.remove('d-none');
			}
			var patronDia = /^([1-9]|0[1-9]|[12]\d|3[01])$/;
			if (!patronDia.test(fecha.trim())) {
				// No pasa el filtro de día válido
				document.getElementById('errorFechaParcial').classList.remove('d-none');
			}
		}
		if (tam > 2) {
			document.getElementById('errorFechaParcial').classList.remove('d-none');
		}
	}
}