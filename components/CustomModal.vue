<template>
    <div class="text-center">
        <v-dialog v-model="mostrarCustomModal" width="auto">
            <v-card max-width="400" :prepend-icon="prependIcon"
                :text="textoCard"
                :title="tituloCard"
                :subtitle="subTituloCard"
                :color="colorCard">
                <template v-slot:actions>
                    <v-btn class="" text="Cerrar" @click="CerrarCustomModal"></v-btn>
                </template>
            </v-card>
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
        mostrarCustomModal: {
            type: Boolean,
            required: true
        },
        prependIcon: {
            type: String
        },
        tituloCard: {
            type: String,
            required: true
        },
        subTituloCard: {
            type: String,
            required: true
        },
        textoCard: {
            type: String,
            required: true
        },
        colorCard: {
            type: String,
            required: true
        }

    },
    methods: {
        CerrarCustomModal() {
            this.$emit('cerrarCustomModalEvento')
        },
    },
});


</script>