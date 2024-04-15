<template>
    <v-dialog v-model="dialog">
        <template v-slot:activator="{ props: activatorProps }">
            <v-btn prepend-icon="mdi-plus" text="Nuevo Documento" variant="tonal" v-bind="activatorProps"></v-btn>
        </template>
        <v-form @submit.prevent="submitForm">
            <v-card title="Datos del documento">
                <v-card-text>
                    <v-row>
                        <v-col cols="12" md="4" sm="6">
                            <v-text-field v-model="nombre" label="Nombre*" :rules="documentoRules" required></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4" sm="6">
                            <v-text-field v-model="region" label="Region*" :rules="documentoRules" required></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4" sm="6">
                            <v-text-field v-model="categoria" label="Categoria*" :rules="documentoRules" required></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4" sm="6">
                            <v-text-field v-model="grado" label="Grado*" :rules="documentoRules" required></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4" sm="6">
                            <v-file-input ref="pdf" :rules="archivoRules" accept="application/pdf"
                                label="Adjuntar Archivo"></v-file-input>
                        </v-col>
                        <v-col cols="12" md="4" sm="6">
                            <v-text-field v-model="descripcion" label="Descripción*" :rules="documentoRules" required></v-text-field>
                        </v-col>
                    </v-row>
                    <small class="text-caption text-medium-emphasis">*indica campo obligatorio</small>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text="Cerrar" variant="plain" @click="dialog = false"></v-btn>
                    <v-btn color="primary" text="Guardar" variant="tonal" type="submit"></v-btn>
                </v-card-actions>
            </v-card>
        </v-form>
    </v-dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios'

export default defineComponent({
    data() {
        return {
            dialog: false,
            nombre: '',
            region: '',
            categoria: '',
            grado: '',
            descripcion: '',
            archivoRules: [
                (value: string) => {
                    if (value != null && value.length > 0) return true;
                    return 'No se cargó el archivo.';
                }
            ],
            documentoRules: [
                (value: string) => {
                    if (value?.length > 3) return true;
                    return 'El campo debe tener al menos tres caracteres.';
                }
            ]
        };
    },
    methods: {
        async submitForm() {
            // Definir explícitamente el tipo de this.$refs.pdf
            const pdfInput = this.$refs.pdf as HTMLInputElement;
            if (!pdfInput.files || pdfInput.files.length === 0) {
                console.error('No se seleccionó ningún archivo.');
                return;
            }

            const formData = new FormData();
            formData.append('nombre', this.nombre);
            formData.append('region', this.region);
            formData.append('categoria', this.categoria);
            formData.append('grado', this.grado);
            formData.append('pdf', pdfInput.files[0]);
            formData.append('descripcion', this.descripcion)

            console.log(formData)

            try {
                const response = await axios.post('http://localhost:3001/GuardarDocumento', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                console.log('Respuesta del servidor:', response.data);
            } catch (error) {
                console.error('Error al enviar la solicitud:', error);
            }
            this.dialog = false;
        }
    }
});


</script>