<template>
  <v-app> 
     <v-container>
    <h2 class="text-h5 text-center mb-3 mt-5">texto</h2>
    <v-img
      class="mb-4"
      src="https://claudia.abril.com.br/wp-content/uploads/2020/01/thinkstockphotos-494342296-1.jpg">
    </v-img>
    <p class="text-justify">Todo ano dezembro chega e com ele o espírito natalino, e esse ano não seria diferente! pensando nisso, nosso site reuniu cartas escritas por 
        crianças de todo o Brasil, nela contém os pedidos de natal. Para participar basta selecionar uma cartinha, embalar o presente e deixá-la em 
        uma agência dos correios próxima à você</p>
  </v-container>

    <v-app-bar app color="red darken-2">
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>
        Nome do Projeto
      </v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="green darken-2">
    
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account-group</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              Sobre o Projeto
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-email</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              Cartinhas
            </v-list-item-title>
          </v-list-item>
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
  name: 'App',
 
  data(){
    return {
      drawer: false,
      group: null,
    }
  },
};
</script>