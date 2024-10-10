<template>
    <v-container>

        <h1>déposer le fichier des données</h1>
        <v-file-input chips v-model="files"></v-file-input>
        <v-text-field v-model="test"> Test</v-text-field>
        <template v-if="files.length != 0">
            <v-btn>pleins </v-btn>
            <div>{{ files[0].name }} </div>
        </template>
        <v-select v-model="selected_cols" :items="colonnes" label="Favorite Fruits" multiple>
            <template v-slot:prepend-item>
              <v-list-item ripple @mousedown.prevent @click="toggle">
                <v-list-item-action>
                  <v-icon :color="selected_cols.length > 0 ? 'indigo darken-4' : ''"></v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>
                    Selectionner tous
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-divider class="mt-2"></v-divider>
            </template>
          </v-select>
          <v-btn color="success" @click="post_ACP">ACP!</v-btn>

    </v-container>
</template>

<script setup>
import { VInput } from 'vuetify/components';

var test= ref()
watch(test, (new_test) => {
    console.log("heya?", new_test);
})


const files = ref([])
watch(files, async (newFiles)=> {
    console.log("heya");
    console.log(newFiles.length, newFiles[0].name);
    

})
</script>