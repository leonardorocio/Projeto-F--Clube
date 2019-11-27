function validaFaleConosco() {

	var nome=document.frmfaleconosco.txtnome.value;
	var expRegnome= new RegExp("^[A-zÀ-ü]{3,}([ ]{1}[A-zÀ-ü]{2,})+$");
	if(!expRegnome.test(nome)){
		alert("Preencha o Campo Nome completo!!!");
		document.frmfaleconosco.txtnome.focus();
		return false;
	}

	var fone = document.frmfaleconosco.txtfone.value;
	var expRegfone= new RegExp("^[(]{1}[1-9]{2}[)]{1}[0-9]{4,5}[-]{1}[0-9]{4}$");
	if(!expRegfone.test(fone)){
	alert("Preencha o Campo Telefone ou formato inválido !!!");
	document.frmfaleconosco.txtfone.focus();
	return false;
	}

	var email = document.frmfaleconosco.txemail.value;
	var expRegemail= new RegExp("/[^@-.w]|^[_@.-]|[._-]{2}|[@.]{2}|(@)[^@]*1/");
	if(!expRegemail.test(email)){
	alert("Preencha o Campo Email ou formato inválido !!!");
	document.frmfaleconosco.txemail.focus();
	return false;

	}
}
function verificaMotivo(motivo) {

	var elemento = document.getElementById("opcaoProduto");

	if(motivo=="PR"){

		var select = document.createElement("select");

		select.setAttribute("name","selproduto");

		var option = document.createElement("option");

		option.setAttribute("value"," ");

		var texto = document.createTextNode("Escolha")

		option.appendChild(texto);

		select.appendChild(option);

		var option = document.createElement("option");
		option.setAttribute("value","AR");

		var texto = document.createTextNode("Ar Condicionado")
		option.appendChild(texto);
		select.appendChild(option);

		var option = document.createElement("option");
		option.setAttribute("value","AQ");

		var texto = document.createTextNode("Aquecedor")
		option.appendChild(texto);
		select.appendChild(option);

		elemento.appendChild(select);

	}else{
		if(elemento.firstChild)
			elemento.removeChild(elemento.firstChild)
	}
}