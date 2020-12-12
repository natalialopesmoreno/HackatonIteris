<template>
  <v-app>
    <Menu/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>
<script>
import Menu from './views/Menu'
export default {
  name: 'App',
  components: {
    Menu
  }
};
</script>

