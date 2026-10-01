function Footer() {
  return (
    <footer
      id="contato"
      className="bg-[#5A2E1F] px-6 py-12 text-white"
    >
      <div className="mx-auto grid max-w-[1200px] gap-10 md:grid-cols-3">
        <div>
          <h2 className="font-serif text-3xl italic">
            Puro Sabor de Vó
          </h2>

          <p className="mt-4 max-w-sm leading-relaxed text-[#F7C8D8]">
            Doces feitos com carinho para tornar seus momentos
            ainda mais especiais.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">
            Navegação
          </h3>

          <div className="mt-4 flex flex-col gap-3">
            <a href="#inicio" className="text-[#F7C8D8] hover:text-white">
              Início
            </a>

            <a href="#cardapio" className="text-[#F7C8D8] hover:text-white">
              Cardápio
            </a>

            <a href="#contato" className="text-[#F7C8D8] hover:text-white">
              Contato
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">
            Faça seu pedido
          </h3>

          <p className="mt-4 leading-relaxed text-[#F7C8D8]">
            Entre em contato pelo WhatsApp e faça sua encomenda.
          </p>

          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-block rounded-full bg-[#E754A6] px-6 py-3 font-semibold transition hover:bg-[#C83F88]"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-[1200px] border-t border-[#8B5E3C] pt-6 text-center text-sm text-[#F7C8D8]">
        © 2026 Puro Sabor de Vó. Todos os direitos reservados.
      </div>
    </footer>
  )
}

export default Footer