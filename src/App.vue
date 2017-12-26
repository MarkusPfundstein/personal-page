<template>
  <div id="app">
    <app-header/>
    <router-view/>
    <app-footer/>
  </div>
</template>

<script>

export default {
  name: 'app',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-left:auto;
  margin-right:auto;
  max-width:850px;
}

.container {
  max-width:850px;
  margin-left:1em;
}

.col-1,.col-12,.col-2,.col-3,.col-4,.col-6,.col-8,.{
 width:100%;
 padding-left:15px;
 padding-right:15px
}

.pull-right {
  float: right;
}

.row {
}

</style>
