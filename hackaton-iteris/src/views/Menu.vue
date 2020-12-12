<template>
    <v-app>
     <v-app-bar app color="red darken-2">
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>
        Nome do Projeto
      </v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="green darken-2">
          <router-link to="/">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account-group</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              Sobre o Projeto
            </v-list-item-title>
          </v-list-item>
          </router-link>
          <router-link to="/lista">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-email</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              Cartinhas
            </v-list-item-title>
          </v-list-item>
           </router-link>
           <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-magnify</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              Busca
            </v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>
<script>
export default {
    name: 'Menu',
    data() {
        return {
            drawer: false,
            group: null,
        }
        }
    };
</script>
<style scoped>
</style>