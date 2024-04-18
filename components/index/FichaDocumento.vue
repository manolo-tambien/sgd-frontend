<template>
    <v-dialog v-model="mostrarModalFichaDocumento">
        <template v-slot:default>
            <v-card title="Ficha de Informacion del Documento">
                <v-divider class=" mb-4"></v-divider>
                <v-card-text class="py-0">
                    <v-row align="center">
                        <v-col class="text-h6" cols="6">
                            ID
                        </v-col>
                        <v-col class="text-left" cols="6">
                            {{ documento._id }}
                        </v-col>
                    </v-row>
                    <v-row align="center">
                        <v-col class="text-h6" cols="6">
                            Nombre
                        </v-col>
                        <v-col class="text-left" cols="6">
                            {{ documento.nombre }}
                        </v-col>
                    </v-row>
                    <v-row align="center">
                        <v-col class="text-h6" cols="6">
                            Descripción
                        </v-col>
                        <v-col class="text-left" cols="6">
                            {{ documento.descripcion }}
                        </v-col>
                    </v-row>
                    <v-row align="center">
                        <v-col class="text-h6" cols="6">
                            Categoria
                        </v-col>
                        <v-col class="text-left" cols="6">
                            {{ documento.categoria }}
                        </v-col>
                    </v-row>
                    <v-row align="center">
                        <v-col class="text-h6" cols="6">
                            Grado
                        </v-col>
                        <v-col class="text-left" cols="6">
                            {{ documento.grado }}
                        </v-col>
                    </v-row>
                    
                    <v-divider class="mt-5 mb-4"></v-divider>
                    <h4>Metadatos</h4>

                    <v-list class="bg-transparent">
                        <v-list-item  :subtitle="documento.pdf.filename" title="filename">
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
