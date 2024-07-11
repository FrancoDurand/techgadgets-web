import { ApiService } from './api';
import { Usuario } from '../interface/usuario';

class UsuarioApi extends ApiService {
    static URL: string = `${ApiService.URL}/usuarios`;

    static async login(usuario: Usuario): Promise<Usuario> {
        const requestURL = `${UsuarioApi.URL}/inicio-sesion`;

        try {
            const requestOptions: RequestInit = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(usuario)
            };

            const response = await fetch(requestURL, requestOptions);

            if (!response.ok) {
                throw new Error('Credenciales inválidas');
            }

            const resultado: Usuario = await response.json();

            return resultado;

        }
        catch (error: any) {
            throw new Error(error.message);
        }
    }

    static async register(usuario: Usuario): Promise<boolean> {
        const requestURL = `${UsuarioApi.URL}/registrar`;

        try {
            const requestOptions: RequestInit = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(usuario)
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

export { UsuarioApi };