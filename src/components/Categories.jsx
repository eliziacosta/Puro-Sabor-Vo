const categories = [
  { name: "Todos", icon: "🎂" },
  { name: "Bolos", icon: "🍰" },
  { name: "Trufas", icon: "🍫" },
  { name: "Brigadeiros", icon: "🧁" },
  { name: "Sobremesas", icon: "🍮" },
  { name: "Festa na Caixa", icon: "🎁" },
  { name: "Kits de Festa", icon: "🎀" },
  { name: "Natal", icon: "🎄" },
]

function Categories({ categoriaSelecionada, onCategoriaChange }) {
  return (
    <section className="bg-[#FFF5F8] px-6 py-8">
      <div className="mx-auto flex max-w-[1400px] flex-wrap justify-center gap-5 md:gap-8">
        {categories.map((category) => {
          const selecionada = categoriaSelecionada === category.name

          return (
            <button
              key={category.name}
              onClick={() => onCategoriaChange(category.name)}
              className="group flex min-w-[90px] flex-col items-center gap-2"
            >
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-full text-2xl transition ${
                  selecionada
                    ? "bg-[#E754A6] text-white"
                    : "bg-[#F7C8D8] text-[#5A2E1F] group-hover:bg-[#E754A6] group-hover:text-white"
                }`}
              >
                {category.icon}
              </div>

              <span
                className={`text-sm font-medium ${
                  selecionada
                    ? "text-[#E754A6]"
                    : "text-[#5A2E1F]"
                }`}
              >
                {category.name}
              </span>

              {selecionada && (
                <span className="h-0.5 w-10 rounded-full bg-[#E754A6]" />
              )}
            </button>
          )
        })}
      </div>
    </section>
  )
}

export default Categories