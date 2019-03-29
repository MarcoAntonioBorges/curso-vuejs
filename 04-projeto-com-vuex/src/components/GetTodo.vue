<template>
  <div id="get-todo" class="container">
    <input  type="text"
            class="form-control"
            :value="newTodo"
            @change="getTodo"
            placeholder="Eu preciso fazer..."><br/>
    <button class="btn btn-primary" @Click="addTodo">Adicionar Tarefas</button>
  </div>
</template>

<script>
export default {
  name: 'GetTodo',
  methods: {
    getTodo(e) {
      this.$store.dispatch('getTodo', e.target.value);
    },
    addTodo() {
      this.$store.dispatch('addTodo');
      this.$store.dispatch('clearTodo');
    },
  },
  computed: {
    newTodo() {
      return this.$store.getters.newTodo;
    },
  },
};
</script>
