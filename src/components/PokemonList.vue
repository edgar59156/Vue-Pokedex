<template>
  <div class="pokedex__header">
    <div>
      <h1 class="pokedex__header-title">
        POKEDEX
        <img
          src="../../public/pokeball.png"
          alt="pokeball"
          height="30"
          width="30"
        />
      </h1>
    </div>
    <div class="pokedex__header-search">
      <input type="text" placeholder="Search Pokemon" v-model="term" />
    </div>
  </div>
  <div class="pokedex__pokemon-content">
    <PokemonComponent
      v-for="pokemon in pokemonsByTerm"
      :key="pokemon"
      :pokemon="pokemon"
    />

  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import {mapGetters} from "vuex"

export default {
  data() {
    return {
      pokemons: [],
      term: "",
    };
  },
  components: {
    PokemonComponent: defineAsyncComponent(() => import("./Pokemon.vue")),
  },
  computed:{
        ...mapGetters('Pokedex',['getPokemonsByTerm']),
        pokemonsByTerm(){
            return this.getPokemonsByTerm(this.term)             
        }
    }, 
};
</script>

<style>
.pokedex__header {
  background: #263238;
  min-height: 120px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.pokedex__header-title {
  font-family: "Pokemon Solid", sans-serif;
  letter-spacing: 8px;
  -webkit-text-stroke: 3px #2468b1;
  color: #fccf00;
  margin: 10px 25px 0 10px;
  text-align: left;
}

.pokedex__header-search {
  margin-bottom: 10px;
}

input {
  font-size: 15px;
  text-align: center;
  height: 40px;
  width: 100%;
  margin-top: 20px;
  border-radius: 5px;
  border: none;
  outline: none;
}

.pokedex__pokemon-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 50px;
  padding-left: 10%;
  padding-right: 10%;
}
</style>