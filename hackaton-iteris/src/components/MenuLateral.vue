<template>
    <v-app>
        <v-navigation-drawer v-model="drawer" absolute temporary>
            <v-list nav dense>
                <v-list-item-group v-model="group" active-class="green--text text--lighten-2">
                   

            <!-- inicio do item do menu -->
            <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-pine-tree</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              Início
            </v-list-item-title>
          </v-list-item>
          <!-- fim do item do menu -->

          <!-- inicio do item do menu -->
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account-search</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              Busca
            </v-list-item-title>
          </v-list-item>
          <!-- fim do item do menu -->

          <!-- inicio do item do menu -->
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-e-mail-open</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              Cartas adotadas
            </v-list-item-title>
          </v-list-item>
          <!-- fim do item do menu -->

          <!-- inicio do item do menu -->
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account-group</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              Equipe
            </v-list-item-title>
          </v-list-item>
          <!-- fim do item do menu -->
​
                </v-list-item-group>    
            </v-list>   
        </v-navigation-drawer>   
    </v-app>
    
</template>

<script>
export default {
    name: 'MenuLateral',
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