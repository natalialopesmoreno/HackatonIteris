
<template >
    <div class="divTudo">
    <v-simple-table class= "tabela" style="margin-top:50px; width:1200px; margin-left: 100px; margin-right:100px;">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
           Nome
          </th>
          <th class="text-left">
            Endereço
          </th>
          <th class="text-left">
            Cartas
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="crianca of criancasLista" :key="crianca.nome"
        >
        <td>
            <v-avatar size="100">
              <img :src="crianca.photo" :alt="crianca.nome" style=" border: solid;
  border-radius: 4px;
  padding: 5px;
  width: 150px;"/>
            </v-avatar>
            <span class="pl-2">{{ crianca.nome }}</span>
          </td>
          <td class="text-right">{{ crianca.address}}</td>
          <td class="text-right">{{ crianca.description}}</td>
        </tr>
        <tr>
        </tr>
      </tbody>
    </template>
  </v-simple-table>

  </div>
</template>

<script>
export default {
    name: 'CriancaLista',
    data() {
    return {
      criancasLista: []
    }
    },

    created() {
    fetch('https://it3yui.firebaseio.com/natal.json')
      .then(response => response.json())
      .then(json => {
        this.criancasLista = json;
      })
  }
    
}
</script>

<style scoped>
td
{
  width:500px;
  background-color: rgb(116, 224, 116);
  
}



th
{
  background-color:red;
}

.divTudo
{
  background-color:rgb(238, 120, 120);
}

</style>