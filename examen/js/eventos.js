var iniciarApp = function()
{
	var bajaAlmacen = function()
	{
		event.preventDefault();
		var datos = "txtIdAlmacen="+$("#txtIdAlmacen").val();
		var parametros = "accion=bajaAlmacen&"+datos+
		                 "&id="+Math.random();
		$.ajax({
			beforeSend:function(){
				console.log("Baja almacen");
			},
			cache: false,
			type: "POST",
			dataType: "json",
			url:"php/funciones.php",
			data:parametros,
			success: function(response){
				if(response.respuesta == true)
				{
					alert("Almacen dado de baja correctamente");
				}
				else
				{
					alert("No se pudo dar de baja la información");
				}
			},
			error: function(xhr,ajax,thrownError){

			}
		});
	}
	$("#frmBajaAlmacen").on("submit",bajaAlmacen);

}
$(document).on("ready",iniciarApp);
