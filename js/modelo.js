/*
* Clase Iglesia, que inicia las aciones
*/
function Iglesia (){
	this.actividadesTodas = [];
	this.actividadespasadas = [];

}
Iglesia.prototype.getActividadesFuturas = function(){
	_this = this;
	$.ajax({
		data : {"actividadesFuturas":true},
		url : "http://192.168.43.72/iglesiaConexion/controlador.php",
		type : "GET",
		Cache: false,
		success: function (data){
			actividadesFuturas = $.parseJSON(data);
			for (var i in actividadesFuturas){
				var actividad = new Actividad();
				actividad._id = actividadesFuturas[i][0];
				actividad.nombre = actividadesFuturas[i][1];
				actividad.fecha = actividadesFuturas[i][2];
				actividad.lugar = actividadesFuturas[i][3];
				actividad.hora = actividadesFuturas[i][4];
				actividad.descripcion = actividadesFuturas[i][5]; 
				_this.actividadesTodas.push(actividad);
			}
			setBusquedaActividades();
		}
	})
}

Iglesia.prototype.getFechas = function (){
	_this = this;
	$.ajax({
		data : {"getFechas" : true},
		url : "http://192.168.43.72/iglesiaConexion/controlador.php",
		type : "GET",
		Cache: false,
		success: function (data){
			_this.fechasTodas = $.parseJSON(data);
			for(var i in _this.fechasTodas){
				$("#fechas").append("<option value="+_this.fechasTodas[i][0]+">"+_this.fechasTodas[i][0]+"</option>");
			}
			$("#fechas").append("<option value=0 selected>Seleccione fecha</option>");
		}
	})
}

Iglesia.prototype.getLugar = function (){
	_this = this;
	$.ajax({
		data : {"getLugares" : true},
		url : "http://192.168.43.72/iglesiaConexion/controlador.php",
		type : "GET",
		Cache: false,
		success: function (data){
			_this.lugaresTodas = $.parseJSON(data);
			for(var i in _this.lugaresTodas){
				$("#lugares").append("<option value="+_this.lugaresTodas[i][0]+">"+_this.lugaresTodas[i][0]+"</option>");
			}		
			$("#lugares").append("<option value=0 selected>Seleccione Lugar</option>");
		}
	})
}

Iglesia.prototype.getActividadesFecha = function(fecha){
	_this = this;
	_this.actividadesTodas = [];
	$.ajax({
		data : {"getActividadesFecha":fecha},
		url : "http://192.168.43.72/iglesiaConexion/controlador.php",
		type : "GET",
		Cache : false,
		success : function(data){
			var actividadesFecha = $.parseJSON(data);
			for(var i in actividadesFecha){
				var actividad = new Actividad();
				actividad._id = actividadesFecha[i].idActividad;
				actividad.nombre = actividadesFecha[i].actividadNombre;
				actividad.fecha = actividadesFecha[i].fecha;
				actividad.lugar = actividadesFecha[i].actividadLugar;
				actividad.hora = actividadesFecha[i].actividadHora;
				actividad.descripcion = actividadesFecha[i].actividadDescripcion;
				_this.actividadesTodas.push(actividad);
			}
			setActividadesResultados();
		}
	})
}

Iglesia.prototype.getActividadesLugar = function(lugarBuscar){
	_this = this;
	_this.actividadesTodas = [];
	$.ajax({
		data : {"getActividadesLugar" : lugarBuscar},
		url : "http://192.168.43.72/iglesiaConexion/controlador.php",
		type : "GET",
		Cache : false,
		success : function(data){
			var actividadesLugar = $.parseJSON(data);
			for(var i in actividadesLugar){
				var actividad = new Actividad();
				actividad._id = actividadesLugar[i].idActividad;
				actividad.nombre = actividadesLugar[i].actividadNombre;
				actividad.fecha = actividadesLugar[i].fecha;
				actividad.lugar = actividadesLugar[i].actividadLugar;
				actividad.hora = actividadesLugar[i].actividadHora;
				actividad.descripcion = actividadesLugar[i].actividadDescripcion;
				_this.actividadesTodas.push(actividad);
			}
			setActividadesResultados();
		}
	})
}

Iglesia.prototype.getActividadesCoincidencia = function(coincidencia){
	_this = this;
	_this.actividadesTodas = [];
	$.ajax({
		data : {"getActividadesCoincidencia" : coincidencia},
		url : "http://192.168.43.72/iglesiaConexion/controlador.php",
		type : "GET",
		Cache : false,
		success : function(data){
			var actividadesCoincidencia = $.parseJSON(data);
			for(var i in actividadesCoincidencia){
				var actividad = new Actividad();
				actividad._id = actividadesCoincidencia[i].idActividad;
				actividad.nombre = actividadesCoincidencia[i].actividadNombre;
				actividad.fecha = actividadesCoincidencia[i].fecha;
				actividad.lugar = actividadesCoincidencia[i].actividadLugar;
				actividad.hora = actividadesCoincidencia[i].actividadHora;
				actividad.descripcion = actividadesCoincidencia[i].actividadDescripcion;
				_this.actividadesTodas.push(actividad);
			}
			setActividadesResultados();
		}
	})
}
Iglesia.prototype.getActividadesLugarFecha = function(fecha,lugar){
	_this = this;
	_this.actividadesTodas = [];
	$.ajax({
		data : {"fecha":fecha,"lugar":lugar},
		url : "http://192.168.43.72/iglesiaConexion/controlador.php",
		type : "GET",
		Cache : false,
		success : function(data){
			actividadesFechaLugar = $.parseJSON(data);
			for(var i in actividadesFechaLugar){
				var actividad = new Actividad();
				actividad._id = actividadesFechaLugar[i].idActividad;
				actividad.nombre = actividadesFechaLugar[i].actividadNombre;
				actividad.fecha = actividadesFechaLugar[i].fecha;
				actividad.lugar = actividadesFechaLugar[i].actividadLugar;
				actividad.hora = actividadesFechaLugar[i].actividadHora;
				actividad.descripcion = actividadesFechaLugar[i].actividadDescripcion;
				_this.actividadesTodas.push(actividad);
			}
			setActividadesResultados();
		}
	})
}

/**
* Clase Actividad
*/
function Actividad (){
	this._id;
	this.nombre;
	this.fecha;
	this.lugar;
	this.hora;
	this.descripcion;
}

Actividad.prototype.deleteProducto = function (){
	_this = this;
	$.ajax({
		url : "http://192.168.43.72/iglesiaConexion/controlador.php",
		data : {"deleteActividad" : _this._id},
		type : "GET",
		success : function (data){
			//var estado = parseInt(data);
			console.log(data);
			/*
			if (estado == 1)
				deleteProductoBD();
			else
				alert('Error al eliminar el producto');
			*/
		}
	})
}