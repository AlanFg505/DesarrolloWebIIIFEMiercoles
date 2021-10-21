const alumno = {
	nombre: 'Alan',
	edad: 15,
	mostrar:()=> {
		return `Soy ${alumno.nombre} y tengo ${alumno.edad}`;
	}
};
let saludo = `Hola, ${alumno.nombre} como estan?`

ReactDOM.render(
	<div className= 'row'>
		<div className= 'col-6 bg-primary text-white text-center p-4'>
			Aqui estamos dentro de react {alumno.mostrar()}
		</div>
	</div>,
	document.getElementById('root')
);
