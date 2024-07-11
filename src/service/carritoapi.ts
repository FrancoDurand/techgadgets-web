import { ApiService } from './api';
import { Carrito, CarritoDetalle } from '../interface/carrito';

class CarritoApi extends ApiService {
    static URL: string = `${ApiService.URL}/carrito`;

    static async agregar(carrito: Carrito): Promise<boolean> {
        const requestURL = `${CarritoApi.URL}/agregar`;

        try {
            const requestOptions: RequestInit = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(carrito)
            };
            const response = await fetch(requestURL, requestOptions);

            if (!response.ok) {
                throw new Error();
            }

            const { resultado } = await response.json();

            return resultado;

        }
        catch (error: any) {
            throw new Error(error.message);
        }
    }

    static async eliminar(carrito: Carrito): Promise<boolean> {
        const requestURL = `${CarritoApi.URL}/eliminar`;

        try {
            const requestOptions: RequestInit = {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(carrito)
            };
            const response = await fetch(requestURL, requestOptions);

            if (!response.ok) {
                throw new Error();
            }

            const { resultado } = await response.json();

            return resultado;

        }
        catch (error: any) {
            throw new Error(error.message);
        }
    }

    static async getCarrito(carrito: Carrito): Promise<CarritoDetalle[]> {
        const requestURL = `${CarritoApi.URL}`;

        try {
            const requestOptions: RequestInit = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(carrito)
            };
            const response = await fetch(requestURL, requestOptions);

            if (!response.ok) {
                throw new Error();
            }

            const data: CarritoDetalle[] = await response.json();

            return data;

        }
        catch (error: any) {
            throw new Error(error.message);
        }
    }

    static async comprar(carrito: Carrito): Promise<boolean> {
        const requestURL = `${CarritoApi.URL}/comprar`;

        try {
            const requestOptions: RequestInit = {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(carrito)
            };
            const response = await fetch(requestURL, requestOptions);

            if (!response.ok) {
                throw new Error();
            }

            const { resultado } = await response.json();

            return resultado;

        }
        catch (error: any) {
            throw new Error(error.message);
        }
    }
}

export { CarritoApi };