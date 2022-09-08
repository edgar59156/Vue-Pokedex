import pokeApi from "../../api/pokeapi";

export const loadPokemons = async ({ commit }) => {
  const { data } = await pokeApi.get("?limit=151&offset=0");
  const { results } = data;
  const pokemons = [];
  for (let id of Object.keys(results)) {
    id = `${Number(id) + 1}`;
    const { data } = await pokeApi.get(`/${id}`);
    pokemons.push({ id, ...data });
  }
  console.log(pokemons);
  commit("setPokemons", pokemons);
};
