import type { Guitarra } from "../data/guitars"

interface HeaderProps {
    carrito: Guitarra[]
    emptyCart: () => void
    removeGuitar: (id: number) => void
    lessOne: (id: number) => void
    addOne: (id: number) => void
}

export default function Header({ carrito, emptyCart, removeGuitar, lessOne, addOne }: HeaderProps){
    return (
        <>
        <header className="py-5 header">
        <div className="container-xl">
            <div className="row justify-content-center justify-content-md-between">
                <div className="col-8 col-md-3">
                    <a href="index.html">
                        <img className="img-fluid" src="/img/logo.svg" alt="imagen logo"/>
                    </a>
                </div>
                <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                    <div 
                        className="carrito"
                    >
                        <img className="img-fluid" src="./public/img/carrito.png" alt="imagen carrito" />

                        <div id="carrito" className="bg-white p-3">
                            {
                                carrito.length === 0? (
                                  <p className="text-center">El carrito esta vacio</p>  
                                ) : (
                                    <>
                                    <table className="w-100 table">
                                <thead>
                                    <tr>
                                        <th>Imagen</th>
                                        <th>Nombre</th>
                                        <th>Precio</th>
                                        <th>Cantidad</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {carrito.map(g => (
                                            <tr key={g.id}>
                                        <td>
                                            <img className="img-fluid" src={"/img/" + g.imagen + ".jpg"} alt={g.nombre} />
                                        </td>
                                        <td>{g.nombre}</td>
                                        <td className="fw-bold">
                                            ${g.precio}
                                        </td>
                                        <td className="d-flex align-items-start gap-4">
                                            <button
                                            onClick={() => lessOne(g.id)}
                                                type="button"
                                                className="btn btn-dark"
                                            >
                                                -
                                            </button>
                                            <span className="fw-bold">{g.cantidad}</span>
                                            <button
                                            onClick={() => addOne(g.id)}
                                                type="button"
                                                className="btn btn-dark"
                                            >
                                                +
                                            </button>
                                        </td>
                                        <td>
                                            <button
                                                onClick={() => removeGuitar(g.id)}
                                                className="btn btn-danger"
                                                type="button"
                                            >
                                                X
                                            </button>
                                        </td>
                                    </tr>

                                        ))}
                                    
                                </tbody>
                            </table>

                            <p className="text-end">Total pagar: <span className="fw-bold">${carrito.reduce((total, g) => total + (g.precio * (g.cantidad ?? 0)), 0).toFixed(2)}</span></p>
                            <button className="btn btn-dark w-100 mt-3 p-2" onClick={emptyCart}>Vaciar Carrito</button>
                                    </>
                                )
                            }
                            
                            
                        </div>
                    </div>
                </nav>
            </div>

            <div className="row mt-5">
                <div className="col-md-6 text-center text-md-start pt-5">
                    <h1 className="display-2 fw-bold">Modelo VAI</h1>
                    <p className="mt-5 fs-5 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, possimus quibusdam dolor nemo velit quo, fuga omnis, iure molestias optio tempore sint at ipsa dolorum odio exercitationem eos inventore odit.</p>
                    <p className="text-primary fs-1 fw-black">$399</p>
                    <button 
                        type="button"
                        className="btn fs-4 bg-primary text-white py-2 px-5"
                    >Agregar al Carrito</button>
                </div>
            </div>
        </div>

        <img className="header-guitarra" src="./public/img/header_guitarra.png" alt="imagen header"/>
    </header>
        </>
    )
}