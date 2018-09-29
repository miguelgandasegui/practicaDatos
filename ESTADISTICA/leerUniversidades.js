function leerUniversidades() {
	universidadesTR = document.getElementsByTagName('table')[0].getElementsByTagName('tr')
    str='[';
    for (i=1;i<universidadesTR.length;i++) {
		uni = universidadesTR[i].children[0].textContent.replace('*','');
   		provincia= universidadesTR[i].children[1].textContent;
	  	plazas=universidadesTR[i].children[3].textContent.replace('Dato no facilitado','0');
	  	nota=universidadesTR[i].children[5].textContent.replace(',','.');
		nota=nota.replace('Dato no facilitado','0');
	  	precio=universidadesTR[i].children[6].textContent.replace('.','');
	    precio=precio.replace('€','');
	  	titularidad=universidadesTR[i].children[7].textContent.replace('ú','u');
      	str += "['" + uni
      	str += "','" + provincia
	  	str += "'," + plazas
	  	str += ",'" + nota
	  	str += "'," + precio
	  	str += ",'" + titularidad +"'],"
    }

	str = str.substring(0, str.length-1);
  	str += "]"
    return str;
}
