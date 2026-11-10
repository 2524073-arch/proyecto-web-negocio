import { useState } from 'react';

function Login() {
const [usuario, setUsuario] = useState('');
const [password, setPassword] = useState('');

const handleSubmit = (e) => {
e.preventDefault();
 alert('Intentando entrar con: ' + usuario);
};
return (
<section className="login">
<h2>Iniciar sesion</h2>
<form onSubmit={handleSubmit}>
<div className="campo">
<label>Usuario</label>
<input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} required />
</div>
<div className="campo">
<label>Contrasena</label>
<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
</div>
<button type="submit">Entrar</button>
</form>
</section>
);
}

export default Login;
