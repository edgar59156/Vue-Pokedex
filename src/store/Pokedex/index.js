import state from "./state";
import * as mutations from "./mutations";
import * as actions from "./acctions";
import * as getters from "./getters";

const pokedexStore = {
  namespaced: true,
  state,
  //*sincronas
  mutations,
  //*asincronas
  actions,
  getters,
};

export default pokedexStore;
