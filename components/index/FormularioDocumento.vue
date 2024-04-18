<template>
    <v-dialog v-model="showModalFormulario">
        <template v-slot:activator="{ props: activatorProps }">
            <v-btn prepend-icon="mdi-plus" text="Nuevo Documento" variant="tonal" v-bind="activatorProps"></v-btn>
        </template>
        <v-form @submit.prevent="GuardarDocumento">
            <v-card title="Datos del documento">
                <v-card-text>
                    <v-row>
                        <v-col cols="12" md="6" sm="12">
                            <v-text-field v-model="nombre" label="Nombre*" :rules="documentoRules"
                                required></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6" sm="12">
                            <v-text-field v-model="region" label="Region*" :rules="documentoRules"
                                required></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6" sm="12">
                            <v-text-field v-model="categoria" label="Categoria*" :rules="documentoRules"
                                required></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6" sm="12">
                            <v-text-field v-model="grado" label="Grado*" :rules="documentoRules"
                                required></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6" sm="12">
                            <v-file-input ref="pdf" :rules="archivoRules" accept="application/pdf"
                                label="Adjuntar Archivo"></v-file-input>
                        </v-col>
                        <v-col cols="12" md="6" sm="12">
                            <v-text-field v-model="descripcion" label="Descripción*" :rules="documentoRules"
                                required></v-text-field>
                        </v-col>
                    </v-row>
                    <small class="text-caption text-medium-emphasis">*indica campo obligatorio</small>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text="Cerrar" variant="plain" @click="showModalFormulario = false"></v-btn>
                    <v-btn color="primary" text="Guardar" variant="tonal" type="submit"></v-btn>
                </v-card-actions>
            </v-card>
        </v-form>
    </v-dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useDocumentoStore } from '~/store/DocumentoStore';


// Duda defineComponent
export default defineComponent({
    data() {
        return {
            nombre: '',
            showModalFormulario: false,
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
        async GuardarDocumento() {
            const documentoStore = useDocumentoStore();
            const pdfInput = this.$refs.pdf as HTMLInputElement;
            if (!pdfInput.files || pdfInput.files.length === 0) {
                console.error('No se seleccionó ningún archivo.');
                return;
            }

            documentoStore.crearDocumento(this.nombre, this.region, this.categoria, this.grado, this.descripcion, pdfInput.files[0]).then(() => {
                this.showModalFormulario = false;
                this.$emit('actualizarTableEvento')
                this.$emit('altaDeDocumentoEvento')
            });;


        },
    },
});


</script>