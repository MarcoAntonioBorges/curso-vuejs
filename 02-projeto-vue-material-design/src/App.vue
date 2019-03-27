<template>
  <div id="app">
    <md-card>
      <md-card-header>
        <div class="md-title">
          Material Design com VueJS 2
        </div>
        <div class="md-sub-header">
          Com Marco A. | Developer Full-Stack
        </div>
      </md-card-header>
      <md-card-content>
        <md-button class="md-raised md-primary" @click="table()">Fill Table</md-button>
        <md-button class="md-raised md-accent" @click="limpar()">Clear Table</md-button>
      </md-card-content>

      <md-table>
        <md-table-row>
          <md-table-head>
            ID
          </md-table-head>
          <md-table-head>
            Primeiro nome
          </md-table-head>
          <md-table-head>
            Sobrenome
          </md-table-head>
          <md-table-head>
            E-mail
          </md-table-head>
        </md-table-row>
        <md-table-row v-for="contato in contatos" :key="contato.id">
          <md-table-cell md-numeric>
            {{ contato.id }}
          </md-table-cell>
          <md-table-cell>
            {{ contato.nome }}
          </md-table-cell>
          <md-table-cell>
            {{ contato.sobrenome }}
          </md-table-cell>
          <md-table-cell>
            {{ contato.email }}
          </md-table-cell>
        </md-table-row>
      </md-table>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'App',
  // eslint-disable-next-line
  data: function () {
    return {
      contatos: [
        { id: 1, nome: 'Marco Antonio', sobrenome: 'Oliveira', email: 'mabo.marcoantonio@gmail.com' },
        { id: 2, nome: 'Pedro', sobrenome: 'Antonio', email: 'pedro@gmail.com' },
      ],
    };
  },
  methods: {
    // eslint-disable-next-line
    table: function () {
      this.contatos.push({ nome: 'Flavia menegeri', sobrenome: 'Silva', email: 'flavia@gmail.com' });
      this.contatos.push({ nome: 'Matheus', sobrenome: 'damassa', email: 'mdamassa@gmail.com' });
      this.contatos.push({ nome: 'Joao', sobrenome: 'Freitas', email: 'jfreitas@gmail.com' });
    },
    // eslint-disable-next-line
    limpar: function () {
      this.contatos.splice(0, this.contatos.length);
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.md-accent{
  background-color: lightcoral;
  color: white;
}

.md-primary{
  background-color: indigo;
  color: white;
}
</style>
