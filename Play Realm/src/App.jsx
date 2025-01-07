import Categorias from './components/Section/Categoria'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './Hero'
import Noticias from './components/Section/Noticias'
import Ofertas from './components/Section/Ofertas'
import Productos from './components/Section/Productos'

import './App.css'

function App() {

  return (
    <>
    <Header />
      <Hero/>
      <Categorias />
      <Productos />
      <Ofertas />
      <Noticias />
      <Footer />
    </>
  )
}

export default App
