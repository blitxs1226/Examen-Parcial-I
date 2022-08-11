function guardado() {
   var name = document.getElementById("Nombre").value;
    var Last = document.getElementById("Apellido").value;
    var Phone = document.getElementById("Telefono").value;
    var Mail = document.getElementById("Correo").value;
    var Date = document.getElementById("Fecha").value;
    var Message = document.getElementById("Mensaje").value;
    var informacion = name + "\n" + Last + "\n" + Phone + "\n" + Mail + "\n" + Date + "\n" + Message;
    alert(informacion);
}
