
<template>
  <NuxtLayout>
    <v-app>
      <template>
        <v-layout class="rounded rounded-md">
          <v-app-bar title="Sistema de Gestión de Documentos"></v-app-bar>

          <v-navigation-drawer>
            <v-list>
              <v-list-item link variant="elevated" prepend-icon="mdi-home" title="">
                <NuxtLink to="/">Inicio</NuxtLink>
              </v-list-item>
              <v-list-item link variant="elevated" prepend-icon="mdi-information" title="">
                <NuxtLink to="/acerca-de">Acerca de</NuxtLink>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>

          <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
            <NuxtPage />
          </v-main>
        </v-layout>
      </template>
      
    </v-app>
  </NuxtLayout>
</template>
