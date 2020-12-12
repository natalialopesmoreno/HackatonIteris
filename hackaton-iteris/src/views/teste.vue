<template>
    <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
           Nome
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
            <v-avatar size="24">
              <img :src="crianca.photo" :alt="crianca.nome"/>
            </v-avatar>
            <span class="pl-2">{{ crianca.nome }}</span>
          </td>
          <td class="text-right">{{ crianca.adress }}</td>
          <td class="text-right">{{ crianca.description}}</td>
        </tr>
        <tr>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>