<template>
    <v-dialog  scrollable v-model="mostrarModalFichaDocumento">
        <template v-slot:default>
            <v-card title="Visor de documento">
                
                <v-card-text style="height: 400px;" class="">

                    <embed width="100%" height="400px" :src="`http://localhost:3001/ObtenerPdf/${nombreDocumento}`" />
                    
                    
                    <v-spacer></v-spacer>

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
    components: {

    },
    props: {
        mostrarModalFichaDocumento: {
            type: Boolean,
            required: true
        },
        nombreDocumento: {
            type: String,
            required: false
        }
    },


    methods: {
        cerrarModalFichaDocumento() {
            this.$emit('cerrarModalDocumentoPdfEvento')
        }
    },
});
</script>
