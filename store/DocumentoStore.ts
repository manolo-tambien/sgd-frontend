
import { defineStore } from 'pinia';
import type { Documento } from '~/models/Documento';
import { DocumentoService } from '~/services/DocumentoService';

export const useDocumentoStore = defineStore({
  id:'documento',
  state: () => ({
    documentos: [] as Documento[]
  }),
  actions: {
    async obtenerDocumentos() {
      const documentos = await DocumentoService.ObtenerDocumentos();
      this.documentos = documentos;
    }
  }
});
