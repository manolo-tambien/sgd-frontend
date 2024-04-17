<template>
    <div class="pa-4 text-center">
        <v-dialog v-model="showModalTarjeta" max-width="600">
            <v-form @submit.prevent="GuardarCambiosDocumento">
                <v-card prepend-icon="mdi-file-document-edit-outline" title="Modificar información">
                    <v-card-text>
                        <v-row>
                            <v-col cols="12" md="4" sm="6">
                                <v-text-field v-model="documentoEnEdicion.nombre" label="Nombre*"
                                    required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="4" sm="6">
                                <v-text-field label="Region" v-model="documentoEnEdicion.region"></v-text-field>
                            </v-col>

                            <v-col cols="12" md="4" sm="6">
                                <v-text-field label="Categoría" v-model="documentoEnEdicion.categoria"
                                    required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="4" sm="6">
                                <v-text-field label="Grado*" v-model="documentoEnEdicion.grado" required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="4" sm="6">
                                <v-text-field label="Descripción*" v-model="documentoEnEdicion.descripcion"
                                    required></v-text-field>
                            </v-col>
                        </v-row>

                        <small class="text-caption text-medium-emphasis">*indica que es obligatorio.</small>
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn text="Eliminar" color="error" variant="plain" @click="BorrarDocumento"></v-btn>
                        <v-btn text="Cerrar" variant="plain" @click="CerrarDialogTarjeta"></v-btn>

                        <v-btn color="primary" text="Guardar" type="submit" variant="tonal"></v-btn>
                    </v-card-actions>
                </v-card>
            </v-form>
        </v-dialog>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {

        };
    },
    props: {
        showModalTarjeta: {
            type: Boolean,
            required: true
        },
        documentoEnEdicion: {
            type: Object,
            required: true
        }
    },
    methods: {
        BorrarDocumento(){
            this.$emit('eliminarDocumentoEvento')
        },
        CerrarDialogTarjeta() {
            this.$emit('cerraModalEvent')
        },
        GuardarCambiosDocumento() {
            this.$emit('guardarCambiosDocumentoEvento')
            this.$emit('cerraModalEvent')

        }
    },
});


</script>