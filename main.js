// let botonPokemon = document.getElementById("botonPokemon");
// let pokeNombre = document.getElementById("pokeNombre");
// let pokeImagen = document.getElementById("pokeImagen")

let datosPkm = document.getElementById("datosPkm")



const mierror = () => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El pokemon no existe',
        footer: 'Busque un nuevo pokemon'
    })
}

const listo = (nombre) => {
    Swal.fire(
        'Pokemon Encontrado !',
        `El pokemon es: ${nombre}`,
        'success'
    )
}

const buscarPokemon = () => {
    pokenonNombre = document.getElementById("pokemonBuscar").value.toLowerCase();

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokenonNombre}`)
        .then((response) => {
            if (response.status === 200) {
                listo(pokenonNombre);

                response.json()
                    .then((pokemon) => {

                        datosPkm.innerHTML = `    <class class="card" style="width: 18rem;" id="datosPKM">
                        <img src="${pokemon.sprites.front_shiny}" class="card-img-top" alt="..." id="pokeImagen"> 
                        <div class="card-body">
                            <h5 class="card-title" id="pokeNombre">${pokemon.name}</h5>
                            <p class="card-text">Movimientos :</p>
                        </div>
                        <ul class="list-group list-group-flush">
                     
                            <li class="list-group-item">${pokemon.moves[0].move.name}</li>
                            <li class="list-group-item">${pokemon.moves[1].move.name}</li>
                            <li class="list-group-item">${pokemon.moves[2].move.name}</li>
                            <li class="list-group-item">${pokemon.moves[3].move.name}</li>
                        </ul>

                        </class>`

                     

                        // pokeImagen.src = pokemon.sprites.front_default;
                        // pokeNombre.innerText = pokemon.name;

                    })
                    .catch((err) => console.log(err))
            } else {
                mierror();
            }
        })
        .catch((error) => {
            console.log(error)
        })

}



botonPokemon.addEventListener("click", function () {
    // Swal.fire(
    //     'Buscando!',
    //     'Pokemon si existe',
    //     'success'
    //   )
    var buscar = buscarPokemon();


});


