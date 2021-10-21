

let miDiv = document.querySelector('#principal');

const updateListado = ()=> {
    let url = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0;'  // LLAMA A LA API DE POKEMONES

    fetch(url)

    .then((response) => {
        return response.json();
    })  
    .then((objetoJSON) =>{
        const pokemones = objetoJSON.results;
        console.log(pokemones);
        
        pokemones.forEach((pokemon, x) => {
            miDiv.innerHTML += ` 
            <button class='btn btn-primary' id='boton' onclick = "crearImagen('${pokemon.url}')">${pokemon.name}</button>`
            })
        }); 
}


const crearImagen = (url) => {
    alert(url);
}

updateListado();


// let alumnos = [23,42,23,12];
// alumnos.forEach(funcPedir);

// function funcPedir(num){
//     console.log(num);
// }

// console.log(updateListado);  


        // for(x = 0; x <= urls.length; x++){
        //     let url2 = urls[x];
        //     fetch(url2)
        //     .then((response) => {
        //         return response.json();
        //     } )
        //     .then((objetoJSON) => {
        //         const desc = objetoJSON.results;
        //         console.log(desc);
        //     })
        // }