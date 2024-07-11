import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formulario } from "../ui/formulario";
import { UsuarioApi } from "../../service/usuarioapi";
import { Usuario } from "../../interface/usuario";

export function FormRegistro() {
    const [nombre, setNombre] = useState("");
    const [contraseña, setContraseña] = useState("");
    const navigate = useNavigate();

    const submit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const usuario: Usuario = {
            id: 0,
            nombre,
            contraseña
        }

        try {
            await UsuarioApi.register(usuario);
            const response = await UsuarioApi.login(usuario);
            sessionStorage.setItem("usuario_id", response.id.toString());
            sessionStorage.setItem("nombre", response.nombre);
            navigate("/");
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Formulario
            registro
            handleSubmit={submit}
            setNombre={setNombre}
            setContraseña={setContraseña}
        />
    )
}