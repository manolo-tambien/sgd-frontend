import axios from "axios";
import type { Documento }  from '~/models/Documento';

const BASE_URL = "http://localhost:3001"

export class DocumentoService{
    static async ObtenerDocumentos(): Promise<Documento[]>{
        const response = await axios.get<Documento[]>(`${BASE_URL}/ObtenerDocumentos`)
        return response.data;
    }
    
    static async GuardarCambiosDocumento(documento: Documento): Promise<void> {
        try {
            await axios.put(`${BASE_URL}/GuardarCambiosDocumento/${documento._id}`, documento);
            console.log('Cambios guardados');
        } catch (error) {
            console.error('Error al guardar los cambios:', error);
            throw error;
        }
    }
    
}