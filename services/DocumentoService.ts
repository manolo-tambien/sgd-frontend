import axios from "axios";
import type { Documento } from '~/models/Documento';

const BASE_URL = "http://localhost:3001"

export class DocumentoService {
    static async CrearDocumento(nombre: string, region: string, categoria: string, grado: string, descripcion: string, pdf: File): Promise<void> {
        const formData = new FormData();
        formData.append('nombre', nombre);
        formData.append('region', region);
        formData.append('categoria', categoria);
        formData.append('grado', grado);
        formData.append('pdf', pdf);
        formData.append('descripcion', descripcion);

        try {
            await axios.post(`${BASE_URL}/GuardarDocumento`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
        } catch (error) {
            console.error('Error al crear el documento:', error);
            throw error;
        }
    }


    static async ObtenerDocumentos(): Promise<Documento[]> {
        const response = await axios.get<Documento[]>(`${BASE_URL}/ObtenerDocumentos`)
        return response.data;
    }

    static async GuardarCambiosDocumento(documento: Documento): Promise<void> {
        try {
            await axios.put(`${BASE_URL}/GuardarCambiosDocumento/${documento._id}`, documento);
        } catch (error) {
            console.error('Error al guardar los cambios:', error);
            throw error;
        }
    }

    static async EliminarDocumento(documento: Documento): Promise<void> {
        try {
            await axios.delete(`${BASE_URL}/EliminarDocumento/${documento._id}`);
        } catch (error) {
            console.error('Error al eliminar el documento:', error);
            throw error;
        }
    }

}