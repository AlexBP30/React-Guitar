import Footer from "./components/Footer"
import Guitar from "./components/Guitar"
import Header from "./components/Header"
import { db } from "./data/guitars"

function App(){
 console.log(db)
  return ( 
    <>
    <Header />
    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
            {
                db.map((g) => (<Guitar key={g.id} guitar={g} />))

            }
            
        </div>
    </main>
    <Footer/>
    </>
  )
}

export default App