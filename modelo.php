<?php
/**
* Clase conexion
*/
class Conexion
{
	public $conexion;
	function __construct()
	{
		$this->conexion = mysqli_connect("192.168.43.140", "root", "", "iglesiareydereyes");
	}
}

/**
* Clase Iglesia
*/
class Iglesia extends Conexion
{
	
	function __construct()
	{
		
	}

	public function obtenerDatos(){
		parent:: __construct();
		if (!$this->conexion) 
			echo "Error al conectar al servidor de Bases de Datos";
		else{
			$query = "call getInformacion()";
			$informacion = $this->conexion->query($query);
			while ($info = $informacion->fetch_assoc()) {
				$datosInformacion = array();
				foreach ($info as $key => $value) {
					$datosInformacion[$key] = $value;
				}
			}
			return $datosInformacion;
		}
	}
}

?>