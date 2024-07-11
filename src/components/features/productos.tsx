import { useEffect, useState } from "react";
import { HoverEffect } from "../ui/card-hover-effect";
import { Producto } from "../../interface/producto";
import { ProductoApi } from "../../service/productoapi";
import "./productos.css"

export function Productos() {
    const [productos, setProductos] = useState<Producto[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            let lista = await ProductoApi.getProductos();
            await lista.sort(() => Math.random() - 0.5);
            setProductos(lista);
        }

        fetchData();
    }, [])

    return (
        <>
            <h1 className="heroh1">Conoce nuestros productos</h1>
            <div className="max-w-5xl mx-auto px-8 productos">
                <HoverEffect items={productos} />
            </div>
        </>
    );
}