import { useEffect, useState } from "react";
import { CarritoDetalle } from "../../interface/carrito";
import { CarritoApi } from "../../service/carritoapi";
import { ApiService } from "../../service/api";
import "./carrito-detalle.css"

export function CarritoDetalleInfo() {
    const [carrito, setCarrito] = useState<CarritoDetalle[]>([]);
    const [total, setTotal] = useState<number>(0);

    const fetchData = async () => {
        const response = await CarritoApi.getCarrito({
            usuario_id: parseInt(sessionStorage.getItem("usuario_id") || "0"),
            producto_id: 0,
            cantidad: 0
        });
        let total = 0;
        setCarrito(response);
        response.forEach((p: CarritoDetalle) => {
            total += parseFloat(p.subtotal);
        })
        setTotal(total);
    }

    const eliminar = async (producto: CarritoDetalle) => {
        await CarritoApi.eliminar({
            usuario_id: parseInt(sessionStorage.getItem("usuario_id") || "0"),
            producto_id: producto.id,
            cantidad: 0
        });
        fetchData();
        alert("Producto eliminado");
    }

    const comprar = async () => {
        await CarritoApi.comprar({
            usuario_id: parseInt(sessionStorage.getItem("usuario_id") || "0"),
            producto_id: 0,
            cantidad: 0
        });

        alert("Compra realizada");
    }

    useEffect(() => {
        fetchData();
    }, [carrito])

    return (
        <div className="carrito_detalle no-margin-auto">
            <h1>Detalle del carrito</h1>
            <div className="carrito_detalle_productos">

                {
                    carrito.map(
                        (producto: CarritoDetalle) => (
                            <div className="carrito_detalle_item">
                                <img src={ApiService.URL + "/img" + producto.ruta_img} alt={producto.nombre} />
                                <div className="carrito_detalle_info">
                                    <h3>{producto.nombre}</h3>
                                    <h3>{producto.marca}</h3>
                                    <h4>S/ {producto.precio} x {producto.cantidad}</h4>
                                    <h2>S/ {producto.subtotal}</h2>
                                </div>
                                <button onClick={() => eliminar(producto)}>❌</button>
                            </div>
                        )
                    )
                }

            </div>
            <h2 className="total">Total: S/ {total ? total + "0" : "0"}</h2>
            <button className="comprar" onClick={comprar}>Comprar</button>
        </div>
    )
}