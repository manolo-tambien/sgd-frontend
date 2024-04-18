<template>

    <IndexListaDocumentos :columnasPorMostrar="columnasPorMostrar" :registrosPorPagina="registrosPorPagina">
    </IndexListaDocumentos>

</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            columnasPorMostrar: [
                { title: 'Nombre', key: 'nombre' },
                { title: 'Descripcion', key: 'descripcion' },
                { title: 'Acciones', key: 'actions', sortable: false },
            ],
            registrosPorPagina: 6
        };
    }
});
</script>
