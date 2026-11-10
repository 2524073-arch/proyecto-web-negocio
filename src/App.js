import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Index from './componentes/Index';
import Login from './componentes/Login';
import Formulario from './componentes/Formulario';
import './App.css';

function App() {
return (
<div className="App">
<BrowserRouter>
<header>
<h1>F&C Exports</h1>
<p>Bolsas, ropa, zapatos, perfumes y carteras de marca.</p>
</header>
<nav>
<Link to="/">Catalogo</Link>  <Link to="/formulario">Pedido</Link>  <Link to="/login">Login</Link>
</nav>
<main>
<Routes>
<Route path="/" element={<Index />} />
<Route path="/formulario" element={<Formulario />} />
<Route path="/login" element={<Login />} />
</Routes>
</main>
<footer>
<p>Contacto:44*-***-**51</p>
</footer>
</BrowserRouter>
</div>
);
}

export default App; 
