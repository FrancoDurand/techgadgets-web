import './producto.css'
import { Producto } from '../../interface/producto'
import { ApiService } from "../../service/api";
import { useState } from 'react';
import { CarritoApi } from '../../service/carritoapi';
import { Carrito } from '../../interface/carrito';
import { useNavigate } from 'react-router-dom';

type ProductoDetalleProps = {
    producto: Producto;
}

export function ProductoDetalle({ producto }: ProductoDetalleProps) {
    const [cantidad, setCantidad] = useState(1);
    const navigate = useNavigate();

    const agregar = async (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (sessionStorage.getItem("usuario_id") == null) {
            alert("Por favor inicia sesión");
            navigate("/iniciar-sesion");
            return;
        }

        const detalle: Carrito = {
            usuario_id: parseInt(sessionStorage.getItem("usuario_id") || "0"),
            producto_id: producto.id,
            cantidad: cantidad
        }

        try {
            await CarritoApi.agregar(detalle);
            alert("Producto agregado");
        }
        catch (e) {
            alert("Error");
        }
    }

    const aumentarCantidad = () => {
        setCantidad(cantidad + 1);
    }

    const restarCantidad = () => {
        if (cantidad > 1)
            setCantidad(cantidad - 1);
    }

    return (
        <div className='div_producto'>
            <img src={ApiService.URL + "/img" + producto.ruta_img} alt={producto.nombre} />

            <div className="div_producto_detalle">
                <h1>{producto.nombre}</h1>
                <h2>S/ {producto.precio}</h2>
                <div className="div_producto_botones">
                    <div className="div_producto_cantidad">
                        <button onClick={restarCantidad}>-</button>
                        <label>{cantidad}</label>
                        <button onClick={aumentarCantidad}>+</button>
                    </div>
                    <button onClick={agregar}>Agregar</button>
                </div>

            </div>
        </div>
    )
}