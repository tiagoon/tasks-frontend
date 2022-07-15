<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    document.title = process.env.VUE_APP_NAME;
  },
}
</script>