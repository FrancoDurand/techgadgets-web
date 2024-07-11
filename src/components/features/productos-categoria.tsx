import { useEffect, useState } from "react";
import { HoverEffect } from "../ui/card-hover-effect";
import { Producto } from "../../interface/producto";
import { ProductoApi } from "../../service/productoapi";
import { useParams } from "react-router-dom";
import { CategoriaApi } from "../../service/categoriaapi";
import { Categoria } from "../../interface/categoria";
import "./productos-categoria.css";

export function ProductosCategoria() {
    const { categoria } = useParams();
    const [productos, setProductos] = useState<Producto[]>([]);
    const [categoria_data, setCategoria] = useState<Categoria>();

    useEffect(() => {
        const fetchData = async () => {
            const categoria_data = await CategoriaApi.getCategoria({
                id: 0,
                nombre: categoria || "",
                descripcion: "",
                ruta_img: ""
            });

            setCategoria(categoria_data);

            const lista = await ProductoApi.getProductosCategoria({
                id: 0,
                nombre: "",
                categoria_id: categoria_data.id,
                precio: 0,
                marca: "",
                ruta_img: ""
            });

            setProductos(lista);
        };

        fetchData();
    }, []);


    return (
        <>
            <div className="max-w-5xl mx-auto px-8">
                <div className="descripcion">
                    <h1>{capitalizeFirstLetter(categoria)}</h1>
                    <p>{categoria_data?.descripcion}</p>
                </div>
                <HoverEffect items={productos} />
            </div>
        </>
    );
}

const capitalizeFirstLetter = (string: string | undefined) => {
    return string ? string.charAt(0).toUpperCase() + string.slice(1) : '';
};
