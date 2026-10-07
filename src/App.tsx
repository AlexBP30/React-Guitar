import { useState } from "react"
import Footer from "./components/Footer"
import Guitar from "./components/Guitar"
import Header from "./components/Header"
import { db, type Guitarra } from "./data/guitars"

function App(){

    const [carrito, setCarrito] = useState<Guitarra[]>([])

    function addGuitar(guitar: Guitarra){
        
        const newCart = [...carrito]
        const idInCart = carrito.findIndex(g => g.id === guitar.id)
        if(idInCart === -1){
           
       
        newCart.push({
            ...guitar,
            cantidad: 1
        })
        }else{
           newCart[idInCart].cantidad!++
        }
        setCarrito(newCart)
    }

    function addOne(id: number){
        const newCart = [...carrito]
        const idInCart = newCart.findIndex(g => g.id === id)
        newCart[idInCart].cantidad!++
        setCarrito(newCart)
    }
    function lessOne(id: number){
        const newCart = [...carrito]
        const idInCart = newCart.findIndex(g => g.id === id)
        if(newCart[idInCart].cantidad! <= 1){
            removeGuitar(id)
            return
        }
        newCart[idInCart].cantidad!--
        setCarrito(newCart)
    }
    function removeGuitar(id: number){
        const newCart = carrito.filter(g => g.id !== id)
        setCarrito(newCart)
    }
    function emptyCart(){
        setCarrito([])
    }
 

  return ( 
    <>
    <Header 
    carrito={carrito}
    emptyCart={emptyCart}
    removeGuitar={removeGuitar}
    lessOne={lessOne}
    addOne={addOne}
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