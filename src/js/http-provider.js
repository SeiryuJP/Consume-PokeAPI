const pokeAPI = 'https://pokeapi.co/api/v2/pokemon/';

export const getPokemon = async (pokemon) => {
        try {
                const response = await fetch(pokeAPI+pokemon);
                if (!response.ok) throw ('No se pudo realizar la peticion');
                const {name, order, height, weight, sprites} = await response.json();
                const front_sprite = sprites.front_default;
                return {name, order, height, weight, front_sprite};
        }
        catch(err) {
                throw err;
        }
}