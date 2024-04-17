
import { defineStore } from 'pinia';
import type { Documento } from '~/models/Documento';
import { DocumentoService } from '~/services/DocumentoService';

export const useDocumentoStore = defineStore({
  id:'documento',
  state: () => ({
    documentos: [] as Documento[]
  }),
  actions: {
    async crearDocumento(nombre: string, region: string, categoria: string, grado: string, descripcion: string, pdf: File) {
      await DocumentoService.CrearDocumento(nombre, region, categoria, grado, descripcion, pdf);
      await this.obtenerDocumentos(); // Actualizar la lista de documentos después de crear uno nuevo
  },
    async obtenerDocumentos() {
      const documentos = await DocumentoService.ObtenerDocumentos();
      this.documentos = documentos;
    },

    async guardarCambiosDocumento(documento: Documento){
      const documentoGuardado = await DocumentoService.GuardarCambiosDocumento(documento);
    },

    async eliminarDocumento(documento: Documento){
      const documentoEliminado = await DocumentoService.EliminarDocumento(documento);
    }
  }
});
