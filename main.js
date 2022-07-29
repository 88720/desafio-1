let clave = prompt("Ingrese la clave");
while (clave != "CODER") {
	alert("La clave " + clave + " no es válida");
	clave = prompt("Ingrese otra clave");
}
alert("Ingreso exitoso!");

alert(
	"Ahora veamos que día tenés clase. Para salir de la consulta indique ESC"
);
let profe = prompt("Quién es tu profesor?");
while (profe != "ESC") {
	switch (profe) {
		case "Guille":
			alert("Tenés clase los lunes");
			break;
		case "David":
			alert("Ténes clase los martes");
			break;
		case "Eleonora":
			alert("Tenés clase los miercoles");
			break;
		default:
			alert("Esa persona no es profesor/a");
			break;
	}
	profe = prompt("Quién es tu profesor?");
}
alert("Gracias por consultar!!");
