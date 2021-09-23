// let nombre = "Alan"; 

/*     
*/
let participantes = [
		'Alan' , 'Chenoa', 'Marco', 'Leyla', 'Juan', 'Danny'];

function render(){
	let contenedor = document.getElementById('root');

	participantes.forEach(part => contenedor.innerHTML += `<div class="card col-7"  >
 		<img src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2018/08/fondos-pantalla-full-hd-animales_4.jpg" class="card-img-top" alt="...">
  		<div class="card-body">
    		<h5 class="card-title">${part}</h5>
    		<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    		<a href="#" class="btn btn-primary" id="button">Go somewhere</a>
  		</div>
	</div>`)
}
render();