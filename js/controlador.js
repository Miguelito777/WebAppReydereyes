var iglesia = new Iglesia();
var elementoBorrar;
var fechaBuscar = document.getElementsByTagName("select")[0].value;
var lugarBuscar = document.getElementsByTagName("select")[1].value;


function obtenerParametros(){
	var fechas;
	var lugares;
	var actividades;
	iglesia.getActividadesFuturas();
	iglesia.getFechas();
	iglesia.getLugar();
	document.getElementById("tablaActFut").innerHTML = "<h1>Buscando las actividades futuras</h1>";
}

$("select").change(function(){
	var fechaBuscar = document.getElementsByTagName("select")[0].value;
	var lugarBuscar = document.getElementsByTagName("select")[1].value;
	
	if (lugarBuscar == '0' && fechaBuscar != '0'){
		iglesia.getActividadesFecha(fechaBuscar);
		document.getElementById("tablaActFut").innerHTML = "<h1>Buscando las actividades de la fecha seleccionada</h1>";
	};
	if (fechaBuscar == '0' && lugarBuscar != '0'){
		iglesia.getActividadesLugar(lugarBuscar);
		document.getElementById("tablaActFut").innerHTML = "<h1>Buscando las actividades del lugar seleccionado</h1>";
	};
	if (fechaBuscar != '0' && lugarBuscar != '0'){
		iglesia.getActividadesLugarFecha(fechaBuscar,lugarBuscar);
		document.getElementById("tablaActFut").innerHTML = "<h1>Buscando las actividades del lugar y fecha seleccionados</h1>";
	};
})

function setActividadesResultados(){
	document.getElementById("tablaActFut").innerHTML = "";
	$("#tablaActFut").append("<table class='table table-striped' id='tablaActFuturas'><tr class='success'><th>Actividad</th><th>Fecha</th><th>Lugar</th><th>Hora</th><th>Descripcion</th><th>Modificar</th><th>Borrar</th></tr></table>");
	for(var i in iglesia.actividadesTodas){
		$("#tablaActFuturas").append("<tr><td>"+iglesia.actividadesTodas[i].nombre+"</td><td>"+iglesia.actividadesTodas[i].fecha+"</td><td>"+iglesia.actividadesTodas[i].lugar+"</td><td>"+iglesia.actividadesTodas[i].hora+"</td><td>"+iglesia.actividadesTodas[i].descripcion+"</td><td><button type='button' class='btn btn-link' id="+i+" data-toggle='modal' data-target='#updateActividad' onclick = 'updateActividad(this.id)'>modificar</button></td><td><button type='button' class='btn btn-link' id="+i+" onclick = 'deleteActividad(this.id)'>borrar</button></td></tr>");
	}
}

function crearActividad(){
	// Aqui nos quedamos
}

function deleteActividad(posicionBorrar){
	elementoBorrar = posicionBorrar;
	var confirmacion = confirm("¿Esta seguro que borrar "+iglesia.actividadesTodas[posicionBorrar].nombre+"?");
	if (confirmacion)
		iglesia.actividadesTodas[posicionBorrar].deleteProducto();
}

function deleteProductoBD(){
	iglesia.actividadesTodas.splice(elementoBorrar,1);
	document.getElementById("tablaActFut").innerHTML = "";
	$("#tablaActFut").append("<table class='table table-striped' id='tablaActFuturas'><tr class='success'><th>Actividad</th><th>Fecha</th><th>Lugar</th><th>Hora</th><th>Descripcion</th><th>Modificar</th><th>Borrar</th></tr></table>");
	for(var i in iglesia.actividadesTodas){
		$("#tablaActFuturas").append("<tr><td>"+iglesia.actividadesTodas[i].nombre+"</td><td>"+iglesia.actividadesTodas[i].fecha+"</td><td>"+iglesia.actividadesTodas[i].lugar+"</td><td>"+iglesia.actividadesTodas[i].hora+"</td><td>"+iglesia.actividadesTodas[i].descripcion+"</td><td><button type='button' class='btn btn-link' id="+i+" data-toggle='modal' data-target='#updateActividad' onclick = 'updateActividad(this.id)'>modificar</button></td><td><button type='button' class='btn btn-link' id="+i+" onclick = 'deleteActividad(this.id)'>borrar</button></td></tr>");
	}
}	

$("input").keyup(function(){
	var fechaBuscar = document.getElementsByTagName("select")[0].value;
	var lugarBuscar = document.getElementsByTagName("select")[1].value;
	if (this.value == "")
		iglesia.getActividadesFuturas();
	else{
		iglesia.getActividadesCoincidencia(this.value);
	}
	
	document.getElementById("tablaActFut").innerHTML = "<h1>Buscando las actividades por coincidencia</h1>";
}) 		

function setBusquedaActividades(){
	document.getElementById("tablaActFut").innerHTML = " ";
	$("#tablaActFut").append("<table class='table table-striped' id='tablaActFuturas'><tr class='success'><th>Actividad</th><th>Fecha</th><th>Lugar</th><th>Hora</th><th>Descripcion</th><th>Modificar</th><th>Borrar</th></tr></table>");
	for(var i in iglesia.getActividadesFuturasTodas){
		$("#tablaActFuturas").append("<tr><td>"+iglesia.actividadesTodas[i].nombre+"</td><td>"+iglesia.actividadesTodas[i].fecha+"</td><td>"+iglesia.actividadesTodas[i].lugar+"</td><td>"+iglesia.actividadesTodas[i].hora+"</td><td>"+iglesia.actividadesTodas[i].descripcion+"</td><td><button type='button' class='btn btn-link' id="+i+" data-toggle='modal' data-target='#updateProducto' onclick = 'updateActividad(this.id)'>modificar</button></td><td><button type='button' class='btn btn-link' id="+i+" onclick = 'deleteActividad(this.id)'>Borrar</button></td></tr>");
	}
}


/**
* Sección que interactua con la parte del cliente del sistema
*/


function datosIndex(){
	iglesia.cargarIglesia();
	iglesia.datosColumnas();
}

function mostrarDatosIndex(){
	if (document.getElementById("gracia") == undefined) {
		$("#datosInicio").append("<table class='table table-hover' id='tablaDatosInicio'><tr><th>Gracia</th><th>Fe</th><th>Mision</th><th>Editar</th></tr></table>")
		$("#tablaDatosInicio").append("<tr><td>"+iglesia.datosIndex.gracia+"</td><td>"+iglesia.datosIndex.fe+"</td><td>"+iglesia.datosIndex.mision+"</td><td><button type='button' class='btn btn-link' onclick='editarDatosInicio()'>Editar</button></td></tr>");
	}
	else{
		document.getElementById("gracia").innerHTML = "<p class='lead'>"+iglesia.datosIndex.gracia+"</p>";
		document.getElementById("fe").innerHTML = "<p class='lead'>"+iglesia.datosIndex.fe+"</p>";
		document.getElementById("mision").innerHTML = "<p class='lead'>"+iglesia.datosIndex.mision+"</p>";
	}
}

function editarDatosInicio(){
	alert("Aqui te quedaste Miguelito, en ontro momento seguis");
}