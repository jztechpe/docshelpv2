<template>
  <div id="app">
  <NavbarUno/>
  <SidebarUno/>
  </div>
  
</template>

<script>

import NavbarUno from './components/NavbarUno.vue'
import SidebarUno from './components/SidebarUno.vue'

export default {
  name: 'App',
  components: {
    SidebarUno,
    NavbarUno    
}
}
</script>

<style>

</style>
