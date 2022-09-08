<template>
  <div class="pokemon" :style="`background-color:${pokemon.color}`">
    <h3>Pokemon No.{{ pokemon.id }}</h3>
    <h1>{{ pokemon.name }}</h1>
    <img class="img-container" :src="pokemon.sprites.front_default" alt="" />
    <div class="info">
      <span>
        Types :
        <ul>
          <li v-for="type in pokemon.types" :key="type">
            {{ type.type.name }}
          </li>
        </ul>
      </span>
    </div>
  </div>
</template>
<script>
import getColor from "../helper/getColor";

export default {
  props: {
    pokemon: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getColor() {
      this.pokemon.color = getColor(this.pokemon.types[0].type.name);
    },
  },
  created() {
    this.getColor()
  },
};
</script>

<style scoped>
.pokemon {
  background-color: #eee;
  border-radius: 20px;
  margin: 10px;
  padding: 20px;
  text-align: center;
  width: 250px;
  border: 2px solid #263238;
}

.pokemon .img-container {
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  width: 120px;
  height: 120px;
  text-align: center;
  margin: auto;
}

.pokemon .img-container img {
  margin-top: 20px;
  max-width: 90%;
}

.pokemon .info {
  align-items: center;
  margin-top: 5px;
}
li {
  list-style: none;
}
</style>