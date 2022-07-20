<template>
  <div id="app">
  <NavbarUno/>
  <Sidebar/>
  </div>
  
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import NavbarUno from './components/NavbarUno.vue'

export default {
  name: 'App',
  components: {
    Sidebar,
    NavbarUno
}
}
</script>

<style>

</style>
