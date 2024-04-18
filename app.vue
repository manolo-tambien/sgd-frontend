<template>
  <NuxtLayout>
    <v-app>
      <template>
        <v-layout class="rounded rounded-md">

          <v-app-bar color="primary" :elevation="1">
            <v-app-bar-nav-icon variant="text"
              @click.stop="mostrarNavigationDrawer = !mostrarNavigationDrawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Sistema de Gestión de Documentos</v-toolbar-title>

          </v-app-bar>

          <v-navigation-drawer v-model="mostrarNavigationDrawer">
            <v-list>
              <v-list-item link href="/" variant="text" prepend-icon="mdi-home" title="Inicio">
              </v-list-item>
              <v-list-item link href="acerca-de" variant="text" prepend-icon="mdi-information" title="Acerca de">
              </v-list-item>
            </v-list>
          </v-navigation-drawer>

          <v-main class="d-flex align-center justify-center">
            <NuxtPage />
          </v-main>
        </v-layout>
      </template>

    </v-app>
  </NuxtLayout>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {

      mostrarNavigationDrawer: true
    };
  },
  props: {
  },


  methods: {
  },
});
</script>
