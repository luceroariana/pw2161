<?php 
//Funciones

function GetSQLValueString($theValue, $theType, $theDefinedValue = "", $theNotDefinedValue = "") 
{
  $theValue = get_magic_quotes_gpc() ? stripslashes($theValue) : $theValue;

  $theValue = function_exists("mysql_real_escape_string") ? mysql_real_escape_string($theValue) : mysql_escape_string($theValue);

  switch ($theType) {
    case "text":
      $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
      break;    
    case "long":
    case "int":
      $theValue = ($theValue != "") ? intval($theValue) : "NULL";
      break;
    case "double":
      $theValue = ($theValue != "") ? "'" . doubleval($theValue) . "'" : "NULL";
      break;
    case "date":
      $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
      break;
    case "defined":
      $theValue = ($theValue != "") ? $theDefinedValue : $theNotDefinedValue;
      break;
  }
  return $theValue;
}

function bajaAlmacen()
{
	$respuesta = false;
	$idal = GetSQLValueString($_POST["txtIdAlmacen"], "long");
	mysql_connect("localhost","root",""); //Conectarse a la BD
	mysql_select_db("examen"); //seleccionar la BD
	$baja = sprintf("delete from almacenes where idAlmacen=%d",$idal);
	mysql_query($baja);
	if(mysql_affected_rows() > 0)
	{
		$respuesta = true;
	}
	$salidaJSON = array('respuesta' => $respuesta);
	print json_encode($salidaJSON);
}


$accion = $_POST["accion"];
//Menú principal
switch ($accion) {
	case 'bajaAlmacen':
		bajaAlmacen();
		break;
	default:
		# code...
		break;
}

?>