import { ApiService } from './api';
import { Producto } from '../interface/producto';

class ProductoApi extends ApiService {
    static URL: string = `${ApiService.URL}/productos`;

    static async getProductos(): Promise<Producto[]> {
        try {
            const response = await fetch(ProductoApi.URL);

            if (!response.ok) {
                throw new Error();
            }

            const data: Producto[] = await response.json();

            return data;

        }
        catch (error: any) {
            throw new Error(error.message);
        }
    }

    static async getProductoId(producto: Producto): Promise<Producto> {
        const requestURL = `${ProductoApi.URL}/id`

        try {
            const requestOptions: RequestInit = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(producto)
            };

            const response = await fetch(requestURL, requestOptions);

            if (!response.ok) {
                throw new Error();
            }

            const data: Producto = await response.json();

            return data;

        }
        catch (error: any) {
            throw new Error(error.message);
        }
    }

    static async getProductosCategoria(producto: Producto): Promise<Producto[]> {
        const requestURL = `${ProductoApi.URL}/categoria`

        try {
            const requestOptions: RequestInit = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(producto)
            };

            const response = await fetch(requestURL, requestOptions);

            if (!response.ok) {
                throw new Error();
            }

            const data: Producto[] = await response.json();

            return data;

        }
        catch (error: any) {
            throw new Error(error.message);
        }
    }
}

export { ProductoApi };