import { useEffect, useState } from "react";
import { Producto } from "../../interface/producto";
import { ProductoApi } from "../../service/productoapi";
import { useParams } from "react-router-dom";
import { ProductoDetalle } from "../ui/producto-detalle";

export function ProductosId() {
    const { id } = useParams();
    const [producto, setProducto] = useState<Producto>();

    useEffect(() => {
        const fetchData = async () => {
            const producto = await ProductoApi.getProductoId(
                {
                    id: parseInt(id || ""),
                    nombre: "",
                    categoria_id: 0,
                    precio: 0,
                    marca: "",
                    ruta_img: ""
                });

            setProducto(producto);
        };

        fetchData();
    }, []);

    return (
        <div >
            {producto && <ProductoDetalle producto={producto} />}
        </div>
    );
}