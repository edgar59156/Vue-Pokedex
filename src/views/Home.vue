<template>
  <div v-if="isLoading" class="row justify-content-md-center">
        <div class="col-3 alert-info text-center mt-5">
            Espere por favor ...
            <h3 class="mt-2"><i class="fa fa-spin fa-sync"></i></h3>
        </div>
    </div>
<PokemonList v-else />
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapActions, mapState } from 'vuex';
export default {
  
  components: {
    PokemonList: defineAsyncComponent(() =>
      import("../components/PokemonList.vue")),
  },
  methods: {
        ...mapActions('Pokedex',['loadPokemons']),
    },computed:{
        ...mapState('Pokedex',['isLoading'])
    },
    created(){
        this.loadPokemons()
    }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  /*border: 1px solid red ;*/
}

body {
  background: hsl(244, 40%, 57%);
}
</style>