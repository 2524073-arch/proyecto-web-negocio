import { useState } from 'react';

function Formulario() {
const [datos, setDatos] = useState({ nombre: '', telefono: '', producto: '', comentarios: ''});

const handleChange = (e) => {
setDatos({ ...datos, [e.target.name]: e.target.value });
};
const handleSubmit = (e) => {
e.preventDefault();
alert('Pedido enviado por: ${datos.nombre}');
};
return (
<section className="formulario">
<h2>Solicita tu pedido</h2>
<form onSubmit={handleSubmit}>
<div className="campo">
<label>Nombre Completo</label>
<input type="text" name="nombre" value={datos.nombre} onChange={handleChange} required />
</div>
<div className="campo">
<label>Telefono</label>
<input type="tel" name="telefono" value={datos.telefono} onChange={handleChange} required />
</div>
<div className="campo">
<label>Producto de interes</label>
<input type="text" name="producto" value={datos.producto} onChange={handleChange} required />
</div>
<div className="campo">
<label>comentarios</label>
<textarea name="comentarios" value={datos.comentarios} onChange={handleChange} rows="3" />
</div>
<button type="submit"> Enviar pedido</button>
</form>
</section>
);
}
export default Formulario;
