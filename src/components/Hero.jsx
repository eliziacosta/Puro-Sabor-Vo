function Hero() {
  return (
    <section id="inicio" className="px-3">
      <div className="relative mx-auto h-[150px] max-w-[1450px] overflow-hidden rounded-[12px] bg-[#f7cbd5] md:h-[175px]">

        <div className="absolute left-0 top-0 h-full w-[48%] bg-[#f9dce3]">
          <div className="absolute -left-10 -top-12 h-32 w-32 rounded-full border-[18px] border-[#f4c2cf]" />

          <div className="absolute -bottom-16 left-8 h-36 w-36 rounded-full border-[18px] border-[#f4c2cf]" />
        </div>

        <div className="relative z-10 flex h-full w-[48%] flex-col items-center justify-center text-center">

          <div className="mb-1 flex items-center gap-2">
            <span className="h-px w-8 bg-[#8a3d32]" />
            <span className="text-sm text-[#8a3d32]">♡</span>
            <span className="h-px w-8 bg-[#8a3d32]" />
          </div>

          <p className="text-[6px] font-semibold uppercase tracking-[0.35em] text-[#5a2e1f] md:text-[8px]">
            SEJA BEM-VINDO À
          </p>

          <h1 className="mt-1 font-serif text-[26px] italic leading-none text-[#d94f8a] md:text-[40px]">
            Puro Sabor de Vó
          </h1>

          <p className="mt-2 text-[8px] leading-3 text-[#5a2e1f] md:text-[11px] md:leading-4">
            Bolos, doces e muito mais para adoçar
            <br />
            os seus melhores momentos!
          </p>

          <a
            href="#cardapio"
            className="mt-2 rounded-full bg-[#5a2e1f] px-4 py-1.5 text-[8px] font-medium text-white transition hover:bg-[#d94f8a] md:px-5 md:py-2 md:text-[10px]"
          >
            ♡ &nbsp; Ver Cardápio &nbsp; →
          </a>
        </div>

        <div className="absolute right-0 top-0 h-full w-[56%] overflow-hidden bg-[#e9b7b8]">

          <div className="absolute inset-0 bg-gradient-to-r from-[#f9dce3] via-transparent to-transparent" />

          <div className="absolute right-[25%] top-1/2 -translate-y-1/2 text-center">
            <div className="text-[70px] md:text-[100px]">
              🍰
            </div>
          </div>

          <div className="absolute right-[5%] top-1/2 -translate-y-1/2 text-center">
            <p className="font-serif text-sm italic text-[#5a2e1f] md:text-xl">
              Feito
              <br />
              com muito
              <br />
              amor!
            </p>

            <span className="mt-1 block text-xl text-[#5a2e1f]">
              ♡
            </span>
          </div>
        </div>

        <div className="absolute right-0 top-0 h-20 w-10 rounded-bl-full bg-[#f1c1cc]/70" />

      </div>
    </section>
  )
}

export default Hero