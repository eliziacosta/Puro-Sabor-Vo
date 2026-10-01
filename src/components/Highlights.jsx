const highlights = [
  {
    id: 1,
    nome: "Bolo de Chocolate",
    descricao: "Massa de chocolate com recheio cremoso.",
    preco: 50,
    icon: "🍫",
    tag: "Mais pedido",
  },
  {
    id: 2,
    nome: "Festa na Caixa",
    descricao: "Uma combinação especial para comemorar.",
    preco: 65,
    icon: "🎁",
    tag: "Destaque",
  },
  {
    id: 3,
    nome: "Kit de Brigadeiros",
    descricao: "Docinhos preparados com muito carinho.",
    preco: 30,
    icon: "🧁",
    tag: "Novo",
  },
]

function Highlights() {
  return (
    <section className="bg-[#F3E3E5] px-6 py-14">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#E754A6]">
            Escolhidos com carinho
          </p>

          <h2 className="mt-2 font-serif text-4xl italic text-[#5A2E1F]">
            Destaques
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((product) => (
            <article
              key={product.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="absolute left-4 top-4 z-10 rounded-full bg-[#E754A6] px-3 py-1 text-xs font-semibold text-white">
                {product.tag}
              </span>

              <div className="flex h-56 items-center justify-center bg-[#F7C8D8]">
                <span className="text-7xl transition duration-300 group-hover:scale-110">
                  {product.icon}
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-serif text-2xl italic text-[#5A2E1F]">
                  {product.nome}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-[#8B5E3C]">
                  {product.descricao}
                </p>

                <div className="mt-5 flex items-center justify-between">
                  <span className="font-semibold text-[#5A2E1F]">
                    A partir de R$ {product.preco.toFixed(2).replace(".", ",")}
                  </span>

                  <button className="rounded-full bg-[#5A2E1F] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#8B5E3C]">
                    Ver opções
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Highlights