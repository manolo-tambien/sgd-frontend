<template>
    <v-data-table :headers="headers" :items="listaDocumentos" :items-per-page="registrosPorPagina">
        <template v-slot:top>
            <v-toolbar>
                <v-toolbar-title>Lista de Documentos</v-toolbar-title>

                <v-spacer></v-spacer>

                <IndexFormularioDocumento></IndexFormularioDocumento>
            </v-toolbar>
        </template>

        <template v-slot:item.actions="{ item }">
            <v-icon @click="editItem(item)">
                mdi-pencil
            </v-icon>
            <v-icon @click="deleteItem(item)">
                mdi-delete
            </v-icon>
            <v-icon @click="verDocumento()">
                mdi-file-document-outline
            </v-icon>
        </template>

        <template v-slot:no-data>
            <v-tooltip text="No hay registros">
                <template v-slot:activator="{ props }">
                    <v-badge color="error" dot>
                        <v-icon v-bind="props" icon="mdi-inbox"></v-icon>
                    </v-badge>
                </template>
            </v-tooltip>
        </template>

    </v-data-table>
</template>

<script lang="ts">
import { useDocumentoStore } from '~/store/DocumentoStore';
import type { Documento } from '~/models/Documento';

export default {
    data: () => ({
        dialog: false,
        dialogDelete: false,
        headers: [
            { title: 'Nombre', key: 'nombre', },
            { title: 'Región', key: 'region' },
            { title: 'Categoría', key: 'categoria' },
            { title: 'Grado', key: 'grado' },
            { title: 'Descripcion', key:'descripcion'}
           // { title: 'Acciones', key: 'actions', sortable: false },
        ],
        listaDocumentos: [] as Documento[],
    }),
    props: {
        registrosPorPagina: {
            type: Number,
            required: true
        }
    },
    created() {
        const documentoStore = useDocumentoStore();
        documentoStore.obtenerDocumentos().then(() => {
            this.listaDocumentos = documentoStore.documentos;
        });
    },

    methods: {
        verDocumento() {

        },
        editItem(item: any) {
            console.log('editar item: ' + item);

        },

        deleteItem(item: any) {
            console.log('borrar: ' + item);

        },
    },
}
</script>