<template>
  <div>
    <ul v-if="posts && posts.length">
      <li v-for="post in posts" :key="post.id">
        <p><strong>Title: {{ post.title }}</strong></p>
        <p>Message: {{ post.body }}</p>
      </li>
    </ul>

    <ul v-if="errors && errors.length">
      <li v-for="erro in error" :key="erro.id">
        {{ error.message }}
      </li>
    </ul>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'HelloWorld',
  data() {
    return {
      posts: [],
      errors: [],
    };
  },
  created() {
    // eslint-disable-next-line
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((response) => {
      this.posts = response.data;
    }).catch((e) => {
      this.errors.push(e);
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
