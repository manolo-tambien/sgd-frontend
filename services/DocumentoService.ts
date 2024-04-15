import axios from "axios";
import type { Documento }  from '~/models/Documento';

const BASE_URL = "http://localhost:3001"

export class DocumentoService{
    static async ObtenerDocumentos(): Promise<Documento[]>{
        const response = await axios.get<Documento[]>(`${BASE_URL}/ObtenerDocumentos`)
        return response.data;
    }
}