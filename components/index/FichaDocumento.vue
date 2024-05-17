<template>
    <v-dialog v-model="mostrarModalFichaDocumento">
        <template v-slot:default>
            <v-card title="Ficha de Informacion del Documento">
                
                <v-card-text class="">


                    <v-list class="bg-transparent">
                        <v-list-item :subtitle="documento._id" title="ID">
                        </v-list-item>
                        <v-list-item :subtitle="documento.nombre" title="Nombre">
                        </v-list-item>
                        <v-list-item :subtitle="documento.descripcion" title="Descripción">
                        </v-list-item>
                        <v-list-item :subtitle="documento.categoria" title="Categoría">
                        </v-list-item>
                        <v-list-item :subtitle="documento.grado" title="Grado">
                        </v-list-item>
                    </v-list>

                    <v-divider class="mt-5 mb-4"></v-divider>
                    <v-list-item-subtitle>
                        Metadatos
                    </v-list-item-subtitle>

                    <v-list class="bg-transparent">
                        <v-list-item :subtitle="documento.pdf.filename" title="filename">
                        </v-list-item>
                        <v-list-item :subtitle="documento.pdf.mimetype" title="mimetype">
                        </v-list-item>
                        <v-list-item :subtitle="documento.pdf.path" title="path">
                        </v-list-item>
                        <v-list-item :subtitle="documento.pdf.size" title="size">
                        </v-list-item>
                    </v-list>

                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" variant="flat" text="Cerrar" @click="cerrarModalFichaDocumento"></v-btn>
                </v-card-actions>
            </v-card>


        </template>
    </v-dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {

            colorCard: ""
        };
    },
    props: {
        mostrarModalFichaDocumento: {
            type: Boolean,
            required: true
        },
        documento: {
            type: Object,
            required: true
        }
    },


    methods: {
        cerrarModalFichaDocumento() {
            this.$emit('cerrarModalFichaEvento')
        }
    },
});
</script>
