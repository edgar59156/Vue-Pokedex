import { createStore } from "vuex";
import pokedexStore from "./Pokedex";

export default createStore({
  modules: {
    Pokedex: pokedexStore,
  },
});
