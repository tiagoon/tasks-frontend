<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    document.title = "Faça Login | Tarefas";
  },
}
</script>