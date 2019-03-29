
<template>
  <div>
    <form @submit.prevent="search">
      <input type="text" v-model="username" placeholder="Enter a github username">
    </form>
    <p v-if="data.name">
      {{ data.name }} ({{ data.login }})
      is from
      {{ data.location }}<br/>
      <b>Company: </b> {{ data.company }}<br/>
      <b>Website: </b> {{ data.blog }}
    </p>
  </div>
</template>

<script>
/* eslint-disable */
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);

export default {
  name: 'HelloWorld',
  data() {
    return {
      username: '',
      data: [],
      erroMsg: '',
    };
  },
  methods: {
    search() {
      const api = `https://api.github.com/users/${this.username}`;
      Vue.axios.get(api).then((response) => {
        this.data = response.data,
        console.log(this.data)
        
      }).catch((error) => {
        this.erroMsg = 'No user or no location!'
        this.data = []
        console.log(error)
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
