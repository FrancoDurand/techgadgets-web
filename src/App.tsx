import { Route, Routes } from 'react-router-dom';
import './App.css';
import { CarritoDetalleInfo } from './components/features/carrito-detalle';
import { FormLogin } from './components/features/form-login';
import { FormRegistro } from './components/features/form-registro';
import { Hero } from './components/features/hero';
import { NavbarDemo } from './components/features/navbar';
import { Productos } from './components/features/productos';
import { ProductosCategoria } from './components/features/productos-categoria';
import { ProductosId } from './components/features/productos-id';

function App() {
  return (
    <>
      <NavbarDemo />
      <Routes>
        <Route path="/" element={<><Hero /><Productos /></>} />
        <Route path="/categoria/:categoria" element={<ProductosCategoria />} />
        <Route path="/producto/:id" element={<ProductosId />} />
        <Route path="/iniciar-sesion" element={<FormLogin />} />
        <Route path="/registrar" element={<FormRegistro />} />
        <Route path="/carrito" element={<CarritoDetalleInfo />} />
      </Routes>
    </>
  )
}

export default App