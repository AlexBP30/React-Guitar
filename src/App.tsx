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
            ...guitar
        })
        }else{
           
        }
        setCarrito(newCart)
    }
 

  return ( 
    <>
    <Header />
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