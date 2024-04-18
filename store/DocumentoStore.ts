
import { defineStore } from 'pinia';
import type { Documento } from '~/models/Documento';
import { DocumentoService } from '~/services/DocumentoService';

export const useDocumentoStore = defineStore({
  id: 'documento',
  state: () => ({
    documentos: [] as Documento[]
  }),
  actions: {
    async crearDocumento(documento: Documento, pdf: File) {
      await DocumentoService.CrearDocumento(documento, pdf);
      await this.obtenerDocumentos(); // Actualizar la lista de documentos después de crear uno nuevo
    },
    async obtenerDocumentos() {
      const documentos = await DocumentoService.ObtenerDocumentos();
      this.documentos = documentos;
    },

    async guardarCambiosDocumento(documento: Documento) {
      const documentoGuardado = await DocumentoService.GuardarCambiosDocumento(documento);
    },

    async eliminarDocumento(documento: Documento) {
      const documentoEliminado = await DocumentoService.EliminarDocumento(documento);
    }
  }
});
