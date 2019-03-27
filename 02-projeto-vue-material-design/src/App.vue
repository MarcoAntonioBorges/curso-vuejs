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
        <md-button class="md-raised md-primary" @click="table()">Table</md-button>
        <md-button class="md-raised md-accent" @click="limpar()">Limpar</md-button>
      </md-card-content>

      <md-table>
        <md-table-header>
          <md-table-row>
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
        </md-table-header>
      </md-table>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'App',
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
