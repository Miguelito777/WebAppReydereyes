<?php
	include 'modelo.php';
	session_start();

	if (isset($_GET["cargarIglesia"])) {
		$_SESSION["Iglesia"] = new Iglesia();
	}

	if (isset($_GET["datosColumnas"])) {
		$iglesiaReydereyes = $_SESSION["Iglesia"];
		$datosInformacion = $iglesiaReydereyes->obtenerDatos();
		echo json_encode($datosInformacion);
	}
?>