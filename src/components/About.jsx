function About() {
  return (
    <section
      id="sobre"
      className="bg-[#F7E1E6] px-6 py-16 md:py-20"
    >
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#E754A6]">
            Feito com amor
          </p>

          <h2 className="mt-2 font-serif text-4xl italic text-[#5A2E1F] md:text-5xl">
            O sabor de casa
          </h2>

          <div className="mt-6 space-y-4 text-[#70483A]">
            <p className="leading-relaxed">
              O Puro Sabor de Vó nasceu do carinho por aquilo que é feito
              de forma artesanal, com cuidado e aquele gostinho especial
              que lembra os momentos em família.
            </p>

            <p className="leading-relaxed">
              Cada bolo, doce e sobremesa é preparado com dedicação,
              buscando levar sabor e carinho para aniversários,
              comemorações e momentos especiais.
            </p>

            <p className="leading-relaxed">
              Aqui, cada encomenda é preparada especialmente para você.
            </p>
          </div>

          <a
            href="#cardapio"
            className="mt-7 inline-block rounded-full bg-[#5A2E1F] px-7 py-3 font-semibold text-white transition hover:bg-[#E754A6]"
          >
            Conheça nosso cardápio
          </a>
        </div>

        <div className="flex justify-center">
          <div className="flex h-80 w-full max-w-md items-center justify-center rounded-[40px] border border-[#E8B9C7] bg-[#FFF5F8] shadow-[0_15px_40px_rgba(90,46,31,0.08)]">
            <div className="text-center">
              <span className="text-7xl">🍰</span>

              <p className="mt-5 font-serif text-3xl italic text-[#5A2E1F]">
                Puro Sabor de Vó
              </p>

              <p className="mt-2 text-sm text-[#A86F7F]">
                Feito com carinho
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About