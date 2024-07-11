import { useEffect, useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "../../utils/cn";
import { CategoriaApi } from "../../service/categoriaapi";
import { Categoria } from "../../interface/categoria";

export function NavbarDemo() {
    return (
        <div className="relative w-full flex items-center justify-center">
            <Navbar className="top-2" />
        </div>
    );
}

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    const [categorias, setCategorias] = useState<Categoria[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            let lista = await CategoriaApi.getCategorias();
            setCategorias(lista);
        }

        fetchData();
    }, [])

    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="Inicio" href="/" />

                <MenuItem setActive={setActive} active={active} item="Categorias">
                    <div className="flex flex-col space-y-4 text-sm">
                        {categorias.map((categoria: Categoria) =>
                            <ProductItem
                                title={categoria.nombre}
                                href={"/categoria/" + categoria.nombre.toLowerCase()}
                                src={categoria.ruta_img}
                                description={categoria.descripcion}
                            /* handle={() => handleCategoria()} */
                            />
                        )}
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Cuenta">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/iniciar-sesion">Iniciar sesión</HoveredLink>
                        <HoveredLink href="/registrar">Registrarse</HoveredLink>
                    </div>
                </MenuItem>
                {
                    sessionStorage.getItem("usuario_id") &&
                    <MenuItem setActive={setActive} active={active} item={`Carrito de ${sessionStorage.getItem("nombre")} `} href="/carrito" />
                }
            </Menu>
        </div>
    );
}
