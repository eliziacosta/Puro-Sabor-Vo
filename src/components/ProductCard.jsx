function ProductCard({
  nome,
  descricao,
  preco,
  imagem,
  icon,
  onClick,
}) {
  return (
    <article className="group overflow-hidden rounded-[24px] border border-[#EFD6DD] bg-white shadow-[0_8px_25px_rgba(90,46,31,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(90,46,31,0.14)]">
      <div className="relative h-52 overflow-hidden bg-[#F7E1E6]">
        {imagem ? (
          <img
            src={imagem}
            alt={nome}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center">
            <span className="text-6xl transition duration-300 group-hover:scale-110">
              {icon}
            </span>

            <span className="mt-3 text-xs font-medium uppercase tracking-[0.2em] text-[#A86F7F]">
              Puro Sabor de Vó
            </span>
          </div>
        )}

        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#E754A6] shadow-sm">
          Artesanal
        </span>
      </div>

      <div className="p-5">
        <h3 className="font-serif text-2xl italic text-[#5A2E1F]">
          {nome}
        </h3>

        <p className="mt-2 min-h-[48px] text-sm leading-relaxed text-[#8B5E3C]">
          {descricao}
        </p>

        <div className="mt-5 flex items-end justify-between gap-3">
          <div>
            <p className="text-xs text-[#A86F7F]">
              A partir de
            </p>

            <p className="text-lg font-bold text-[#5A2E1F]">
              R$ {preco.toFixed(2).replace(".", ",")}
            </p>
          </div>

          <button
            onClick={onClick}
            className="rounded-full bg-[#5A2E1F] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#E754A6]"
          >
            Ver opções
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard