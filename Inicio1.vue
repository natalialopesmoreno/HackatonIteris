<template>
  <v-card >
    <v-app-bar src="https://i.pinimg.com/736x/17/f5/8a/17f58a64065de70de392d064870605c3.jpg">

      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Nome do projeto</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-app-bar>
    <v-container>
      <h2 class="text-h2 text-center mb-3 mt-5">Adote sua cartinha!</h2>
        <v-img
          class="mb-10"
          src="https://claudia.abril.com.br/wp-content/uploads/2020/01/thinkstockphotos-494342296-1.jpg">
        </v-img>
        <p class="text-justify font-weight-medium">Todo ano dezembro chega e com ele o espírito natalino, e esse ano não seria diferente! pensando nisso, nosso site reuniu cartas escritas por 
            crianças de todo o Brasil, nela contém os pedidos de natal. Para participar basta selecionar uma cartinha, embalar o presente e deixá-la em 
            uma agência dos correios próxima à você</p>
     </v-container>
    <v-sheet
      id="scrolling-techniques-5"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container style="height: 1500px;"></v-container>
    </v-sheet>
  </v-card>
  
</template>

<script>
export default {
    name: 'Inicio'
}
</script>