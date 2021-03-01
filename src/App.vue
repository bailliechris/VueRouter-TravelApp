<template>
  <div id="app">
    <TheNav />
    <router-view :key="$route.path" />
  </div>
</template>
<script>
import TheNav from './components/TheNav';

export default {
  components: {
    TheNav
  }
}
</script>

<style>

</style>
