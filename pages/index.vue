<template>
    <v-container>
        <IndexListaDocumentos :columnasPorMostrar="columnasPorMostra" :registrosPorPagina="6"></IndexListaDocumentos>
    </v-container>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            columnasPorMostra: [
                { title: 'Descripcion', key: 'descripcion' },
                { title: 'Acciones', key: 'actions', sortable: false },
            ]
        };
    }
});
</script>
