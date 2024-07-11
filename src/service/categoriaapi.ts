import { ApiService } from './api';
import { Categoria } from '../interface/categoria';

class CategoriaApi extends ApiService {
    static URL: string = `${ApiService.URL}/categorias`;

    static async getCategorias(): Promise<Categoria[]> {
        try {
            const response = await fetch(CategoriaApi.URL);

            if (!response.ok) {
                throw new Error();
            }

            const data: Categoria[] = await response.json();

            return data;

        }
        catch (error: any) {
            throw new Error(error.message);
        }
    }

    static async getCategoria(categoria: Categoria): Promise<Categoria> {
        try {
            const requestURL = `${CategoriaApi.URL}/nombre`;
            const requestOptions: RequestInit = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(categoria)
            };

            const response = await fetch(requestURL, requestOptions);

            if (!response.ok) {
                throw new Error();
            }

            const data: Categoria = await response.json();

            return data;

        }
        catch (error: any) {
            throw new Error(error.message);
        }
    }
}

export { CategoriaApi };