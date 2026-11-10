const productos = [
{Producto: "Bolsa Michael Kors", Precio:1250, ok: true },
{Producto: "Perfume Carolina Herrera", Precio:960, ok: true },
{Producto: "Cartera Coach", Precio:800, ok: false },
{Producto: "Bolsa Guess", Precio:1600, ok: true },
{Producto: "Tenis Adidas", Precio:2400, ok:true },
];

function Index() {
return (
<section>
<h2>Catologo</h2>
<div className="productos">
{productos.map((p) => (
<div className="producto" key={p.Producto}>
<h3>{p.Producto}</h3>
<p>${p.Precio} MXN</p>
<p>{p.ok ? "Disponible" : "Agotado"}</p>
</div>
))}
</div>
</section>
);
}
export default Index;
