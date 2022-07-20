<template>
  <div>    
    <b-sidebar id="sidebar-menu" aria-labelledby="sidebar-menu-title" no-header 
    shadow bg-variant="dark"
    text-variant="light" backdrop backdrop-variant="dark">
      <template #default="{ hide }">
        <div class="p-4">
          <h4 id="sidebar-menu-title">Centro de Ayuda</h4>
          <nav class="mb-3">
            <b-nav vertical v-show="showChildren">
              <b-nav-item @click="toggleMenu()">Niewtech
              <nav class="p-1">
                <b-nav-item active @click="hide">- Nosotros</b-nav-item>
                <b-nav-item active @click="hide">- Productos</b-nav-item>
              </nav>
              </b-nav-item>
              <b-nav-item active @click="hide">Site</b-nav-item>
              <b-nav-item active @click="hide">Merchant</b-nav-item>
            </b-nav>
          </nav>         
        </div>
      </template>
    </b-sidebar>
  </div>
  
</template>

<script>
export default {
  name: "SidebarUno",
  data: () => ({
    showChildren: false
  }),
  props: {
    msg: String,
  },
  methods:{
    toggleMenu(){
    this.showChildren = !this.showChildren
    }
  }
};
</script>


<style scoped>
.nav-item > .nav-link{
  color: #FFF
}
.nav-item > .nav-link:hover{
  color: rgb(129, 128, 128)
}

</style>
