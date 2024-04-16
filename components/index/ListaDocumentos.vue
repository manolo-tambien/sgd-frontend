<template>

    <v-data-table :headers="headers" :items="listaDocumentos" :items-per-page="registrosPorPagina">
        <template v-slot:top>
            <v-toolbar>
                <v-toolbar-title>Lista de Documentos</v-toolbar-title>

                <v-spacer></v-spacer>

                <IndexFormularioDocumento @actualizarTableEvento="actualizarTabla"></IndexFormularioDocumento>
            </v-toolbar>
        </template>

        <template v-slot:item.actions="{ item }">
            <v-icon @click="verDocumento(item)">
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
    <IndexTarjetaDocumento @cerraModalEvent="cerrarModalTarjeta" @actualizarTableEvento="actualizarTabla"
        @guardarCambiosDocumentoEvento="guardarCambiosDeDocumento" :showModalTarjeta="showModalTarjeta"
        :documentoEnEdicion="documentoEnEdicion">
    </IndexTarjetaDocumento>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useDocumentoStore } from '~/store/DocumentoStore';
import type { Documento } from '~/models/Documento';

export default defineComponent({
    data() {
        return {
            headers: [
                { title: 'Nombre', key: 'nombre', },
                { title: 'Región', key: 'region' },
                { title: 'Categoría', key: 'categoria' },
                { title: 'Grado', key: 'grado' },
                { title: 'Descripcion', key: 'descripcion' },
                { title: 'Acciones', key: 'actions', sortable: false },
            ],
            listaDocumentos: [] as Documento[],
            documentoEnEdicion: {} as Documento,
            showModalTarjeta: false,
        };
    },
    props: {
        registrosPorPagina: {
            type: Number,
            required: true
        }
    },
    created() {
        this.actualizarTabla()
    },

    methods: {
        cerrarModalTarjeta() {
            this.showModalTarjeta = false
        },
        verDocumento(item: Documento) {
            this.documentoEnEdicion = item
            this.showModalTarjeta = true
        },
        actualizarTabla() {
            const documentoStore = useDocumentoStore();
            documentoStore.obtenerDocumentos().then(() => {
                this.listaDocumentos = documentoStore.documentos;
            });
        },
        guardarCambiosDeDocumento() {
            const documentoStore = useDocumentoStore();
            documentoStore.guardarCambiosDocumento(this.documentoEnEdicion).then(() => {
                this.actualizarTabla()
            });
        }
    },
});
</script>
