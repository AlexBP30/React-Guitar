import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Guitar from "./components/Guitar"
import Header from "./components/Header"
import { db, type Guitarra } from "./data/guitars"

function App(){

    function initialCart(): Guitarra[] {
        const saved = localStorage.getItem('carrito')
        return saved ? JSON.parse(saved) : []
    }

    const [carrito, setCarrito] = useState<Guitarra[]>(initialCart)

    function addGuitar(guitar: Guitarra){
        const inCart = carrito.some(g => g.id === guitar.id)
        if(inCart){
            addOne(guitar.id)
        }else{
            setCarrito([...carrito, { ...guitar, cantidad: 1 }])
        }
    }

    function addOne(id: number){
        setCarrito(carrito.map(g => g.id === id ? { ...g, cantidad: g.cantidad! + 1 } : g))
    }
    function lessOne(id: number){
        const guitar = carrito.find(g => g.id === id)
        if(guitar && guitar.cantidad! <= 1){
            removeGuitar(id)
            return
        }
        setCarrito(carrito.map(g => g.id === id ? { ...g, cantidad: g.cantidad! - 1 } : g))
    }
    function removeGuitar(id: number){
        const newCart = carrito.filter(g => g.id !== id)
        setCarrito(newCart)
    }
    function emptyCart(){
        setCarrito([])
    }
 
    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }, [carrito])

  return ( 
    <>
    <Header 
    carrito={carrito}
    emptyCart={emptyCart}
    removeGuitar={removeGuitar}
    lessOne={lessOne}
    addOne={addOne}
    addGuitar={addGuitar}
    />
    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
            {
                db.map((g) => 
                    (<Guitar 
                    key={g.id}
                    addGuitar={addGuitar} 
                    guitar={g} />))

            }
            
        </div>
    </main>
    <Footer/>
    </>
  )
}

export default App