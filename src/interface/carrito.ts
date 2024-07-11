import { Producto } from "./producto";

interface Carrito {
    usuario_id: number;
    producto_id: number;
    cantidad: number;
}

interface CarritoDetalle extends Carrito, Producto {
    subtotal: string;
}

export { Carrito, CarritoDetalle };