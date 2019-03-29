<template>
  <div id="app" class="container">
    <CompletedTodos></CompletedTodos>
    <GetTodo></GetTodo>
    <CurrentTodos></CurrentTodos>
  </div>
</template>

<script>
import GetTodo from './components/GetTodo';
import CurrentTodos from './components/CurrentTodos';
import CompletedTodos from './components/CompletedTodos';

export default {
  name: 'App',
  components: {
    GetTodo,
    CurrentTodos,
    CompletedTodos,
  },
};
</script>

<style>
  body{
    font-family: Arial, Helvetica, sans-serif;
  }
</style>
