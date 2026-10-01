import { useState } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Categories from "./components/Categories"
import Products from "./components/Products"
import Highlights from "./components/Highlights"
import Footer from "./components/Footer"
import About from "./components/About"

function App() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos")

  return (
    <>
      <Header />

      <Hero />

      <Categories
        categoriaSelecionada={categoriaSelecionada}
        onCategoriaChange={setCategoriaSelecionada}
      />

      <Products
        categoriaSelecionada={categoriaSelecionada}
      />

      <Highlights />

      <About />

      <Footer />
    </>
  )
}

export default App