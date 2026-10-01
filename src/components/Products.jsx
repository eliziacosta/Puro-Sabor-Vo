import { useState } from "react"
import produtos from "../data/produtos"
import ProductCard from "./ProductCard"
import ProductModal from "./ProductModal"

function Products({ categoriaSelecionada }) {
  const [produtoSelecionado, setProdutoSelecionado] = useState(null)

  const produtosFiltrados =
    categoriaSelecionada === "Todos"
      ? produtos
      : produtos.filter(
          (produto) => produto.categoria === categoriaSelecionada
        )

  return (
    <>
      <section
        id="cardapio"
        className="bg-[#FFF5F8] px-6 py-12"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10 flex items-center justify-center gap-4">
            <span className="h-px w-16 bg-[#E754A6]" />

            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#E754A6]">
                Feitos com carinho
              </p>

              <h2 className="mt-1 font-serif text-4xl italic text-[#5A2E1F]">
                Nossos Produtos
              </h2>
            </div>

            <span className="h-px w-16 bg-[#E754A6]" />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {produtosFiltrados.map((produto) => (
              <ProductCard
                key={produto.id}
                nome={produto.nome}
                descricao={produto.descricao}
                preco={produto.preco}
                imagem={produto.imagem}
                icon={produto.icon}
                onClick={() => setProdutoSelecionado(produto)}
              />
            ))}
          </div>

          {produtosFiltrados.length === 0 && (
            <div className="py-16 text-center">
              <p className="font-serif text-2xl italic text-[#5A2E1F]">
                Nenhum produto encontrado.
              </p>
            </div>
          )}
        </div>
      </section>

      {produtoSelecionado && (
        <ProductModal
          produto={produtoSelecionado}
          onClose={() => setProdutoSelecionado(null)}
        />
      )}
    </>
  )
}

export default Products