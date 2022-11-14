import { getPokemon } from "./http-provider";

const body  = document.body;
let tBody;

export const createHtml = () => {
    
    const html = `
    <h1 class="mt-5"> Pokemon</h1>
    <input id="search" type="text">
    <hr>

    <table class="table">
        <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Pokedex</th>
                <th scope="col">Height</th>
                <th scope="col">weight</th>
                <th scope="col">Sprite</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.appendChild( div );

    tBody = document.querySelector('tbody');
}

const createRowPokemon = ( pokemon ) => {
    const html = `
        <td scope="col"> ${pokemon.name} </td>
        <td scope="col"> ${pokemon.order} </td>
        <td scope="col"> ${pokemon.height} </td>
        <td scope="col"> ${pokemon.weight} </td>
        <td scope="col"> <img class="img-thumbnail" src="${pokemon.front_sprite}"> </td>
    `;

    const tr = document.createElement('tr');
    tr.innerHTML = html;

    tBody.appendChild(tr);
}


export const init = async(pokemon) => {

    createRowPokemon ( await getPokemon(pokemon) );
}

