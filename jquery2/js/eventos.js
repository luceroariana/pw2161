var iniciaApp = function()
{
	var validarEntrada = function()
	{
		var usuario = $("#txtUsuario").val();
		var clave = $("#txtClave").val();
		//VALIDACIONES
		//1.- Que no sean vacíos
		if(usuario == "")
		{
			alert("El usuario no debe ser vacío");
			$("#txtUsuario").focus();
		}
		if(clave == "")
		{
			alert("La clave no debe ser vacía");
			$("#txtClave").focus();
		}
		console.log("Se disparó el submit");
	}
	$("#frmValidaEntrada").on("submit",validarEntrada);
}
$(document).on("ready",iniciaApp);