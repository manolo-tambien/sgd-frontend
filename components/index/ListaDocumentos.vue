<template>

    <v-data-table :headers="headers" :items="listaDocumentos" :items-per-page="registrosPorPagina">
        <template v-slot:top>
            <v-toolbar>
                <v-toolbar-title>Lista de Documentos</v-toolbar-title>

                <v-spacer></v-spacer>

                <IndexFormularioDocumento @altaDeDocumentoEvento="altaDeDocumento"
                    @actualizarTableEvento="actualizarTabla"></IndexFormularioDocumento>
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
        :documentoEnEdicion="documentoEnEdicion" @eliminarDocumentoEvento="eliminarDocumento">
    </IndexTarjetaDocumento>

    <CustomModal :prependIcon="prependIcon" :mostrarCustomModal="mostrarCustomModel"
        @cerrarCustomModalEvento="cerrarCustomModal" :texto-card="textoCard" :titulo-card="tituloCard"
        :sub-titulo-card="subTituloCard" :color-card="colorCard"></CustomModal>

    <v-btn @click="mostrarCustomModel = true">
        Open Dialog
    </v-btn>
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

            // Variables para el componente de tarjeta
            showModalTarjeta: false,

            // Variables para el componente de CustomModal
            mostrarCustomModel: false,
            prependIcon: "",
            tituloCard: "",
            subTituloCard: "",
            textoCard: "",
            colorCard: ""
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
        cerrarCustomModal() {
            this.mostrarCustomModel = false
        },
        cerrarModalTarjeta() {
            this.showModalTarjeta = false
        },
        altaDeDocumento() {
            this.mostrarCustomModel = true
            this.prependIcon = "mdi-check-underline"
            this.tituloCard = "Alta de documento"
            this.textoCard = "Tu documento ha sido guardado en base de datos"
            this.colorCard = "info"
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

                // Confirma al usuario que se guardó el documento
                this.mostrarCustomModel = true
                this.prependIcon = "mdi-check-underline"
                this.tituloCard = "Modificación de documento"
                this.textoCard = "Tu documento ha sido actualizado en base de datos"
                this.colorCard = "info"
            });
        },
        eliminarDocumento() {
            const documentoStore = useDocumentoStore();
            documentoStore.eliminarDocumento(this.documentoEnEdicion).then(() => {
                this.showModalTarjeta = false
                this.actualizarTabla()

                // Indica al usuario que se borró el documento
                this.mostrarCustomModel = true
                this.prependIcon = "mdi-trash-can-outline"
                this.tituloCard = "Eliminación de documento"
                this.textoCard = "Tu documento ha sido borrado"
                this.colorCard = "error"
            });
        },
    },
});
</script>
