<template>
  <v-app>
    <v-app-bar color="primary">
      Envisol-stats
    </v-app-bar>
    <v-navigation-drawer>
      <v-list>
        <v-list-item>
          <v-btn>
            Site
          </v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn>
            Result
          </v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <NuxtPage />
    </v-main>
  </v-app>
</template>
